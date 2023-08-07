import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/Employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit  {


  title = 'Tour of Heroes';
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  // myHero = this.heroes[0];

    employees:Employee[] =[
    {
     id:"fdgnifhfsd23456",
     name:"PAwan",
     email:"pawankhandwe@gmail.com",
     phone:7999700122,
     salary:600000,
     department:"information technology"

    },{
      id:"fdgnifhfsd23457",
      name:"piyush",
      
     email:"piyushkhandwe@gmail.com",
      phone:9199264728,
      salary:800000,
      department:"business"
    },
    {
      id:"fdgnifhfsd23458",
      name:"ashu",
      
     email:"ashukhandwe@gmail.com",
      phone:6265521966,
      salary:300000,
      department:"Human Resource "
    }
  ];
  constructor()
  {
         
  }

  ngOnInit():void{

  }

}
