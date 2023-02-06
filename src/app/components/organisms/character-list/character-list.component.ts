import { Component, OnInit } from '@angular/core';
import { CharacterService } from '@app/modules/services/character.service';
import { Character } from '@app/modules/models/Character';
import { filter, take } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: [ './character-list.component.scss' ]
})
export class CharacterListComponent implements OnInit {

  public characters: Character[] = [];
  private pageNum: number = 1;
  private query!: string;
  private total: number = 10;

  constructor(private readonly characterService: CharacterService, private readonly route: ActivatedRoute, private readonly router: Router) {
    this.onUrlChange();
  }

  ngOnInit(): void {
    this.getCharactersByQuery();
  }

  private getDataFromService(): void {
    this.characterService.searchCharacters(this.query, this.pageNum)
      .pipe(
        take(1)
      ).subscribe((res: any) => {
      if (res?.results?.length === 0) {
        this.characters = [];
      }
      const { _, results } = res;
      const mappedResults = results.map((item: any) => ({
        ...item,
        total: this.total
      }));
      this.characters = [ ...this.characters, ...mappedResults ];
    });
  }

  private getCharactersByQuery(): void {
    this.route.queryParams.pipe(
      take(1)
    ).subscribe(params => {
      this.query = params['query'];
      this.getDataFromService();
    });
  }

  private onUrlChange(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.characters = [];
      this.pageNum = 1;
      this.getCharactersByQuery();
    });
  }
}