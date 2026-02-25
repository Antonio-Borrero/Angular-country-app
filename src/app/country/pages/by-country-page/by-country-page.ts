import { Component, inject, signal } from '@angular/core';
import { SearchInput } from "../../components/search-input/search-input";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/Country.interface';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, CountryList],
  templateUrl: './by-country-page.html',
})
export class ByCountryPage {

  countryService = inject(CountryService)

  isLoading = signal<boolean>(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([])

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
