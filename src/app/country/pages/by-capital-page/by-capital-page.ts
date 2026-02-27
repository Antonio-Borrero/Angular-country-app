import { Component, inject, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-capital-page.html',
})
export class ByCapitalPage { 

  countryService = inject(CountryService)
  query = signal("");

  countryResource = rxResource({
    params: () => ({query: this.query()}),
    stream: ({params}) => {
      if (!params.query) return of([]);
      return this.countryService.searchByCapital(params.query)
    }
  })
}
