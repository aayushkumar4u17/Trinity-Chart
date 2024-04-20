import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GANNSQComponent } from './gann-sq.component';

describe('GANNSQComponent', () => {
  let component: GANNSQComponent;
  let fixture: ComponentFixture<GANNSQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GANNSQComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GANNSQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
