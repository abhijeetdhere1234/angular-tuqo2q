import {Component} from "@angular/core"

@Component(
  {
    selector:"my-employee",
    templateUrl:"./employee.component.html"
  }
)

export class EmployeeComponent{
  // firstName : string ="Tom";
  // lastName: string = "Hopkins";
  // gender: string="Male";
  // age:number =18;
  // showDetails: boolean = false;

  // toggleDetails() :void{
  //   this.showDetails =!this.showDetails;
  // }
  employees : any[];
  constructor(){
  this.employees =[
  {code:'1', name:'a',annualSalary: 500,gender:'Male',dateofBirth:'5/9/2010'},
  {code:'2', name:'b',annualSalary: 500,gender:'Female',dateofBirth:'5/9/2010'}
];}

getEmployees() : void{
 this.employees =[
  {code:'1', name:'a',annualSalary: 500,gender:'Male',dateofBirth:'5/9/2010'},
  {code:'2', name:'b',annualSalary: 500,gender:'Female',dateofBirth:'5/9/2010'},
  {code:'3', name:'c',annualSalary: 500,gender:'Male',dateofBirth:'5/9/2000'}
];
}

trackByEmpCode(index:number,employee:any):string{
return employee.code;
}
}