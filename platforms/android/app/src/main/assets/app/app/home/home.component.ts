import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html", 
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    loginClicked(){
        this.router.navigate(["/login"]);
    }
    chartClicked(){
        this.router.navigate(["/chart"]);
    }
    TextClicked(){
        this.router.navigate(["/text"]);
    }
}
