import { Component, OnInit, inject } from '@angular/core';

import { SHARED_MODULES } from '../../shared/share-.modules';
import { MAT_MODULES } from '../../shared/material-modules';
import { ApprovalService } from './approval.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { tap } from 'rxjs';
import { ApprovalLevel } from './approval-level/approval-level';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-approval',
  standalone: true,
  imports: [ApprovalLevel, ...SHARED_MODULES, ...MAT_MODULES],
  templateUrl: './approval.html',
  styleUrl: './approval.scss',
})
export class ApprovalComponent implements OnInit {
  private fb = inject(FormBuilder);
  private api = inject(ApprovalService);

  form!: FormGroup;
  isEditing = false;

  approvalRuleList = [];

  columnsToDisplay = [
    'name',
    'levels',
    'level1',
    'level2',
    'level3',
    'management',
  ];

  approvalData$ = this.api.getApprovalData().pipe(takeUntilDestroyed());

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      id: new FormControl(null),
      approvalName: new FormControl(null, Validators.required),
      approvalLevels: new FormArray([], Validators.minLength(1)),
    });
  }

  // approvalRule
  addApprovalRule() {
    this.isEditing = true;
    this.initForm();
  }

  editApprovalRule(id: number) {
    this.isEditing = true;
    this.api
      .getApprovalDataById(id)
      .pipe(
        tap((res) => {
          if (!res) return;

          this.approvalLevels.clear();

          this.form.patchValue({
            id: res.id,
            approvalName: res.approvalName,
          });

          res.approvalLevels.forEach((levelData: any) => {
            const levelGroup = this.createLevelForm();

            levelGroup.patchValue({
              id: levelData.id,
              setting: levelData.setting,
            });

            const approverArray = levelGroup.get('approvers') as FormArray;

            levelData.approvers.forEach((appData: any) => {
              approverArray.push(
                this.fb.group({
                  id: [appData.id],
                  employeeId: [appData.employeeId],
                  name: [appData.name],
                  title: [appData.title],
                }),
              );
            });

            this.approvalLevels.push(levelGroup);
          });
        }),
      )
      .subscribe();
  }

  deleteApprovalRule(id: number) {
    console.log(id);
  }

  // approvalLevel

  get approvalLevels() {
    return this.form.get('approvalLevels') as FormArray;
  }

  get isApprovalNameValid() {
    return this.form.get('approvalName')?.valid;
  }

  get isApprovalLevelsValid() {
    const approvalLevels = this.approvalLevels;

    const result = approvalLevels.controls.every((level) => {
      const approvers = level.get('approvers') as FormArray;
      const isValid = level.valid && approvers.length > 0;
      return isValid;
    });

    return result;
  }

  clearApprovalLevel() {
    this.initForm();
  }

  addApprovalLevel() {
    const approvalLevelArray = this.approvalLevels;
    const levelForm = this.createLevelForm();
    approvalLevelArray.push(levelForm);
  }

  get approvalLevelArray() {
    const approvalLevelArray = this.approvalLevels;
    return approvalLevelArray.controls as FormGroup[];
  }

  removeApprovalLevel(index: number) {
    const approvalLevelArray = this.approvalLevels;
    approvalLevelArray.removeAt(index);
  }

  createLevelForm() {
    const levelForm = this.fb.group({
      id: new FormControl(null),
      setting: new FormControl(null, Validators.required),
      approvers: new FormArray([], Validators.minLength(1)),
    });

    return levelForm;
  }

  onCancel() {
    this.initForm();
    this.isEditing = false;
  }

  onSubmit() {
    const data = this.form.getRawValue();
    this.api
      .addApprovalData(data)
      .pipe(
        tap((res) => {
          this.initForm();
          this.isEditing = false;
        }),
      )
      .subscribe();
  }
}
