import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  imports: [HeavyLoadersSlowComponent],
  standalone: true,
  templateUrl: './defer-views.component.html',
})
export default class DeferViewsComponent {

}
