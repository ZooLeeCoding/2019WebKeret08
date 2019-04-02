import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {

  constructor(private router: Router) { 
  }

  canActivate(): boolean {
    if(localStorage.getItem("username")) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
