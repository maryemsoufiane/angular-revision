import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyFirstComp } from './my-first-comp/my-first-comp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyFirstComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-course');
}
