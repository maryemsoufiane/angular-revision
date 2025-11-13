import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MessageDetailsComp } from '../message-details-comp/message-details-comp';
import { MyFirst } from '../services/my-first';

@Component({
  selector: 'app-my-first-comp',
  standalone: true,
  imports: [FormsModule, CommonModule, MessageDetailsComp],
  templateUrl: './my-first-comp.html',
  styleUrls: ['./my-first-comp.css']
})
export class MyFirstComp {
  name = '';
  email = '';
  message = '';
  messages: any[] = [];
  isSubmited: boolean = false;

  // ⚡ property injection
  private service: MyFirst = inject(MyFirst);

  constructor() {
    this.messages = this.service.getAllMessages();
    this.isSubmited = this.messages.length > 0;
  }

  onSubmit() {
    this.isSubmited = true;
    this.service.insert({
      name: this.name,
      email: this.email,
      message: this.message
    });

    this.name = '';
    this.email = '';
    this.message = '';
  }

  deleteMessage(index: number): void {
    this.service.deleteMessage(index);
  }
}
