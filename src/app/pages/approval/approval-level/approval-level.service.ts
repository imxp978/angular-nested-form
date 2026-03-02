import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApprovalLevelService {
  settingList = [
    { id: 1, name: '全部通過' },
    { id: 2, name: '任一通過' },
  ];

  getSettingList() {
    return of(this.settingList);
  }
}
