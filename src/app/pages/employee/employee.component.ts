import { Component, inject, OnInit } from '@angular/core';
import { APIResponse, ChildDept, Employee, ParentDept } from '../../model/main';
import { FormsModule } from '@angular/forms';
import { MainService } from '../../service/main.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule, AsyncPipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  employeeObj: Employee = new Employee();
  parentDeptId!: string;
  parentDepartments: ParentDept[] = [];
  childDepartments: ChildDept[] = [];
  // employees: Employee[] = [];
  employees$: Observable<Employee[]> = new Observable<Employee[]>();

  mainService = inject(MainService);

  ngOnInit(): void {
    this.getParentDept();
    this.employees$ = this.mainService.getEmployees();
  }

  getParentDept() {
    this.mainService.getDepartment().subscribe((res: APIResponse) => {
      this.parentDepartments = res.data;
    });
  }

  deleteEmployee(id: number) {
    this.employees$ = this.mainService.deleteEmployee(id);
  }

  onDeptChange() {
    this.mainService
      .getChildDepartmentByParentId(this.parentDeptId)
      .subscribe((res: APIResponse) => {
        this.childDepartments = res.data;
      });
  }

  onSubmit() {
    this.mainService
      .createEmployee(this.employeeObj)
      .subscribe((res: Employee) => {
        alert('Employee created successfully');
        this.employeeObj = new Employee();
      });
  }
}
