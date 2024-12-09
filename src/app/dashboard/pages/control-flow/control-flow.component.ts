import { Component, signal } from '@angular/core';
import { defaultUrlMatcher } from '@angular/router';

type Grade = 'A' | 'B' | 'F';

@Component({
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public toggleContent() {
    this.showContent.update(value => !value);
  }
}
