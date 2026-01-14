import { Component, inject, computed, resource } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { RouterLink } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-heroes-page',
  imports: [RouterLink],
  templateUrl: './heroes-page.html',
  styleUrl: './heroes-page.scss',
})
export class HeroesPage {
  private heroService = inject(HeroService);

  // resource: The new standard API for async data loading.
  // We use 'firstValueFrom' to convert the Observable (old style) to a Promise (new style).
  protected heroesResource = resource({
    loader: () => firstValueFrom(this.heroService.getHeroes())
  });

  // computed: Creating a new signal based on another.
  // Here we take the resource's value (which might be undefined while loading)
  // and default it to an empty array [] so our template always has an array to loop over.
  protected heroes = computed(() => this.heroesResource.value() ?? []);
}
