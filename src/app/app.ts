import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GiftGallery } from './components/purchaser/gift-gallery/gift-gallery';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet , GiftGallery],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ChineseAuction');
}
