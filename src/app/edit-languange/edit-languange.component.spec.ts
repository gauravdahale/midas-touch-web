import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLanguangeComponent } from './edit-languange.component';

describe('EditLanguangeComponent', () => {
  let component: EditLanguangeComponent;
  let fixture: ComponentFixture<EditLanguangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLanguangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLanguangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
