import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyFirst {
  messages:Array<any>=[];
  constructor(){
      this.init();
  }
   init(): void {
  this.insert({
    name: "Maryem",
    email: "mery@gmail.com",
    message: "Hello"
  });

  this.insert({
    name: "Ali",
    email: "ali@mail.com",
    message: "Hi there!"
  });

  this.insert({
    name: "Sara",
    email: "sara@example.com",
    message: "Good morning!"
  });

  this.insert({
    name: "Youssef",
    email: "youssef@mail.com",
    message: "Angular is awesome!"
  });

  this.insert({
    name: "Kenza",
    email: "kenza@gmail.com",
    message: "Testing the form."
  });
}

   insert( message:{ name:string,email:string,message:string}){
    this.messages.push(message);

   }
   getAllMessages():any[]{
    return this.messages;

   }
   deleteMessage( index:number ):void{
    this. messages.splice(index,1);
   }
}
