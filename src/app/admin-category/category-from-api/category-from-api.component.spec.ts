import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFromApiComponent } from './category-from-api.component';

describe('CategoryFromApiComponent', () => {
  let component: CategoryFromApiComponent;
  let fixture: ComponentFixture<CategoryFromApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryFromApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryFromApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
