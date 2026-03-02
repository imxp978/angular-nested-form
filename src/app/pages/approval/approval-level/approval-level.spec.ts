import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalLevel } from './approval-level';

describe('ApprovalLevel', () => {
  let component: ApprovalLevel;
  let fixture: ComponentFixture<ApprovalLevel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprovalLevel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalLevel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
