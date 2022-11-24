import { Component, OnInit } from '@angular/core';
import {Kategori } from '../models/kategori';
import { KategoriRepository } from '../models/kategori.repository';
import { KategoriService } from '../services/kategori.service';

@Component({
  selector: 'kategori-listesi',
  templateUrl: './kategori-listesi.component.html',
  styleUrls: ['./kategori-listesi.component.css'],
  providers: [KategoriService]
})
export class KategoriListesiComponent implements OnInit {
  kategoriler:Kategori[];
  selectedKategori:Kategori | null;
 

  constructor(private kategoriServis:KategoriService) {
 
  }

  ngOnInit(): void {
    this.kategoriServis.getKategoriler().subscribe(data=>{
       this.kategoriler=data;
    })
  }
  displayAll = true;

  kategoriSecimi(kategori?: Kategori){
   
    if(kategori){
     this.selectedKategori = kategori;
     this.displayAll=false;
   }
   else{
    this.selectedKategori=null;
    this.displayAll=true;
   } 
  }
}
