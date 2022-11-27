import { Component, OnInit } from '@angular/core';
import { Kategori } from '../models/kategori';
import { KategoriRepository } from '../models/kategori.repository';
import { Kullanici } from '../models/kullanici';
import { KategoriService } from '../services/kategori.service';
import { OturumService } from '../services/oturum.service';
@Component({
  selector: 'kategori-listesi',
  templateUrl: './kategori-listesi.component.html',
  styleUrls: ['./kategori-listesi.component.css'],
  providers: [KategoriService],
})
export class KategoriListesiComponent implements OnInit {
  kategoriler: Kategori[];
  selectedKategori: Kategori | null;
  isAuthenhicated: boolean = false;

  constructor(
    private kategoriServis: KategoriService,
    private oturumService: OturumService
  ) {}

  ngOnInit(): void {
    this.kategoriServis.getKategoriler().subscribe((data) => {
      this.kategoriler = data;
    });
    this.oturumService.kullanici.subscribe((Kullanici) => {
      this.isAuthenhicated = !!Kullanici;
    });
  }
  displayAll = true;

  kategoriSecimi(kategori?: Kategori): void {
    if (kategori) {
      this.selectedKategori = kategori;
      this.displayAll = false;
    } else {
      this.selectedKategori = null;
      this.displayAll = true;
    }
  }
}
