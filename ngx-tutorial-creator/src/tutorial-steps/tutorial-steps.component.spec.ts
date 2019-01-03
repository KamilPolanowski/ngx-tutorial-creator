import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialStepsComponent } from './tutorial-steps.component';

describe('TutorialStepsComponent', () => {
  let component: TutorialStepsComponent;
  let fixture: ComponentFixture<TutorialStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
