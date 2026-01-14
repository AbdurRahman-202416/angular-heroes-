import { Component, inject, computed, resource } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { RouterLink } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private heroService = inject(HeroService);

  // Use 'resource' to fetch data declaratively.
  protected heroesResource = resource({
    loader: () => firstValueFrom(this.heroService.getHeroes())
  });

  // Use 'computed' to derive state.
  // When 'heroesResource' updates, this signal automatically updates.
  // We slice the array here instead of inside a subscription.
  protected heroes = computed(() => {
    const allHeroes = this.heroesResource.value() ?? [];
    return allHeroes.slice(0, 5);
  });
}
