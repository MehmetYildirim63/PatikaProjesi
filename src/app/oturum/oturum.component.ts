import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { oturumResponse } from '../models/oturum-response';
import { OturumService } from '../services/oturum.service';

@Component({
  selector: 'oturum',
  templateUrl: './oturum.component.html',
  styleUrls: ['./oturum.component.css'],
})
export class OturumComponent implements OnInit {
  isLoginMode: boolean = false;
  loading: boolean = false;
  error: string = '';
  constructor(private oturumService: OturumService, private router: Router) {}

  ngOnInit(): void {}

  toogleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  kullaniciKayit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.loading = true;
    const email = form.value.email;
    const password = form.value.password;
    let OturumResponse: Observable<oturumResponse>;

    if (this.isLoginMode) {
      OturumResponse = this.oturumService.login(email, password);
    } else {
      OturumResponse = this.oturumService.register(email, password);
    }
    OturumResponse.subscribe({
      next: () => {
        this.loading = false;
        this.error = '';
        this.router.navigate(['/urunler']);
      },
      error: (err) => {
        this.loading = false;
        this.error = 'hata oluştu';

        if (err.error.error) {
          switch (err.error.error.message) {
            case 'EMAIL_EXISTS':
              this.error = 'Bu mail zaten kullanılıyor';
              break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
              this.error = 'Çok fazla denendi bir süre sonra tekrar deneyiniz';
              break;
            case 'EMAIL_NOT_FOUND':
              this.error =
                'Bu tanımlayıcıya karşılık gelen email kaydı yok. Kullanıcı silinmiş olabilir';
              break;
            case 'INVALID_PASSWORD':
              this.error = 'Hatalı parola';
              break;
          }
        }

        console.log(err);
      },
    });
  }
}
