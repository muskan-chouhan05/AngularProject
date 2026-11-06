import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { reviewOrderComponent } from "./review-order/review-order.component";
import { trackOrderComponent } from "./track-order/track-order.component";
import { viewOrderComponent } from "./view-order/view-order.compontent"; 

export const routes : Routes= [
    {
        path : 'review-order',
        component : reviewOrderComponent
    },
    {
        path : 'track-order',
        component : trackOrderComponent
    },
     {
        path : 'view-order',
        component : viewOrderComponent
    }
];
@NgModule({
    imports : [RouterModule.forChild(routes)],
    providers :[RouterModule]
})
export class orderHistoryRoutingrModule{
         constructor(){
            console.log("created created : order history routing module ");
         }
}