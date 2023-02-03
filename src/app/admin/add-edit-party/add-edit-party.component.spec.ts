import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPartyComponent } from './add-edit-party.component';

describe('AddEditPartyComponent', () => {
  let component: AddEditPartyComponent;
  let fixture: ComponentFixture<AddEditPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditPartyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
