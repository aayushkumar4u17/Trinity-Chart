import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GANNFanangleComponent } from './gann-fanangle.component';

describe('GANNFanangleComponent', () => {
  let component: GANNFanangleComponent;
  let fixture: ComponentFixture<GANNFanangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GANNFanangleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GANNFanangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
