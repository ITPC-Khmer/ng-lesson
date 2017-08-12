import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDirective1Component } from './test-directive1.component';

describe('TestDirective1Component', () => {
  let component: TestDirective1Component;
  let fixture: ComponentFixture<TestDirective1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestDirective1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDirective1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
