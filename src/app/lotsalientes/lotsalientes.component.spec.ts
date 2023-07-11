import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotessalientesComponent } from './lotessalientes.component';

describe('LotessalientesComponent', () => {
  let component: LotessalientesComponent;
  let fixture: ComponentFixture<LotessalientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LotessalientesComponent]
    });
    fixture = TestBed.createComponent(LotessalientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
