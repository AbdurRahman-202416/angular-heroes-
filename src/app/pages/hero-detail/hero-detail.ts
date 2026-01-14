import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
export class HeroDetail implements OnInit {
  private heroService = inject(HeroService);
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  
  protected hero = signal<Hero | null>(null);
  protected editableName = signal<string>('');
  protected saveMessage = signal<string>('');
  protected isError = signal<boolean>(false);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.heroService.getHero(id).subscribe({
        next: (hero) => {
          this.hero.set(hero);
          this.editableName.set(hero.name);
        },
        error: (error) => {
          console.error('Error fetching hero:', error);
          this.saveMessage.set('Error loading hero. Please check if json-server is running.');
          this.isError.set(true);
        }
      });
    }
  }

  save(): void {
    const currentHero = this.hero();
    if (currentHero && this.editableName()) {
      const updatedHero: Hero = {
        ...currentHero,
        name: this.editableName()
      };

      this.heroService.updateHero(updatedHero).subscribe({
        next: (hero) => {
          this.hero.set(hero);
          this.saveMessage.set('Hero saved successfully!');
          this.isError.set(false);
          // Clear message after 3 seconds
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
