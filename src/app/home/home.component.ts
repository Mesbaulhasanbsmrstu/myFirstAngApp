import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employee:any=[];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.employeeService.getEmployee().subscribe(data => { this.employee = data })
  
  }

}
