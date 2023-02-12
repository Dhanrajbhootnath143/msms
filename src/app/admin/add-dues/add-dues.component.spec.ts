import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDuesComponent } from './add-dues.component';

describe('AddDuesComponent', () => {
  let component: AddDuesComponent;
  let fixture: ComponentFixture<AddDuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
