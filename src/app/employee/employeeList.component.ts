import {Component} from '@angular/core'

@Component(
  {
    selector:'employee-list',
    templateUrl:'/employeeList.component.html',
    styleUrls: ['/employeeList.component.css']
  }
)

export class EmployeeListComponent{
employees : any[]=[
  {code:'1', name:'a',annualSalary: 500,gender:'Male',dateofBirth:'5/9/2010'},
  {code:'2', name:'b',annualSalary: 500,gender:'Male',dateofBirth:'5/9/2010'}
];
}