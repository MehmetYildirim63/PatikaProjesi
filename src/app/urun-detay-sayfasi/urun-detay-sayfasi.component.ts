import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Urun } from '../models/urun';
import { urunService } from '../services/urun.service';
// import { UrunRepository } from '../models/urun.repository';

@Component({
  selector: 'app-urun-detay-sayfasi',
  templateUrl: './urun-detay-sayfasi.component.html',
  styleUrls: ['./urun-detay-sayfasi.component.css'],
})
// bu kisimda servis oluşturdutan sonra yorum satı olan kısımları artık servis ile almaya başladim
//servis oluşturduktan sonra repository kismina artık gerek kalmıyor çünkü onları oluşturdugumuz firebase servisinden alıyoruz
export class UrunDetaySayfasiComponent implements OnInit {
  urun: Urun | undefined;
  loading: boolean = false;
  // urunRepository  : UrunRepository;

  constructor(
    private route: ActivatedRoute,
    private urunService: urunService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['urunId'];
      this.loading = true;
      this.urunService.getUrunlerById(id).subscribe((result) => {
        this.urun = { ...result, id: id };
        this.loading = false;
      });
    });
  }
}
