import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [TitleComponent, CommonModule],
  // el change detection on push solo se ejecutara cuando cambie el input
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()" />

    <pre> {{ frameworkAsSignal() | json }} </pre>
    <pre> {{ frameworkAsProperty | json }} </pre>
  `
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection -  ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releasDate: '2016',
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releasDate: '2016',
  };

  constructor() {

    setTimeout(() => {

      // this.frameworkAsProperty.name = 'React';

      this.frameworkAsSignal.update(value => {
        value.name = 'React';
        return {...value};
      })
      console.log('Cambio hecho')
    }, 3000);
  }
}
