import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EalmacenComponent } from './ealmacen.component';

describe('EalmacenComponent', () => {
  let component: EalmacenComponent;
  let fixture: ComponentFixture<EalmacenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EalmacenComponent]
    });
    fixture = TestBed.createComponent(EalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
