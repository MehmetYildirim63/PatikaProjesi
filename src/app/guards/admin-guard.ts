import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { mapToStyles } from "@popperjs/core/lib/modifiers/computeStyles";
import { map, Observable, tap } from "rxjs";
import { Kullanici } from "../models/kullanici";
import { OturumService } from "../services/oturum.service";
import { urunService } from "../services/urun.service";
 
@Injectable({providedIn: 'root'})
export class AdminGuard implements CanActivate {
  
  constructor(
    private oturumService: OturumService,
    private router: Router
    ) {}

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | Observable <boolean |UrlTree> |Promise<boolean | UrlTree>  {
      
    return this.oturumService.kullanici.pipe(
      map(Kullanici =>{
           
        return !!Kullanici && Kullanici.email == "eren@gmail.com"
      }),
      tap(isAdmin =>{
        if(!isAdmin){
          this.router.navigate(['/oturum']);
        }
      })
    )
  }

}