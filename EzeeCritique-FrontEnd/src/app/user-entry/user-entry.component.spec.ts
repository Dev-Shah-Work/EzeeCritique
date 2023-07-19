import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEntryComponent } from './user-entry.component';

describe('UserEntryComponent', () => {
  let component: UserEntryComponent;
  let fixture: ComponentFixture<UserEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEntryComponent]
    });
    fixture = TestBed.createComponent(UserEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
