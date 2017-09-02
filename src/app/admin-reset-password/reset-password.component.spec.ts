import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResetPasswordComponent } from './reset-password.component';

describe('ResetPasswordComponent', () => {
  let component: AdminResetPasswordComponent;
  let fixture: ComponentFixture<AdminResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
