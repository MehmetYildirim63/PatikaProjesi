import { Urun } from "./urun";

 export class UrunRepository{

  private  urunler : Urun[] = [
     {id : 1, kategoriId : 1, satici : "Casio Ticaret",stock : 100, urunAd : "Spectrum",     fiyat : 2222, description : "Mat Siyah Yuvarlak Dijital Led Ekran Siyah Silikon Kordonlu Unisex Saat St-303563 ST-303563",   urunResmi : "./assets/patikaProjeresim/res2.jpeg", isActive   : true },
     {id : 2, kategoriId : 2, satici : "Casio Ticaret",stock : 100, urunAd : "Frank Martin", fiyat : 2222, description : "Orijinal Yeni Sezon Çelik Zarif Şık Saat Bileklik Hediyeli 14215M.02",                          urunResmi : "./assets/patikaProjeresim/rea.jpg",  isActive    : true },
     {id : 3, kategoriId : 3, satici : "Casio Ticaret",stock : 100, urunAd : "Mopal",        fiyat : 2222, description : "Deri Unisex Kol Saati Apwa065000 APWA065000",                                                   urunResmi : "./assets/patikaProjeresim/res8.jpeg",  isActive  : true },
     {id : 4, kategoriId : 2, satici : "Casio Ticaret",stock : 100, urunAd : "Daniel Klein", fiyat : 2222, description : "LIGE Saat Erkek Moda Spor Kuvars Saat Erkek Saatler Top Marka Lüks Tam Çelik Altın Kol Saati",  urunResmi : "./assets/patikaProjeresim/res6.jpeg",  isActive  : true },
     {id : 5, kategoriId : 1, satici : "Casio Ticaret",stock : 100, urunAd : "Newera Watch", fiyat : 2222, description : "Kadın Kol Saati Çelik Su Geçirmez Garantili Bileklik Hediyelidir TKSBLL002",                    urunResmi : "./assets/patikaProjeresim/res.jpg",  isActive    : true },
     {id : 6, kategoriId : 2, satici : "Casio Ticaret",stock : 100, urunAd : "Casio",        fiyat : 2222, description : "Mıknatıslı Dokunmatik Unisex Kol Saati Xt250128 XT250128",                                      urunResmi : "./assets/patikaProjeresim/res10.jpeg",  isActive : true },
     {id : 7, kategoriId : 3, satici : "Casio Ticaret",stock : 100, urunAd : "Ferrucci",     fiyat : 2222, description : "Deri Unisex Kol Saati Apwa065000 APWA065000",                                                   urunResmi : "./assets/patikaProjeresim/res9.jpeg",  isActive  : true },
  ]; 
  getUrunler(): Urun[]{
    return this.urunler.filter(p=>p.isActive)
  }

  getUrunlerById(id: number){
    return this.urunler.find(p=>p.id==id)
  }

    getUrunlerByKategoriId(id: number): Urun[]{
    return this.urunler.filter(p=>p.kategoriId==id);
  }

 }