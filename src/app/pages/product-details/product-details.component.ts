import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  value:any;
  constructor(
    private data: DataService
  ) { }
  ngOnInit(): void {
    this.data.getItem(this.value)
  }
}
