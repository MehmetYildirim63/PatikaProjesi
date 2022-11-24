import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { KategoriEklemeComponent } from './kategori-ekleme/kategori-ekleme.component';
import { OturumComponent } from './oturum/oturum.component';
import { UrunDetaySayfasiComponent } from './urun-detay-sayfasi/urun-detay-sayfasi.component';
import { UrunEklemeComponent } from './urun-ekleme/urun-ekleme.component';
import { UrunListesiComponent } from './urun-listesi/urun-listesi.component';

const routes: Routes = [
  {
    path:'',
    component:AnasayfaComponent
  },
  {
    path:'urunler/ekleme',
    component:UrunEklemeComponent
  },
  {
    path:'kategoriler/ekleme',
    component:KategoriEklemeComponent
  },
  {
    path:'urunler',
    component:UrunListesiComponent
  },
  {
    path:'urunler/:urunId',
    component:UrunDetaySayfasiComponent
  },
   {
    path:'urunler/kategori/:kategoriId',
    component:UrunListesiComponent
   },
   {
    path:'oturum',
    component:OturumComponent
   } 





];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
