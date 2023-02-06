import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: [ './form-search.component.scss' ]
})
export class FormSearchComponent {

  private readonly THREE: number = 3;

  constructor(private readonly router: Router) {
  }

  public async onSearch(value: string): Promise<void> {
    if (value && value.length > this.THREE) {
      await this.router.navigate([ '/character-list' ], {
        queryParams: {query: value}
      });
    }
  }
}
