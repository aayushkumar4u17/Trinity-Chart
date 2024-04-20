import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElliottWaveComponent } from './elliott-wave.component';

describe('ElliottWaveComponent', () => {
  let component: ElliottWaveComponent;
  let fixture: ComponentFixture<ElliottWaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElliottWaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElliottWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
