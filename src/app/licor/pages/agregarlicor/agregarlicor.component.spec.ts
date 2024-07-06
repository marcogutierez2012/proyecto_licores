import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarlicorComponent } from './agregarlicor.component';

describe('AgregarlicorComponent', () => {
  let component: AgregarlicorComponent;
  let fixture: ComponentFixture<AgregarlicorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarlicorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarlicorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
