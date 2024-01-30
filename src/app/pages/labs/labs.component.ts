import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola';
  tasksOld = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear Componentes'
  ];
  name = 'Juan Luis Oropeza';
  age = 37;
  disabled = true;
  img = 'https://w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Juan Luis Oropeza',
    age: 37,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  }

  nameSignal = signal('Juan Luis');
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear Componentes'
  ]);

  personSignals = signal({
    name: 'Juan Luis Oropeza',
    age: 37,
    avatar: 'https://w3schools.com/howto/img_avatar.png'
  });

  colorCtrl = new FormControl();
  widthCtrl = new FormControl(50, {
    nonNullable: true
  });
  nameCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(3)
    ]
  });

  constructor() {
    this.colorCtrl.valueChanges.subscribe(value => {
      console.log(value);
    });
  }

  clickHandler() {
    alert('Hola');
  }

  changeHandler(event: Event) {
    console.log(event);
  }

  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  changeSignalNameHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.nameSignal.set(newValue);
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.personSignals.update(prevState => {
      return {
        ...prevState,
        name: newValue
      }
    });
  }
}
