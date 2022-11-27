import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { addProduct } from '../cart-state-store/cart.actions';
import { Urun } from '../models/urun';
import { UrunRepository } from '../models/urun.repository';
import { urunService } from '../services/urun.service';

@Component({
  selector: 'urun-listesi',
  templateUrl: './urun-listesi.component.html',
  styleUrls: ['./urun-listesi.component.css'],
  providers: [urunService],
})
export class UrunListesiComponent implements OnInit {
  urunler: Urun[] = [];
  loading: boolean = false;
  selectedProduct: Urun | null;
  urunRepository: UrunRepository;

  constructor(
    private route: ActivatedRoute,
    private urunService: urunService,
    private store: Store
  ) {
    this.urunRepository = new UrunRepository();
  }

  ngOnInit(): void {
    //bir ürünün detay kısmına geçmemizi saglayan kisim
    //  bu kisimda firebase de kaıtli verileri HttpClient ile get metodu ile listeliyecegim
    // bu kisimda daha önceden oluşturmuş oldugum listedeki id firebase ki id ye eşitledim bu şekilde daha rahat veileri push'lıyabilirim
    this.route.params.subscribe((params) => {
      this.loading = true;
      this.urunService.getUrunler(params['kategoriId']).subscribe((data) => {
        this.urunler = data;
        this.loading = false;
      });
    });
  }

  public buyProduct(product: Urun) {
    this.store.dispatch(addProduct(product));
  }
}
