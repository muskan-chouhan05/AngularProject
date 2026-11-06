import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { searchItemComponent } from "./search-item/search-item.component";
import { checkoutComponent } from "./checkout/checkout.component";

export const routes : Routes= [
    {
        path : 'checkout',
        component : checkoutComponent
    },
    {
        path : 'serch-item',
        component : searchItemComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    providers :[RouterModule]
})
export class placeOrderModule{
         constructor(){
            console.log("created created : place order routing module ");
         }
}