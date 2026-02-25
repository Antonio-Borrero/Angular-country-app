import { Component, inject, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { RESTCountriesInterface } from '../../interfaces/RESTCountries.interface';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {

  countryService = inject(CountryService)

  isLoading = signal<boolean>(false);
  isError = signal<string | null>(null);
  countries = signal<RESTCountriesInterface[]>([])

  onSearch(query: string) {

    if(this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.countryService.searchByCountry(query).subscribe((countries) => {
      this.isLoading.set(false);
      this.countries.set(countries);

      console.log({countries})
    }
    )
  }
}
