import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public readonly labels = {
    title: 'Створення резюме',
    aboutMe: 'Про мене',
    education: 'Освіта',
    higherEducation: 'Вища освіта',
    expirience: 'Досвід Роботи',
    result: 'Результат',
  };
}
