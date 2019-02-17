import { Component, OnInit } from '@angular/core';
import { EventData } from "tns-core-modules/data/observable";
import { Label } from "tns-core-modules/ui/label";
import { TextField} from 'tns-core-modules/ui/text-field/text-field';
import { Router } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { RetirementService } from '../shared/retirement/retirement.service';
import { RetirementInput } from '../shared/retirement/retirement.model';

@Component({
  selector: 'ns-retirement-plan',
  templateUrl: './retirement-plan.component.html',
  styleUrls: ['./retirement-plan.component.css'],
  moduleId: module.id,
})
export class RetirementPlanComponent implements OnInit {

  //   favoriteFruits = [
  //     { type: "🍎", count: 7 },
  //     { type: "🍌", count: 15 },
  //     { type: "🍍", count: 12 },
  //     { type: "🍒", count: 30 },
  //     { type: "🍇", count: 16 }
  // ];
  favoriteFruits = [
    { type: "You will have about", count: 0.88 },
    { type: "You will need about", count: 1.73 },  
  ];
  retirementInput: RetirementInput;
  constructor(private router: Router,private retirementService: RetirementService){
    this.retirementInput = this.retirementService.getInput();
  }

  ngOnInit(): void {
  }
     
 moreTap() {
  //let button = <Button>args.object;
  //alert('moreTap()');
  console.log('more...')
  this.router.navigate(["/retirementInput"]);
  //this.counter++;
  //alert("Tapped " + this.counter + " times!");
}

  public onReturn(args) {
      let textField = <TextField>args.object;

      console.log("onReturn");
       
  }

  onAddTap(args: EventData) {
    //let button = <Button>args.object;

    //this.counter++;
    //alert("Tapped " + this.counter + " times!");
 }
 onMinusTap(args: EventData) {
  //let button = <Button>args.object;

  //this.counter++;
  //alert("Tapped " + this.counter + " times!");
}

}

