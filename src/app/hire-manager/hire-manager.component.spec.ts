import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HireManagerComponent } from './hire-manager.component';

describe('HireManagerComponent', () => {
  let component: HireManagerComponent;
  let fixture: ComponentFixture<HireManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HireManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HireManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
