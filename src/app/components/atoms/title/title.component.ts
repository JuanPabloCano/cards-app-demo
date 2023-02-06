import { Component, Input } from '@angular/core';

export type sizes = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: [ './title.component.scss' ]
})
export class TitleComponent {

  @Input()
  public text: string;

  @Input()
  public size: sizes;

  constructor() {
    this.text ??= '';
    this.size ??= 'large';
  }
}
