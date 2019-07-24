import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPorposalComponent } from './add-porposal.component';

describe('AddPorposalComponent', () => {
  let component: AddPorposalComponent;
  let fixture: ComponentFixture<AddPorposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPorposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPorposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
