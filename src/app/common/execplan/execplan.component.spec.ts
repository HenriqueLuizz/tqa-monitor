import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecplanComponent } from './execplan.component';

describe('ExecplanComponent', () => {
  let component: ExecplanComponent;
  let fixture: ComponentFixture<ExecplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
