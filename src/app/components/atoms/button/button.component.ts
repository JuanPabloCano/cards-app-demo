import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ]
})
export class ButtonComponent {

  @Input('app-button')
  public message: unknown;

  @Input()
  public src: string;

  @Input()
  public alt: string;

  @Input()
  public width: number;

  @Input()
  public height: number;

  constructor() {
    this.message = '';
    this.src ??= '';
    this.width ??= 16;
    this.height ??= 16;
    this.alt ??= 'Not found';
  }
}
