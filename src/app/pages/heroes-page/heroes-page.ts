import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-heroes-page',
  imports: [RouterLink],
  templateUrl: './heroes-page.html',
  styleUrl: './heroes-page.scss',
})
export class HeroesPage implements OnInit {
  private heroService = inject(HeroService);
  protected heroes = signal<Hero[]>([]);

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes.set(heroes);
    });
  }
}
