import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAnalysisComponent } from './live-analysis.component';

describe('LiveAnalysisComponent', () => {
  let component: LiveAnalysisComponent;
  let fixture: ComponentFixture<LiveAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
