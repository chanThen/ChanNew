import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule } from '@angular/router';
import {HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { SignupComponent } from './signup/signup.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SubscribedbooksComponent } from './subscribedbooks/subscribedbooks.component';
import { ProductComponent } from './product/product.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SingleProductComponent } from './single-product/single-product.component';

import { LoginService } from './service/login.service';
import { CategoryService } from './service/category.service';
import { WishListService } from './service/wishList.service';
import { ProductService } from './service/product.service';
import { SubscribedBookService } from './service/subscribedBook.service';
import { SingleProductService } from './service/singleProduct.service';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import {SubscriptionService } from './service/subscription.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashBoardComponent,
    AboutComponent,
    CategoriesComponent,
    WishlistComponent,
    SubscribedbooksComponent,
    ProductComponent,
    SingleProductComponent,
    SubscriptionPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule
  ],
  providers: [LoginService,CategoryService,WishListService,ProductService,SubscribedBookService,
              SingleProductService,SubscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
