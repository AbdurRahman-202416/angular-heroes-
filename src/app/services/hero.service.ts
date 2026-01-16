import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private apiUrl = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {}

  getHeroes(page: number = 1, limit: number = 10, term: string = ''): Observable<{ data: Hero[], total: number }> {
    let params: any = {
      _page: page,
      _limit: limit
    };

    if (term) {
      params['q'] = term;
    }

    return this.http.get<Hero[]>(this.apiUrl, { params, observe: 'response' }).pipe(
      map(response => {
        const total = Number(response.headers.get('X-Total-Count'));
        return {
          data: response.body || [],
          total: total
        };
      })
    );
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${this.apiUrl}/${id}`);
  }

  updateHero(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.apiUrl}/${hero.id}`, hero, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
