import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '@app/shared/models/Character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterComponent {

  @Input() public character!: Character;
}
