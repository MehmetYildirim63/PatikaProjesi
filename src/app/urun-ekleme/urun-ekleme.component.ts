import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kategori } from '../models/kategori';
import { KategoriService } from '../services/kategori.service';
import { urunService } from '../services/urun.service';

@Component({
  selector: 'app-urun-ekleme',
  templateUrl: './urun-ekleme.component.html',
  styleUrls: ['./urun-ekleme.component.css'],
  providers: [KategoriService],
})
export class UrunEklemeComponent implements OnInit {
  kategoriler: Kategori[] = [];
  error: string = '';
  constructor(
    private urunService: urunService,
    private kategoriServis: KategoriService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.kategoriServis.getKategoriler().subscribe((data) => {
      this.kategoriler = data;
    });
  }
  urunKaydet(
    urunAd: any,
    fiyat: any,
    urunResmi: any,
    description: any,
    isActive: any,
    kategoriId: any,
    satici: any,
    stock: any
  ) {
    if (urunAd.value == '' || urunAd.value.lenght < 2) {
      this.error = 'Ürün ismi en az iki karekterli olmalidir...';
      return;
    }
    if (fiyat.value == '') {
      this.error = 'Ürün fiyati girmelisiniz';
      return;
    }
    if (urunResmi.value == '') {
      this.error = 'Resmin ismini girmelisiniz';
      return;
    }
    if (kategoriId.value == '0') {
      this.error = 'Kategori id girmelisiniz';
      return;
    }
    if (description.value == '') {
      this.error = 'Açıklama girmelisiniz';
      return;
    }
    if (satici.value == '' || satici.value > 15) {
      this.error = 'Satici ismi girmelisiniz 15 karekterden fazla giremezsiniz';
      return;
    }

    const urun = {
      id: 1,
      urunAd: urunAd.value,
      fiyat: fiyat.value,
      urunResmi: urunResmi.value,
      kategoriId: kategoriId.value,
      description: description.value,
      stock: stock.value,
      satici: satici.value,
      isActive: isActive.checked,
    };

    this.urunService.urunOlusturma(urun).subscribe((data) => {
      this.router.navigate(['/urunler']);
    });
  }
}
