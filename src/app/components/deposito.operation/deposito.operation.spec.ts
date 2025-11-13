import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoOperation } from './deposito.operation';

describe('DepositoOperation', () => {
  let component: DepositoOperation;
  let fixture: ComponentFixture<DepositoOperation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepositoOperation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositoOperation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
