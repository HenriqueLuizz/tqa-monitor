import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDbComponent } from './result-db.component';

describe('ResultDbComponent', () => {
  let component: ResultDbComponent;
  let fixture: ComponentFixture<ResultDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
