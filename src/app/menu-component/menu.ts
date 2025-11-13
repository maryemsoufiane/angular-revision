import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,            // si tu veux qu’il soit standalone
  imports: [RouterLink],        // 🔹 important pour routerLink
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class MenuComponent {}
