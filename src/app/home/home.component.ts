import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employee: any = [];
  addEmployeeForm!: FormGroup;
  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.employeeService.getEmployee().subscribe(data => { this.employee = data })
    this.addEmployeeForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    
    })

    
  
  }
  addEmployee() {
    let employeeData = {
      name: this.getControl.name.value,
      age: this.getControl.age.value,
      address: this.getControl.address.value,
      phone: this.getControl.phone.value,
      user_id:"45"
    }
    this.employeeService.addEmployee(employeeData).subscribe(data => console.log(data));

  }
  get getControl() {
    return this.addEmployeeForm.controls;
  }

}
