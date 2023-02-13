import { Component } from '@angular/core';
import { Character } from '@app/modules/models/Character';
import { AuthService } from '@app/modules/services/auth.service';
import { FirestoreService } from '@app/modules/services/firestore.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.scss' ]
})
export class UserComponent {

  public characters: any[] = [];

  public currentUser: any;

  constructor(private readonly firestore: FirestoreService, private readonly authService: AuthService) {
    this.setUser();
  }

  public getCards() {
    this.firestore.getCards().subscribe(res => {
        res.forEach(res => {
          const char = this.getCharacterData(res);
          this.characters.push(char);
        });
      }
    );
  }

  private getCharacterData(res: { data: unknown; }) {
    const { data }: { data: any } = res;
    data.id++;
    const char: Character = {
      id: data.id,
      name: data.name,
      image: data.image,
      species: data.species,
      created: data.created,
      gender: data.gender,
      status: data.status
    };
    return char;
  }

  private setUser() {
    this.authService.auth.currentUser.then(res => this.currentUser = res?.email);
  }
}
