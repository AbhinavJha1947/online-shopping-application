import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartNotEmptyGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.cartService.getCartItems().length > 0) {
      return true;
    } else {
      // Redirect to the product listing page if the cart is empty
      this.router.navigate(['/products']);
      return false;
    }
  }
}
