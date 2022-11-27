// interface Nedir : Obje yapısının şemasını önceden tanımlamamıza yardımci olur
//bu kisim urun-list companentindeki verilerin şeması modelini çıkartıyoruz
export interface Urun {
  id: any;
  urunAd: string;
  fiyat: number;
  description: string;
  isActive: boolean;
  urunResmi: string;
  satici: string;
  kategoriId: number;
  stock: number;
}
