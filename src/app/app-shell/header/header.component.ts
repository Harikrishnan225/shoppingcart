import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  totalItem: number = 0;
  constructor(private route: Router,
    private cartservice: CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
      .subscribe((res) => {
        this.totalItem = res.length;
      });
  }

  cartPage() {
    this.route.navigateByUrl('/cart')
  }
}
