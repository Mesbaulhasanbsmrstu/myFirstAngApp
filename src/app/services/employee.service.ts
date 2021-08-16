import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee() {
    return this.http.get(`${environment.apiUrl}/UserEmployee/details`).pipe(map(data => { return data }))

  
  }
  addEmployee(employeeData:any) {
    return this.http.post<any>(`${environment.apiUrl}/UserEmployee/addEmployee`, employeeData).pipe(map(data => { return data }))
  }
}

