import { Component, inject, signal, input, linkedSignal, resource, computed, numberAttribute } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Location, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero.model';

@Component({
  selector: 'app-hero-detail',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.scss',
})
export class HeroDetail {
  // input.required: Get the 'id' directly from the route URL.
  // numberAttribute transforms the string "12" from URL to number 12.
  id = input.required({ transform: numberAttribute });

  private heroService = inject(HeroService);
  private location = inject(Location);
  
  // resource: Automatically fetches hero whenever the 'id' input changes.
  // Note: Dependencies accessed in 'loader' are tracked automatically.
  protected heroResource = resource({
    loader: () => {
      const id = this.id(); // Tracking dependency
      return firstValueFrom(this.heroService.getHero(id));
    }
  });

  // Alias for easier template usage
  protected hero = computed<Hero | undefined>(() => this.heroResource.value());

  // linkedSignal: A signal that defaults to a computed value (hero.name)
  // but can be changed by the user (ngModel).
  // If the hero changes, this resets to the new hero's name automatically!
  protected editableName = linkedSignal(() => this.hero()?.name ?? '');

  protected saveMessage = signal<string>('');
  protected isError = signal<boolean>(false);

  save(): void {
    const currentHero = this.hero();
    // Use the signal value directly
    const newName = this.editableName();

    if (currentHero && newName) {
      if (currentHero.name === newName) {
        this.saveMessage.set('Old and new text are same.');
        this.isError.set(true);
        // Clear message after 3 seconds
        setTimeout(() => this.saveMessage.set(''), 3000);
        return;
      }

      const updatedHero: Hero = {
        ...currentHero,
        name: newName
      };

      // Mutations (Writes) still often use manual subscription or Promises, 
      // because they are triggered by user actions, not state changes.
      this.heroService.updateHero(updatedHero).subscribe({
        next: (hero) => {
          // Ideally we update the resource with the new data
          this.heroResource.update((_h: Hero | undefined) => hero);
          
          this.saveMessage.set('Hero saved successfully!');
          this.isError.set(false);
          setTimeout(() => this.saveMessage.set(''), 3000);
        },
        error: (error) => {
          console.error('Error saving hero:', error);
          this.saveMessage.set('Error saving hero. Please check if json-server is running.');
          this.isError.set(true);
        }
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
