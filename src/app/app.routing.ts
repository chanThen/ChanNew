import { Routes,RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SubscribedbooksComponent } from './subscribedbooks/subscribedbooks.component';
import { ProductComponent } from './product/product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';

const ROUTES: Routes = [
    {path: '', redirectTo:'/login', pathMatch:'full'},
    {path: 'login', component:LoginComponent},
    {path: 'signUp', component:SignupComponent}, 
    {path: 'dashboard', component:DashBoardComponent ,
        children: [
            {path: '',redirectTo:'About',pathMatch:'full'},
            { path: 'About', component: AboutComponent },
            { path: 'WishList', component: WishlistComponent },
            { path: 'SubscribedBooks', component: SubscribedbooksComponent },
            { path: 'Categories', component: CategoriesComponent },
            { path: 'product/:categoryId', component: ProductComponent},
            { path: 'singleProduct/:bookId', component: SingleProductComponent},
            {path: 'subscribePage/:bookId', component:SubscriptionPageComponent},
        ]
    }
];


export const routing = RouterModule.forRoot(ROUTES);