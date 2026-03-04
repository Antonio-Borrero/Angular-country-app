import { Component, inject, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/Region.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage { 
  countryService = inject(CountryService);
  selectedRegion = signal<Region | null>(null);

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  countryResource = rxResource({
      params: () => ({region: this.selectedRegion()}),
      stream: ({params}) => {
        if (!params.region) return of([]);
        return this.countryService.searchByRegion(params.region)
      }
    })
}
