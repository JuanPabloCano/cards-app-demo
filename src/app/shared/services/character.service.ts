import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environment/environment';
import { map, Observable } from 'rxjs';
import { Character } from '@shared/models/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private total: number = 10;

  constructor(private readonly http: HttpClient) {
  }

  searchCharacters(query: string = '', page: number = 1): Observable<Character[]> {
    const FILTER_PARAMS: string = `?name=${ query }&page=${ page }`;
    return this.http.get<Character[]>(`${ environment.baseUrlAPI }/${ FILTER_PARAMS }`).pipe(
      map(res => ({
        ...res,
        total: this.total
      }))
    );
  }

  getDetails(id: number): Observable<Character> {
    return this.http.get<Character>(`${ environment.baseUrlAPI }/${ id }`)
      .pipe(
        map(res => ({
          ...res,
          total: this.total
        }))
      );
  }
}
