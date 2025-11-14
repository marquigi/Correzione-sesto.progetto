import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoScelta } from './deposito-scelta';

describe('DepositoScelta', () => {
  let component: DepositoScelta;
  let fixture: ComponentFixture<DepositoScelta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositoScelta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositoScelta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
