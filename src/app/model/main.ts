export class Employee {
  employeeId: number;
  employeeName: string;
  emailId: string;
  contactNo: string;
  deptId: number;
  password: string;
  gender: string;
  role: string;

  constructor() {
    this.contactNo = '';
    this.employeeId = 0;
    this.employeeName = '';
    this.emailId = '';
    this.password = '';
    this.deptId = 0;
    this.gender = '';
    this.role = 'Employee';
  }
}

export interface ParentDept {
  departmentId: number;
  departmentName: string;
  departmentLogo: string;
}

export interface ChildDept {
  childId: number;
  parentDeptId: number;
  departmentName: string;
}

export interface APIResponse {
  message: string;
  result: boolean;
  data: any;
}
