import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { AdminGuard } from './guards/admin-guard';
import { KategoriEklemeComponent } from './kategori-ekleme/kategori-ekleme.component';
import { OturumComponent } from './oturum/oturum.component';
import { SepetIslemleriComponent } from './sepet-islemleri/sepet-islemleri.component';
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
    component:UrunEklemeComponent,canActivate:[AdminGuard]
  },
  {
    path:'kategoriler/ekleme',
    component:KategoriEklemeComponent,canActivate:[AdminGuard]
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
   },
      {
    path:'sepet',
    component:SepetIslemleriComponent
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
