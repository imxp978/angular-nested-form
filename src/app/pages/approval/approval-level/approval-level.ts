import { Component, inject, input, output, OnInit } from '@angular/core';
import { MAT_MODULES } from '../../../shared/material-modules';
import { SHARED_MODULES } from '../../../shared/share-.modules';
import { ApprovalLevelService } from './approval-level.service';
import { tap } from 'rxjs';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDialog } from '../../../shared/component/employee-dialog/employee-dialog';

@Component({
  selector: 'app-approval-level',
  standalone: true,
  imports: [...MAT_MODULES, ...SHARED_MODULES],
  templateUrl: './approval-level.html',
  styleUrl: './approval-level.scss',
})
export class ApprovalLevel implements OnInit {
  private api = inject(ApprovalLevelService);
  private dialog = inject(MatDialog);

  levelForm = input.required<FormGroup>();
  index = input.required<number>();
  remove = output<void>(); // 定義一個輸出的事件用來通知刪除

  ngOnInit() {
    this.getSettingList();
  }

  settingList: any[] = [];

  getSettingList() {
    this.api
      .getSettingList()
      .pipe(
        tap((res: any) => {
          this.settingList = res;
        }),
      )
      .subscribe();
  }

  approverList: any[] = [];

  get approverArray() {
    return this.levelForm()!.get('approvers') as FormArray;
  }

  onAddApprover() {
    const approverArray = this.approverArray;
    const employeeDialogRef = this.dialog.open(EmployeeDialog, {
      width: '60vw',
    });

    employeeDialogRef.afterClosed().subscribe((res) => {
      if (res) {
        approverArray.push(
          new FormGroup({
            id: new FormControl(null),
            employeeId: new FormControl(res.id),
            name: new FormControl(res.name),
            title: new FormControl(res.title),
          }),
        );
      }
    });
  }

  onRemoveApprover(index: number) {
    this.approverArray.removeAt(index);
  }
}
