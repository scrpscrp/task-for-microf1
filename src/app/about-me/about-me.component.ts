import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export type field = {
  name: string;
  lastName: string;
  birthDate: string;
  phone: string;
};

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  constructor(private readonly _fb: FormBuilder) {}

  public form = this._fb.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    birthDate: [new Date().toISOString().substring(0, 10), Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });

  public readonly labels = {
    name: 'Імʼя',
    lastName: 'Прізвище',
    birthDate: 'Дата народження',
    phone: 'Телефон',
    email: 'Email',
    next: 'Далі',
  };

  public submit(): void {}
}
