import { Component, OnInit } from '@angular/core';
import { Kullanici } from '../models/kullanici';
import { OturumService } from '../services/oturum.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   
  isAuthenhicated: boolean =false;

  constructor(private oturumservise:OturumService) { }

  ngOnInit(): void {
    this.oturumservise.kullanici.subscribe(user => {
      this.isAuthenhicated=!!Kullanici
    })
  }

}
