import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDemoComponent } from './profile-demo.component';

describe('ProfileDemoComponent', () => {
  let component: ProfileDemoComponent;
  let fixture: ComponentFixture<ProfileDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
