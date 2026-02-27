import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RESTCountriesInterface } from '../interfaces/RESTCountries.interface';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Country } from '../interfaces/Country.interface';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient)

  searchByCountry(query: string) {
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountriesInterface[]>(`${environment.RESTCountriesApiKey}/name/${query}`).pipe(
      map((countries) => CountryMapper.mapRestCountriesArrayToCountryArray(countries)),
      catchError((error) => {
        console.log(`Error fetching`, error)
        return throwError(() => new Error(`No se pudo obtener países con: ${query}`))
      })
    )
  }

  searchByCapital(query: string) {
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountriesInterface[]>(`${environment.RESTCountriesApiKey}/capital/${query}`).pipe(
      map((countries) => CountryMapper.mapRestCountriesArrayToCountryArray(countries)),
      catchError((error) => {
        console.log(`Error fetching`, error)
        return throwError(() => new Error(`No se pudo obtener países con: ${query}`))
      })
    )
  }

  searchByCode(code: string) {
    return this.http.get<RESTCountriesInterface[]>(`${environment.RESTCountriesApiKey}/alpha/${code}`).pipe(
      map((countries) => CountryMapper.mapRestCountriesArrayToCountryArray(countries)),
      map((countries) => countries.at(0)),
      catchError((error) => {
        console.log(`Error fetching`, error)
        return throwError(() => new Error(`No se pudo obtener países con: ${code}`))
      })
    )
  }

  searchByRegion(query: string){
    query = query.toLocaleLowerCase();

    return this.http.get(`${environment.RESTCountriesApiKey}/region/${query}`)
  }
}
