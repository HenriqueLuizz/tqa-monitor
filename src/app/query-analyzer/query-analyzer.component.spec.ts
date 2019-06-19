import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryAnalyzerComponent } from './query-analyzer.component';

describe('QueryAnalyzerComponent', () => {
  let component: QueryAnalyzerComponent;
  let fixture: ComponentFixture<QueryAnalyzerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryAnalyzerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
