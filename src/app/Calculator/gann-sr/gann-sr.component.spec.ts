import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GANNSRComponent } from './gann-sr.component';

describe('GANNSRComponent', () => {
  let component: GANNSRComponent;
  let fixture: ComponentFixture<GANNSRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GANNSRComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GANNSRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
