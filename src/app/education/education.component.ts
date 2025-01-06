import { CdkStepper } from '@angular/cdk/stepper';
import { Component, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  @ViewChild(CdkStepper)
  stepper!: CdkStepper;

  public isChecked: FormControl = new FormControl(false);

  public educationForm = this.fb.group({
    educationBlocks: this.fb.array([this.createEducationBlock()]),
    education: this.isChecked,
  });

  constructor(private fb: FormBuilder) {}

  public createEducationBlock(): FormGroup {
    return this.fb.group({
      schoolName: ['', Validators.required],
      degree: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  public addEducationBlock() {
    const educationBlocks = this.educationForm.get(
      'educationBlocks'
    ) as FormArray;
    educationBlocks.push(this.createEducationBlock());
  }

  public removeEducationBlock(index: number) {
    const educationBlocks = this.educationForm.get(
      'educationBlocks'
    ) as FormArray;
    educationBlocks.removeAt(index);
  }

  public submit() {
    if (this.educationForm.valid) {
      console.log('Form Data:', this.educationForm.value);
    } else {
      console.log('Form is invalid');
    }

    if (this.isChecked.value) {
      this.stepper.next();
    } else {
      this.stepper.next();
    }
  }

  get educationBlocks() {
    return this.educationForm.get('educationBlocks') as FormArray;
  }
}
