import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobitemComponent } from './jobitem.component';

describe('JobitemComponent', () => {
  let component: JobitemComponent;
  let fixture: ComponentFixture<JobitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
