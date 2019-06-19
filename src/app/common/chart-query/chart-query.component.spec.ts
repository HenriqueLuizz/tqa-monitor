import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartQueryComponent } from './chart-query.component';

describe('ChartQueryComponent', () => {
  let component: ChartQueryComponent;
  let fixture: ComponentFixture<ChartQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
