import { Component, inject } from '@angular/core';
import { EmployeeDialogService } from './employee-dialog.service';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SHARED_MODULES } from '../../../shared/share-.modules';
import { MAT_MODULES } from '../../../shared/material-modules';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-dialog',
  imports: [...MAT_MODULES, ...SHARED_MODULES, ReactiveFormsModule],
  templateUrl: './employee-dialog.html',
  styleUrl: './employee-dialog.scss',
})
export class EmployeeDialog {
  private api = inject(EmployeeDialogService);

  employeeList: any[] = [];

  selectedEmployee = new FormControl<any>(null, Validators.required);

  constructor() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.api
      .getEmployeeList()
      .pipe(
        takeUntilDestroyed(),
        tap((res) => {
          this.employeeList = res;
        }),
      )
      .subscribe();
  }
}
