import { Component, OnInit } from '@angular/core';
import { RetirementService } from '../shared/retirement/retirement.service';
import { RetirementOutput } from "../shared/retirement/retirement.model";

@Component({
  selector: 'ns-retirement-chart',
  templateUrl: './retirement-chart.component.html',
  styleUrls: ['./retirement-chart.component.css'],
  moduleId: module.id,
})
export class RetirementChartComponent implements OnInit {

  //   favoriteFruits = [
  //     { type: "🍎", count: 7 },
  //     { type: "🍌", count: 15 },
  //     { type: "🍍", count: 12 },
  //     { type: "🍒", count: 30 },
  //     { type: "🍇", count: 16 }
  // ];
  outputs = [
    { type: "You will have about", count: 0.88 },
    { type: "You will need about", count: 1.73 },  
  ];

  retirementOutput: RetirementOutput;

  constructor(private retirementService: RetirementService){

  }
   
  ngOnInit(): void {
    this.retirementOutput = this.retirementService.getOutput();
    this.outputs[0].count = this.retirementOutput.youWillHaveAbout;
    this.outputs[1].count = this.retirementOutput.youWillNeedAbout;
  }
     

}

