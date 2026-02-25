import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RESTCountriesInterface } from '../interfaces/RESTCountries.interface';
import { map, Observable } from 'rxjs';
import { Country } from '../interfaces/Country.interface';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient)

  searchByCountry(query: string): Observable<Country[]>{
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountriesInterface[]>(`${environment.RESTCountriesApiKey}/name/${query}`).pipe(
      map(CountryMapper.mapRestCountriesArrayToCountryArray)
    )
  }

  searchByCapital(query: string): Observable<Country[]>{
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountriesInterface[]>(`${environment.RESTCountriesApiKey}/capital/${query}`).pipe(
      map(CountryMapper.mapRestCountriesArrayToCountryArray)
    )
  }

  searchByCode(query: string): Observable<Country>{
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountriesInterface>(`${environment.RESTCountriesApiKey}/capital/${query}`).pipe(
      map(CountryMapper.mapRestCountriesToCountry)
    )
  }

  searchByRegion(query: string){
    query = query.toLocaleLowerCase();

    return this.http.get(`${environment.RESTCountriesApiKey}/region/${query}`)
  }
}
