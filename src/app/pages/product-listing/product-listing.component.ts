import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent {
  productList: any;
  dataList: any;
  constructor(
    private api: DataService,
    private data: DataService,
    private cartservice: CartService,
    private route: Router
  ) {

  }
  ngOnInit() {
    this.api.shoppingDetails()
      .subscribe(res => {
        this.productList = res;
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price });
        });
      });

    this.data.shoppingDetails().subscribe((res) => {
      this.dataList = res
      console.log(res);
    });
  }
  addtocart(item: any) {
    this.cartservice.addtoCart(item);
  }
  details(item:any) {
    this.route.navigateByUrl('/product-details')
  }
}
