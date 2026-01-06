import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift } from '../models/gift';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})
export class GiftService {
  
  BASE_URL = 'https://localhost:7006/api/Gift';

   http: HttpClient = inject(HttpClient);
  constructor() { }

  getAll(): Observable<Gift[]>{
    return this.http.get<Gift[]>(this.BASE_URL);
  }

}
