import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { TutorialStep } from '../ngx-tc-interfaces';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  public tutorialFormGroup: FormGroup;
  private _fb: FormBuilder = new FormBuilder();

  constructor() { }

  ngOnInit() {
    this.createFormGroups();
  }

  createFormGroups(): void {
    // this.tutorialFormGroup = this._fb.group(this.createFormControls());

    // this creates an illusionary behaviour for stepper to highlight only one,
    // active step
    this.tutorialFormGroup = this._fb.group({
      overallCtrl: ['', Validators.required]
    });

  }

  /* createFormControls(): object {
    const controls: object = {};
    this.tutorialSteps.forEach((step, index) => {
      controls[index] = new FormControl('', Validators.required);
    });
    return controls;
  } */

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
