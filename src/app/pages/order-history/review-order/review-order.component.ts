import { CommonModule } from "@angular/common";
import { Component } from "@angular/core"; 
import { BrowserModule } from "@angular/platform-browser";
import { RouterLink } from "@angular/router"; 
@Component({
  selector: "app-review-order",
  templateUrl: "./review-order.component.html",
  styleUrl: "./review-order.component.scss",
  standalone : true,
   imports: [RouterLink]
})
export class reviewOrderComponent{
 constructor(){
    console.log("object created : review Order Component");
 }
}
