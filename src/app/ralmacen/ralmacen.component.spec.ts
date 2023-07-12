import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RalmacenComponent } from './ralmacen.component';

describe('RalmacenComponent', () => {
  let component: RalmacenComponent;
  let fixture: ComponentFixture<RalmacenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RalmacenComponent]
    });
    fixture = TestBed.createComponent(RalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
