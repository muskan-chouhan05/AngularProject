import { Component } from "@angular/core";  
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common"; 
import { BrowserModule } from "@angular/platform-browser";
@Component({
  selector: "app-view-order",
  templateUrl: "./view-order.component.html",
  styleUrl: "./view-order.component.scss",
  standalone : true,
   imports: [RouterLink]
})

export class viewOrderComponent{
 constructor(){
    console.log("object created : view Order Component");
 }
}
