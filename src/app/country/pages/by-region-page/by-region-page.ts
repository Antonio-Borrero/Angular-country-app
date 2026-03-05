import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/Region.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage { 
  countryService = inject(CountryService);
  
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  queryParam = (this.activatedRoute.snapshot.queryParamMap.get("region") ?? "") as Region;
  selectedRegion = linkedSignal<Region | null>(() => this.queryParam ?? null);

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
        console.log({region: params.region})
        if (!params.region) return of([]);

        this.router.navigate(['/country/by-region'], {
        queryParams: {
          region: params.region,
        }
      })
        return this.countryService.searchByRegion(params.region)
      }
    })
}
