import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { RetirementInput } from "./retirement.model";
import { RetirementOutput } from "./retirement.model";

@Injectable()
export class RetirementService {
    retirementInput: RetirementInput;
    retirementOutput: RetirementOutput;

    constructor( ) {         
        this.retirementOutput = new  RetirementOutput();
        this.retirementInput = new RetirementInput();
    }

    getInput(){
        return this.retirementInput;
    }
    
    saveInput(model: RetirementInput){
        this.retirementInput = model; 
    };

    getOutput(){
        this.retirementOutput.youWillHaveAbout = 0.88
        this.retirementOutput.youWillNeedAbout = //1.73
        this.retirementInput.monthlyRetirementSpending * 12 * 
        (this.retirementInput.lifeExpectancy - this.retirementInput.wantToRetireAtAge)/1000000;

        return this.retirementOutput;
    }
    
}