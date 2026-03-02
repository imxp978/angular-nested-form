import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDialogService {
  employeeList = [
    { id: 1, name: '王小明', title: '專員' },
    { id: 2, name: '陳小華', title: '經理' },
    { id: 3, name: '張小英', title: '副總' },
    { id: 4, name: '李小美', title: '總經理' },
    { id: 10, name: '蔡大麥', title: '部門主管' },
    { id: 13, name: '林大方', title: '財務總監' },
    { id: 15, name: '李小小', title: '處長' },
    { id: 16, name: '趙大大', title: '總經理' },
    { id: 17, name: '張小傑', title: '總經理' },
  ];

  getEmployeeList() {
    return of(this.employeeList);
  }
}
