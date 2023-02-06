import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '@app/modules/models/Character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input() public character!: Character;

}
