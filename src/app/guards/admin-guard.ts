import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { OturumService } from '../services/oturum.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private oturumService: OturumService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.oturumService.kullanici.pipe(
      map((Kullanici) => {
        return !!Kullanici && Kullanici.email == 'eren@gmail.com';
      }),
      tap((isAdmin) => {
        if (!isAdmin) {
          this.router.navigate(['/oturum']);
        }
      })
    );
  }
}
//Bu kisimda linklerimizi korudugumuz kısım yani belli kurallara göre linklerimize ulaşabliyoruz bunuda html ksminda ngif ile saglıyoruz.
