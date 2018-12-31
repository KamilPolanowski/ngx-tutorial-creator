import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { BarService } from './bar/bar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FooComponent
  ],
  exports: [
    FooComponent
  ],
  providers: [
    BarService
  ]
})
export class TutorialModule { }
