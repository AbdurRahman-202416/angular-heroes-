// import { MatPaginatorModule } from '@angular/material/paginator';
// import { Component, OnInit } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { HeroService } from '../../services/hero.service';
// import { Hero } from '../../models/hero.model';

// @Component({
//   selector: 'app-dashboard',
//   imports: [RouterLink, MatPaginatorModule],
//   templateUrl: './dashboard.html',
//   styleUrl: './dashboard.scss',
// })
// export class Dashboard implements OnInit {
//   heroes: Hero[] = [];

//   constructor(private heroService: HeroService) {}

//   ngOnInit(): void {
//     this.getHeroes();
//   }

//   getHeroes(): void {
//     this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes.slice(0, 5)));
//   }
// }

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero.model';
import { RouterLink } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, MatPaginatorModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit {
  heroes: Hero[] = [];

  total = 0;
  pageSize = 5;
  pageIndex = 0;
  itemPerPageCount: number[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.loadHeroes();
  }

  calculatePageArray() {
    // 1. Determine total number of pages (e.g., 60 / 5 = 12)
    const pageCount = Math.ceil(this.total / this.pageSize);

    // 2. Create an array of that length: [1, 2, 3, ..., 12]
    this.itemPerPageCount = Array.from({ length: pageCount }, (_, i) => i + 1);
  }
  loadHeroes() {
    this.heroService.getHeroesWithPagination(this.pageIndex + 1, this.pageSize).subscribe((res) => {
      this.heroes = res.body || [];
      this.total = Number(res.headers.get('X-Total-Count'));
    });
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadHeroes();
  }
}
