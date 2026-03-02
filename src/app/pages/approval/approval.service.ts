import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { approvalRuleData } from './mock-approval-data';

@Injectable({
  providedIn: 'root',
})
export class ApprovalService {
  private approvalsSubject = new BehaviorSubject<any>(approvalRuleData);
  approvals$ = this.approvalsSubject.asObservable();

  addApprovalData(data: any) {
    const current = this.approvalsSubject.value;
    const updated = [...current, data];
    this.approvalsSubject.next(updated);

    return of(true);
  }

  getApprovalData() {
    return this.approvals$;
  }

  getApprovalDataById(id: number) {
    const data = approvalRuleData.find((item) => item.id === id);

    return of(data || approvalRuleData[0]);
  }
}
