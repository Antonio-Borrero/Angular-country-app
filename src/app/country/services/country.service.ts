import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { RESTCountriesInterface } from '../interfaces/RESTCountries.interface';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { Country } from '../interfaces/Country.interface';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);
  private queryCacheCountry = new Map<string, Country[]>();
  private queryCacheCapital = new Map<string, Country[]>();

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();

    if (this.queryCacheCountry.has(query)) return of(this.queryCacheCountry.get(query) ?? []);

    return this.http.get<RESTCountriesInterface[]>(`${environment.RESTCountriesApiKey}/name/${query}`).pipe(
      map((countries) => CountryMapper.mapRestCountriesArrayToCountryArray(countries)),
      tap((countries) => this.queryCacheCountry.set(query, countries)),
      catchError((error) => {
        console.log(`Error fetching`, error)
        return throwError(() => new Error(`No se pudo obtener países con: ${query}`))
      })
    )
  }

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();

    if (this.queryCacheCapital.has(query)) return of(this.queryCacheCapital.get(query) ?? []);

    return this.http.get<RESTCountriesInterface[]>(`${environment.RESTCountriesApiKey}/capital/${query}`).pipe(
      map((countries) => CountryMapper.mapRestCountriesArrayToCountryArray(countries)),
      tap((countries) => this.queryCacheCapital.set(query, countries)),
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
