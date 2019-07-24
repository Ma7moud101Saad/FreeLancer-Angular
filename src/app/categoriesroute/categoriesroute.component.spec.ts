import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesrouteComponent } from './categoriesroute.component';

describe('CategoriesrouteComponent', () => {
  let component: CategoriesrouteComponent;
  let fixture: ComponentFixture<CategoriesrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
