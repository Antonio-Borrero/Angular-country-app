import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RESTCountriesInterface } from '../interfaces/RESTCountries.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient)

  searchByCountry(query: string){
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountriesInterface[]>(`${environment.RESTCountriesApiKey}/name/${query}`)
  }

  searchByCapital(query: string){
    query = query.toLocaleLowerCase();

    return this.http.get(`${environment.RESTCountriesApiKey}/capital/${query}`)
  }

  searchByCode(query: string){
    query = query.toLocaleLowerCase();

    return this.http.get(`${environment.RESTCountriesApiKey}/alpha/${query}`)
  }

  searchByRegion(query: string){
    query = query.toLocaleLowerCase();

    return this.http.get(`${environment.RESTCountriesApiKey}/region/${query}`)
  }
}
