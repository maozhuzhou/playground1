import { Component, OnInit } from '@angular/core';
import { EventData } from "tns-core-modules/data/observable";
import { Label } from "tns-core-modules/ui/label";
import { TextField} from 'tns-core-modules/ui/text-field/text-field';
import { Router } from "@angular/router";
import { RetirementInput,Person } from "../shared/retirement/retirement.model";
import { RetirementService } from "../shared/retirement/retirement.service";

@Component({
  selector: 'ns-retirement-input',
  templateUrl: './retirement-input.component.html',
  styleUrls: ['./retirement-input.component.css'],
  moduleId: module.id,
})
export class RetirementInputComponent implements OnInit {
  retirementInput: RetirementInput;
  person: Person;

  constructor(private router: Router, private retirementService: RetirementService){
    
  }
   
  ngOnInit(): void {
    this.retirementInput = this.retirementService.getInput();//new RetirementInput();
    this.person = new Person("John", 23, "john@company.com", "New York", "5th Avenue", 11);
     
  }
  public onReturn(args) {
    let textField = <TextField>args.object;
    textField.dismissSoftInput();
    console.log("onReturn");
     
  }
  moreTap() {
    this.retirementService.saveInput(this.retirementInput);
    //let button = <Button>args.object;
    //alert('moreTap()');
    //console.log('more...')
    this.router.navigate(["/retirementChart"]);
    //this.counter++;
    //alert("Tapped " + this.counter + " times!");
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

