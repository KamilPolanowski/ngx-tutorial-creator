import { TutorialStep } from './../ngx-tc-interfaces';
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Tutorial } from '../ngx-tc-interfaces';

@Component({
  selector: 'ngx-tc-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TutorialComponent {
  @Input() public currentStep: TutorialStep;
  @Input() public stepIndex: number;
  @Input() public tutorial: Tutorial;
  constructor() { }

}
