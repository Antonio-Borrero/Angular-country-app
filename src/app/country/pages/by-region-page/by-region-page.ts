import { Component, inject } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage { 
  countryService = inject(CountryService)

  onSearch(query: string) {
    this.countryService.searchByRegion(query).subscribe((resp) => {
      
    }
    )
  }
}
