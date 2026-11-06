import { NgModule } from "@angular/core";
import { viewOrderComponent } from "./view-order/view-order.compontent";
import { reviewOrderComponent } from "./review-order/review-order.component";
import { trackOrderComponent } from "./track-order/track-order.component";
@NgModule({
    declarations :[],
    imports : [  viewOrderComponent,
       reviewOrderComponent,
       trackOrderComponent],
    providers :[]
})
export class orderHistoryModule{
         constructor(){
            console.log("created created : order history module ");
         }
}