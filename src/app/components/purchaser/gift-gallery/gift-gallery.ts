import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Gift } from '../../../models/gift';
import { GiftService } from '../../../services/gift-service';

@Component({
  selector: 'app-gift-gallery',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gift-gallery.html',
  styleUrl: './gift-gallery.scss',
})
export class GiftGallery implements OnInit {
  private giftService = inject(GiftService);

  listOfGifts: Gift[] = [];

  ngOnInit() {
    this.loadGifts();
  }

  // פונקציית עזר לטעינת הרשימה
  loadGifts() {
    this.giftService.getAll().subscribe({
      next: (data) => (this.listOfGifts = data),
      error: (err) => console.error('Failed to load gifts', err)
    });
  }

  // הוספת מתנה
  // add(name: string | undefined) {
  //   if (name) {
  //     const newGift: Gift = { id: 0, name: name , ticketPrice: 0, imageUrl: '' }; // ה-ID לרוב נוצר ב-DB
  //     this.giftService.add(newGift).subscribe(() => {
  //       this.loadGifts(); // רענון הרשימה לאחר ההוספה
  //     });
  //   }
  // }

  // שמירת עדכון
  save(item: Gift) {
    this.giftService.update(item).subscribe(() => {
      console.log('Gift updated successfully');
      this.loadGifts();
    });
  }

  // מחיקה
  delete(id: number) {
    if (confirm('האם אתה בטוח שברצונך למחוק?')) {
      this.giftService.delete(id).subscribe(() => {
        // עדכון הרשימה המקומית ללא צורך בקריאת שרת נוספת (לביצועים טובים יותר)
        this.listOfGifts = this.listOfGifts.filter(g => g.id !== id);
      });
    }
  }
}