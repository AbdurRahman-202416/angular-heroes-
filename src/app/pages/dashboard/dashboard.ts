import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  private heroService = inject(HeroService);
  protected heroes = signal<Hero[]>([]);

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes.set(heroes.slice(0, 5));
    });
  }
}
