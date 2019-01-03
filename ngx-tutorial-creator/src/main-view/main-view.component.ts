import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Tutorial, TutorialStep } from '../ngx-tc-interfaces';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ngx-tc-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainViewComponent implements OnInit {
  public stepIndex: number;
  public stepSelected: TutorialStep;
  public tutorialParsed: Tutorial = {
    tutorial_name: 'Jak napisać tutorial',
    tutorial_steps: Array(8).fill(
      {
        name: 'siema',
        description: '<b>ale nie żydom</b>'
      }
    )
  }
  constructor(private titleService: Title) { }

  ngOnInit() {
    if (!!this.tutorialParsed) {
      this.setTitle();
      this.setCurrentStep(0);
    } else {
      throw new Error('Tutorial, as a whole, was not implemented correctly');
    }
  }

  /**
   * Sets title
   *
   * @returns void
   */
  setTitle(): void {
    if (!!this.tutorialParsed.tutorial_name) {
      this.titleService.setTitle(this.tutorialParsed.tutorial_name);
    } else {
      throw new Error('Tutorial name is missing');
    }
  }

  /**
   * Setting currently selected step
   *
   * @param  number indexToSet
   * @returns void
   */
  setCurrentStep(indexToSet: number): void {
    if (!!this.tutorialParsed.tutorial_steps && this.tutorialParsed.tutorial_steps.length > 0) {
      this.stepSelected = this.tutorialParsed.tutorial_steps[indexToSet];
      this.stepIndex = indexToSet;
    } else {
      throw new Error('Tutorial steps are missing');
    }
  }

}
