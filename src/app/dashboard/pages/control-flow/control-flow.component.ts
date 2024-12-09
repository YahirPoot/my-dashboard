import { Component, signal } from '@angular/core';
import { defaultUrlMatcher } from '@angular/router';

@Component({
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);

  public toggleContent() {
    this.showContent.update(value => !value);
  }
}
