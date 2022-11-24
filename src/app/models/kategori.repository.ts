import { Kategori } from "./kategori";

export class KategoriRepository{
  private kategoriler :Kategori[] = [
    {id : 1, name : "Erkek Saat"},
    {id : 2, name : "Kadın Saat"},
    {id : 3, name : "Çocuk Saat"}
  ];

  getKategoriler(): Kategori[] {
    return this.kategoriler
  }
  getKategoriById(id: number){
    return this.kategoriler.find(c=>c.id == id)
  }
}