import { Component, inject, input } from '@angular/core';
import { Country } from '../../../interfaces/Country.interface';
import { DecimalPipe, Location } from '@angular/common';

@Component({
  selector: 'country-information-page',
  imports: [DecimalPipe],
  templateUrl: './country-information.html',
})
export class CountryInformation { 
  country = input.required<Country>()
  location = inject(Location);

  goBack(){
    this.location.back()
  }
}
