import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KategoriService } from '../services/kategori.service';

@Component({
  selector: 'app-kategori-ekleme',
  templateUrl: './kategori-ekleme.component.html',
  styleUrls: ['./kategori-ekleme.component.css'],
  providers: [KategoriService]
})
export class KategoriEklemeComponent implements OnInit {

  constructor(private kategoriServis:KategoriService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
 
  kategoriKaydet(name:any){
    this.kategoriServis.kategoriEkle({id:0 , name: name.value}).subscribe(data=>{
      this.router.navigate(["/urunler"]);
    })
  }
}
