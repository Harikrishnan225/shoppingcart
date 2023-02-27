import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: any = [];
  grandTotal: number = 0;

  constructor(
    private route: Router,
    private cartservice: CartService
  ) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartservice.getTotalPrice()
      })
  }

  shopnow() {
    this.route.navigateByUrl('/product-listing')
  }

  itemRemove(item: any) {
    this.cartservice.removeCartItem(item);
  }

}
