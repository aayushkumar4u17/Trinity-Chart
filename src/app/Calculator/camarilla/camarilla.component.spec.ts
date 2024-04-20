import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamarillaComponent } from './camarilla.component';

describe('CamarillaComponent', () => {
  let component: CamarillaComponent;
  let fixture: ComponentFixture<CamarillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamarillaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamarillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
