import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { TutorialStep } from '../ngx-tc-interfaces';

@Component({
  selector: 'ngx-tc-tutorial-steps',
  templateUrl: './tutorial-steps.component.html',
  styleUrls: ['./tutorial-steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TutorialStepsComponent implements OnInit {
  @Input() public tutorialSteps: Array<TutorialStep>;
  @Output() public newSelectedStepsIndex: EventEmitter<number> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Handling step change
   *
   * @param  StepperSelectionEvent selectionEvent
   * @returns void
   */
  stepChanged(selectionEvent: StepperSelectionEvent): void {
    if (!!selectionEvent) {
      this.newSelectedStepsIndex.emit(selectionEvent.selectedIndex);
    }
  }
}
