import { Component, signal } from '@angular/core';
import { Header } from "./components/layout/header/header";
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // (אם זה לא מופיע, תוסיפי גם את זה, אבל נראה שזה כבר מוגדר כ-standalone)
  imports: [RouterOutlet,Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ChineseAuction');
}
