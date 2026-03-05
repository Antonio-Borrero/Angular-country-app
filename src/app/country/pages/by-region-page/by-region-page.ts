import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/Region.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam(queryParam: string) {
  queryParam = queryParam.toLocaleLowerCase();

  const validRegions: Record <string, Region> = {
    'africa': 'Africa',
    'americas': 'Americas',
    'asia': 'Asia',
    'europe': 'Europe',
    'oceania': 'Oceania',
    'antarctic': 'Antarctic',
  }

  return validRegions[queryParam] ?? null;
}

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
})
export class ByRegionPage { 
  countryService = inject(CountryService);
  
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get("region") ?? "";
  selectedRegion = linkedSignal<Region | null>(() => validateQueryParam(this.queryParam));

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
