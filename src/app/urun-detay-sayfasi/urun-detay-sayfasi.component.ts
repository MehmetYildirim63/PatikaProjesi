import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addProduct } from '../cart-state-store/cart.actions';
import { Urun } from '../models/urun';
import { urunService } from '../services/urun.service';

@Component({
  selector: 'app-urun-detay-sayfasi',
  templateUrl: './urun-detay-sayfasi.component.html',
  styleUrls: ['./urun-detay-sayfasi.component.css'],
})
//servis oluşturduktan sonra repository kismina artık gerek kalmıyor çünkü onları oluşturdugumuz firebase servisinden alıyoruz
export class UrunDetaySayfasiComponent implements OnInit {
  urun: Urun | undefined;
  loading: boolean = false;

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
  public buyProduct(product: Urun) {
    this.store.dispatch(addProduct(product));
  }
}
