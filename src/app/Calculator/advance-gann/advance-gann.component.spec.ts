import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceGANNComponent } from './advance-gann.component';

describe('AdvanceGANNComponent', () => {
  let component: AdvanceGANNComponent;
  let fixture: ComponentFixture<AdvanceGANNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvanceGANNComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvanceGANNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
