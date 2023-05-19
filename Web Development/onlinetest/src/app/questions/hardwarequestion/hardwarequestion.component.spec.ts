import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwarequestionComponent } from './hardwarequestion.component';

describe('HardwarequestionComponent', () => {
  let component: HardwarequestionComponent;
  let fixture: ComponentFixture<HardwarequestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HardwarequestionComponent]
    });
    fixture = TestBed.createComponent(HardwarequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
