import { Component } from "@angular/core";  
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
@Component({
    template:"./checkout.component.html",
    styleUrl:"./checkout.component.scss",
    standalone : true,
    imports : [BrowserModule , CommonModule]

})
export class checkoutComponent{
 constructor(){
    console.log("object created : check out Component");
 }
}