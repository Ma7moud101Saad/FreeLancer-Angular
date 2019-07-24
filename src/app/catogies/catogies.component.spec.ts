import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatogiesComponent } from './catogies.component';

describe('CatogiesComponent', () => {
  let component: CatogiesComponent;
  let fixture: ComponentFixture<CatogiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatogiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatogiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
