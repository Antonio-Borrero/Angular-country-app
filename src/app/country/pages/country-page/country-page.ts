import { Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-page',
  imports: [],
  templateUrl: './country-page.html',
})
export class CountryPage { 

  countryService = inject(CountryService)

  onSearch(query: string) {
    this.countryService.searchByCode(query).subscribe((resp) => {
      
    }
    )
  }
}
