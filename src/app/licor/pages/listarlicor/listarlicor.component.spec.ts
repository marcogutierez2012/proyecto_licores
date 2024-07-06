import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarlicorComponent } from './listarlicor.component';

describe('ListarlicorComponent', () => {
  let component: ListarlicorComponent;
  let fixture: ComponentFixture<ListarlicorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarlicorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarlicorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
