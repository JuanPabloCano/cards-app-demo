import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Character } from '@app/modules/models/Character';
import { AuthService } from '@app/modules/services/auth.service';
import { FirestoreService } from '@app/modules/services/firestore.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input() public character!: Character;

  constructor(private readonly firestore: FirestoreService, private readonly authService: AuthService) {
  }

  public async buyCharacter(data: any): Promise<unknown> {
    this.character.id--;
    this.authService.auth.currentUser.then(res => console.log(res?.uid));
    return this.firestore.buyCharacter(data, this.character);
  }
}
