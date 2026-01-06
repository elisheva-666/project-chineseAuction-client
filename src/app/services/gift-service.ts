import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gift } from '../models/gift';

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  private readonly BASE_URL = 'https://localhost:7006/api/Gift';
  private http = inject(HttpClient);

  // שליפת כל המתנות
  getAll(): Observable<Gift[]> {
    return this.http.get<Gift[]>(this.BASE_URL);
  }

  // הוספת מתנה חדשה
  add(gift: Gift): Observable<Gift> {
    return this.http.post<Gift>(this.BASE_URL, gift);
  }

  // עדכון מתנה קיימת
  update(gift: Gift): Observable<Gift> {
    return this.http.put<Gift>(`${this.BASE_URL}/${gift.id}`, gift);
  }

  // מחיקת מתנה לפי ID
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/${id}`);
  }
}