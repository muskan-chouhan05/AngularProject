import { Component } from "@angular/core";  
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
  standalone: true,
   imports: [RouterLink]
})
export class dashboardComponent{
 constructor(){
    console.log("object created : dashboard Component");
 }
}
