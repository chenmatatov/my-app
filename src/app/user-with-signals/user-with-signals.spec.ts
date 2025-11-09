import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWithSignals } from './user-with-signals';

describe('UserWithSignals', () => {
  let component: UserWithSignals;
  let fixture: ComponentFixture<UserWithSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWithSignals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWithSignals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
