import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero.model';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private apiUrl = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {}

  // 🔹 EXISTING (unchanged)
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.apiUrl);
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}/${id}`);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.apiUrl}/${hero.id}`, hero, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  getHeroesWithPagination(page: number, limit: number) {
    return this.http.get<Hero[]>(
      `${this.apiUrl}?_page=${page}&_limit=${limit}`,
      { observe: 'response' } // for total count
    );
  }
}
