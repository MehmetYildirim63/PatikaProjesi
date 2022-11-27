import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UrunListesiComponent } from './urun-listesi/urun-listesi.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UrunComponent } from './urun-listesi/urun/urun.component';
import { CommonModule } from '@angular/common';
import { KategoriListesiComponent } from './kategori-listesi/kategori-listesi.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { UrunDetaySayfasiComponent } from './urun-detay-sayfasi/urun-detay-sayfasi.component';
import { HttpClientModule } from '@angular/common/http';
import { OturumComponent } from './oturum/oturum.component';
import { UrunEklemeComponent } from './urun-ekleme/urun-ekleme.component';
import { KategoriEklemeComponent } from './kategori-ekleme/kategori-ekleme.component';
import { StoreModule } from '@ngrx/store';
import { SepetIslemleriComponent } from './sepet-islemleri/sepet-islemleri.component';
import {
  cartReducer,
  metaReducerLocalStorage,
} from './cart-state-store/cart.reducer';
@NgModule({
  declarations: [
    AppComponent,
    UrunListesiComponent,
    NavbarComponent,
    UrunComponent,
    KategoriListesiComponent,
    AnasayfaComponent,
    UrunDetaySayfasiComponent,
    OturumComponent,
    UrunEklemeComponent,
    KategoriEklemeComponent,
    SepetIslemleriComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      { cartEntries: cartReducer },
      { metaReducers: [metaReducerLocalStorage] }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
