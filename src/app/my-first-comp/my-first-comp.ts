import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-first-comp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-first-comp.html',
  styleUrls: ['./my-first-comp.css'], // corrigé
})
export class MyFirstComp {
  name: string = '';
  email: string = '';
  message: string = '';
  issubmitted: boolean = false;

  onSubmit() {
    console.log('Form submitted', this.name, this.email, this.message);
    this.issubmitted = true;
  }
}
