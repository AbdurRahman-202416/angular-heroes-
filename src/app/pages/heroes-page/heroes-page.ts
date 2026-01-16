import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero.model';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-heroes-page',
  imports: [
    RouterLink,
    MatPaginatorModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './heroes-page.html',
  styleUrl: './heroes-page.scss',
})
export class HeroesPage implements OnInit {
  heroes: Hero[] = [];
  totalHeroes = 0;
  pageSize = 10;
  pageIndex = 0;
  searchControl = new FormControl('');

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
    this.setupSearch();
  }

  getHeroes(): void {
    const page = this.pageIndex + 1;
    const term = this.searchControl.value || '';
    
    this.heroService.getHeroes(page, this.pageSize, term)
      .subscribe(response => {
        this.heroes = response.data;
        this.totalHeroes = response.total;
      });
  }

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getHeroes();
  }

  setupSearch(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(() => {
      this.pageIndex = 0; // Reset to first page on search
      this.getHeroes();
    });
  }
}
