import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarlicorComponent } from './actualizarlicor.component';

describe('ActualizarlicorComponent', () => {
  let component: ActualizarlicorComponent;
  let fixture: ComponentFixture<ActualizarlicorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarlicorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarlicorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
