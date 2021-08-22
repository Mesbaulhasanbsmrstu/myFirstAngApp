import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  employee: any = [];
  addEmployeeForm!: FormGroup;
  constructor(
    private employeeService: EmployeeService,
    private homeDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe((data) => {
      this.employee = data;
    });
  }

  openAddEmpleeModal() {
    this.homeDialog.open(AddEmployeeComponent, {
      width: '320px',
      disableClose: true,
    }).afterClosed().subscribe(data => {
      if( data == true) {
        console.log("Emplyee Added")

        this.employeeService.getEmployee().subscribe((data) => {
          this.employee = data;
        });
      } else {
        console.log("Emplyee Not Added")
      }
    });
  }
}
