import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorposalShowComponent } from './porposal-show.component';

describe('PorposalShowComponent', () => {
  let component: PorposalShowComponent;
  let fixture: ComponentFixture<PorposalShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorposalShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorposalShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
