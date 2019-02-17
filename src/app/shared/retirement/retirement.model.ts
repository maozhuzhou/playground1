export class RetirementInput {
  age: number;
  preTaxIncome: number;
  currentSavings: number;
  monthSave: number;
  monthlyRetirementSpending: number;
  otherExpectedIncome: number;
  wantToRetireAtAge: number;
  lifeExpectancy: number;
  investmentRateOfReturn: number;

  constructor(age = 35, preTaxIncome = 60000,currentSavings = 30000,
    monthSave = 500,monthlyRetirementSpending = 2550,otherExpectedIncome = 0,
    wantToRetireAtAge = 67,lifeExpectancy = 96,investmentRateOfReturn = 0.06
    ) {     
      this.age = age;
      this.preTaxIncome = preTaxIncome
      this.currentSavings = currentSavings
      this.monthSave = monthSave
      this.monthlyRetirementSpending = monthlyRetirementSpending
      this.otherExpectedIncome = otherExpectedIncome
      this.wantToRetireAtAge = wantToRetireAtAge
      this.lifeExpectancy = lifeExpectancy
      this.investmentRateOfReturn = investmentRateOfReturn
    }
}

export class RetirementOutput{
  youWillHaveAbout: number;
  youWillNeedAbout: number;
}

export class Person {
  public name: string;
  public age: number;
  public email: string;
  public city: string;
  public street: string;
  public streetNumber: number;

  constructor(name: string, age: number, email: string, city: string, street: string, streetNumber: number) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.city = city;
      this.street = street;
      this.streetNumber = streetNumber;
  }
}