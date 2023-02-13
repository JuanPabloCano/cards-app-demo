import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '@app/modules/models/Character';
import { environment } from '@environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private readonly http: HttpClient) {
  }

  searchCharacters(query: string = '', page: number = 1): Observable<Character[]> {
    const FILTER_PARAMS: string = `?name=${ query }&page=${ page }`;
    return this.http.get<Character[]>(`${ environment.baseUrlAPI }/${ FILTER_PARAMS }`);
  }

  getDetails(id: number): Observable<Character> {
    return this.http.get<Character>(`${ environment.baseUrlAPI }/${ id }`);
  }
}
