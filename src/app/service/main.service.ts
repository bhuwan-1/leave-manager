import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, Employee } from '../model/main';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  APIURL: string = 'https://projectapi.gerasim.in/api/EmployeeManagement/';

  constructor(private http: HttpClient) {}

  getDepartment(): Observable<APIResponse> {
    return this.http.get<APIResponse>(this.APIURL + 'GetParentDepartment');
  }

  getChildDepartmentByParentId(id: string): Observable<APIResponse> {
    return this.http.get<APIResponse>(
      this.APIURL + `GetChildDepartmentByParentId?deptId=${id}`
    );
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      `${this.APIURL}CreateEmployee`,
      employee
    );
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.APIURL + 'GetAllEmployees');
  }

  deleteEmployee(id: number) : Observable<Employee[]> {
      return this.http.delete<Employee[]>(`${this.APIURL}DeleteEmployee/${id}`);
  }
}
