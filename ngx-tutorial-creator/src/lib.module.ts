import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainViewComponent } from './main-view/main-view.component';
import { TutorialStepsComponent } from './tutorial-steps/tutorial-steps.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import {
  // MatNativeDateModule,
  // DateAdapter,
  // MatMenuModule,
  // MatInputModule,
  MatButtonModule,
  MatCardModule,
  // MatTooltipModule,
  // MatDatepickerModule,
  // MatAutocompleteModule,
  MatIconModule,
  // MatDialogModule,
  // MatSnackBarModule,
  // MatRadioModule,
  // MatCheckboxModule,
  // MatSelectModule,
  // MatFormFieldModule,
  MatStepperModule,
  MatToolbarModule
  // MatProgressSpinnerModule,
} from '@angular/material';

const EXTERNALS = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatStepperModule,
  MatToolbarModule,
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [
    CommonModule,
    EXTERNALS
  ],
  declarations: [
    MainViewComponent,
    TutorialStepsComponent,
    TutorialComponent
  ],
  exports: [
    MainViewComponent
  ],
  providers: [

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorialModule { }
