import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwarequestionComponent } from './softwarequestion.component';

describe('SoftwarequestionComponent', () => {
  let component: SoftwarequestionComponent;
  let fixture: ComponentFixture<SoftwarequestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftwarequestionComponent]
    });
    fixture = TestBed.createComponent(SoftwarequestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
