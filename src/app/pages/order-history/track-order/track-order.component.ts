import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";  
import { BrowserModule } from "@angular/platform-browser";
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-track-order",
  templateUrl: "./track-order.component.html",
  styleUrl: "./track-order.component.scss",
  standalone : true,
   imports: [RouterLink]
})
export class trackOrderComponent{
 constructor(){
    console.log("object created : track Order Component");
 }
}