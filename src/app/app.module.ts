import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-shell/header/header.component';
import { FooterComponent } from './app-shell/footer/footer.component';
import { ProductListingComponent } from './pages/product-listing/product-listing.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductEdtingComponent } from './pages/product-listing/product-edting/product-edting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from "./auth/login/login.component";
import { CartComponent } from './pages/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    ProductEdtingComponent,
    CartComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AppModule { }
