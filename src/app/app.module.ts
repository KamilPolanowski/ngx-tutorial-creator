import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* import {
  MatNativeDateModule,
  DateAdapter,
  MatTableModule,
  MatMenuModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatIconModule,
  MatDialogModule,
  MatToolbarModule,
  MatCommonModule,
  MatSnackBarModule,
  MatRippleModule,
  MatRadioModule,
  MatGridListModule,
  MatCheckboxModule,
  MatChipsModule,
  MatListModule,
  MatTabsModule,
  MatSliderModule,
  MatSelectModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatOptionModule,
  MatSidenavModule,
  MatLineModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatSortModule,
  MatDividerModule
} from '@angular/material'; */

import { AppComponent } from './app.component';
import { TutorialModule } from '@ngx-tutorial-creator';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    TutorialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
