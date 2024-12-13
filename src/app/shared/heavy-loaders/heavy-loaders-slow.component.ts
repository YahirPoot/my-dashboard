import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [CommonModule],
  standalone: true,
  template: `<section [ngClass]="['w-full h-[500px]', cssClass]">
    Heavy Loaders Slow
  </section>`
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true }) cssClass!: string;

  constructor() {
    console.log('HeavyLoadersSlowComponent created');

    const start = Date.now();

    while ( Date.now() - start < 3000 ) {}

    console.log('HeavyLoadersSlowComponent created');
  }

}
