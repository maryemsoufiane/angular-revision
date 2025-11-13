import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-details-comp',   // 👈 vérifie que ce nom correspond bien à ta balise HTML
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-details-comp.html',
  styleUrls: ['./message-details-comp.css']
})
export class MessageDetailsComp {
  @Input() message: any;   // 👈 un seul message
  @Input() index: number = 0;
 
  @Output() delete = new EventEmitter<any>();

  OnDelete() :void{
   this.delete.emit(this.index)

  }
}
