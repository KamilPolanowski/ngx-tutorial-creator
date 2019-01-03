export interface Tutorial {
  tutorial_name: string;
  tutorial_steps: Array<TutorialStep>;
}

export interface TutorialStep {
  name: string;
  description: string;
}
