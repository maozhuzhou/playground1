import { Component, OnInit } from "@angular/core";
 

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./chart.component.html",
    styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    favoriteFruits = [
        { type: "🍎", count: 7 },
        { type: "🍌", count: 15 },
        { type: "🍍", count: 12 },
        { type: "🍒", count: 30 },
        { type: "🍇", count: 16 }
    ];
    
    constructor( ) {
    }

    ngOnInit(): void {
    }
    
}
