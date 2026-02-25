import { Component, input } from '@angular/core';
import { RESTCountriesInterface } from '../../interfaces/RESTCountries.interface';

@Component({
  selector: 'country-list',
  imports: [],
  templateUrl: './country-list.html',
})
export class CountryList { 
  countries = input.required<RESTCountriesInterface[]>()
}
