import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
	    {
            	path:"", component: ProductListComponent
        },{
                path: 'products/:productId', component: DetailsComponent
        },{
                path: 'cart', component: CartComponent
       }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
