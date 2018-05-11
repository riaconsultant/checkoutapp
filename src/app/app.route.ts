import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout/checkout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShopComponent } from './shop/shop.component';

const routes:Routes = [
    {path:'',redirectTo:'checkout',pathMatch:'full'},
    {path:'checkout',component:CheckoutComponent},
    {path:'shop',component:ShopComponent},
    {path:'**',component:PagenotfoundComponent}
]

@NgModule({
    declarations:[],
    imports:[
        RouterModule.forRoot(routes,{enableTracing:false})
    ],
    exports:[RouterModule]
})

export class AppRouter{};