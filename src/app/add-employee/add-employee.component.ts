import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  addEmployeeForm!: FormGroup;

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
    // this.employeeService.getEmployee().subscribe(data => { this.employee = data })
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
    this.employeeService.addEmployee(employeeData).subscribe(data => {
      if(data['message'] == 'success') {
        this.dialogRef.close(true)
      }
    });

  }
  get getControl() {
    return this.addEmployeeForm.controls;
  }

}
