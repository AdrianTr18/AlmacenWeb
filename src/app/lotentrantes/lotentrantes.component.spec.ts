import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotesEntrantesComponent } from './lotentrantes.component';

describe('LotesEntrantesComponent', () => {
  let component: LotesEntrantesComponent;
  let fixture: ComponentFixture<LotesEntrantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LotesEntrantesComponent]
    });
    fixture = TestBed.createComponent(LotesEntrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
