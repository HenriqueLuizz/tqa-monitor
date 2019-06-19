import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAdvplComponent } from './result-advpl.component';

describe('ResultAdvplComponent', () => {
  let component: ResultAdvplComponent;
  let fixture: ComponentFixture<ResultAdvplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultAdvplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAdvplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
