import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Character } from '@shared/models/Character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '@app/shared/services/character.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: [ './character-details.component.scss' ]
})
export class CharacterDetailsComponent implements OnInit {

  public character$!: Observable<Character>;

  constructor(private readonly route: ActivatedRoute, private readonly characterService: CharacterService, private location: Location) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      take(1)
    ).subscribe(params => {
      const { id } = params;
      this.character$ = this.characterService.getDetails(id);
    });
  }

  public goBack(): void {
    this.location.back();
  }
}
