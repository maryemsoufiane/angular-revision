/*import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-first-comp',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './my-first-comp.html',
  styleUrls: ['./my-first-comp.css'], // corrigé
})
 /*export class MyFirstComp {
  name: string = '';
  email: string = '';
  message: string = '';
  issubmitted: boolean = false;
  messages:Array<string>=[];
  onSubmit() {
    console.log('Form submitted', this.name, this.email, this.message);
    this.issubmitted = true;
    this.messages.push(`Name: ${this.name}, Email: ${this.email}, Message: ${this.message}`);
    this.name = '';
    this.email = '';
    this.message = '';
  }
 export class MyFirstComp {
  name = '';
  email = '';
  message = '';
  messages: any[] = [];

  onSubmit() {
    this.messages.push({
      name: this.name,
      email: this.email,
      message: this.message
    });

    // vider le formulaire
    this.name = '';
    this.email = '';
    this.message = '';
  }*/
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageDetailsComp } from '../message-details-comp/message-details-comp';

@Component({
  selector: 'app-my-first-comp',
  standalone: true,
  imports: [FormsModule, CommonModule, MessageDetailsComp], // 👈 import ici
  templateUrl: './my-first-comp.html',
  styleUrls: ['./my-first-comp.css']
})
export class MyFirstComp {
  name = '';
  email = '';
  message = '';
  messages: any[] = [];

  onSubmit() {
    this.messages.push({
      name: this.name,
      email: this.email,
      message: this.message
    });

    this.name = '';
    this.email = '';
    this.message = '';
  }
  deleteMessage(index:number):void{
    this.messages.splice(index ,1 );
  }
}

 

