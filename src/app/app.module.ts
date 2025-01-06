import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { ExpirienceComponent } from './expirience/expirience.component';
import { ResultComponent } from './result/result.component';
import { HigherEducationComponent } from './higher-education/higher-education.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    AboutMeComponent,
    EducationComponent,
    ExpirienceComponent,
    ResultComponent,
    HigherEducationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkStepperModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [CdkStepperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
