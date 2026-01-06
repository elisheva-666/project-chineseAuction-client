import { ChangeDetectorRef, Component, inject} from '@angular/core';
import { Gift } from '../../../models/gift';
import { GiftService } from '../../../services/gift-service';  
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-gift-gallery',
  imports: [CommonModule, FormsModule],
  templateUrl: './gift-gallery.html',
  styleUrl: './gift-gallery.scss',
})
export class GiftGallery {


  giftService: GiftService = inject(GiftService);
  ref= inject(ChangeDetectorRef);



listOfGifts: Gift[] = [];

  ngOnInit() {
    this.giftService.getAll().subscribe((data) => {
      this.listOfGifts = data;
      // this.ref.detectChanges();
    });
  }
}

