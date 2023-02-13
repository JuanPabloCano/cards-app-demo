import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Character } from '@app/modules/models/Character';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public characters: any[] = [];

  constructor(private readonly firestore: AngularFirestore) {
  }

  public buyCharacter(data: any, character: Character): Promise<unknown> {
    character.id--;
    return new Promise((resolve, reject) => {
      this.firestore
        .collection('/characters')
        .add(data)
        .then(() => console.log('Saved'))
        .catch(err => reject(err));
    });
  }

  public getCards() {
    return this.firestore.collection('/characters')
      .snapshotChanges()
      .pipe(map(changes =>
          changes.map(c =>
            ({ id: c.payload.doc.id, data: c.payload.doc.data() })
          )
        )
      );
  }
}
