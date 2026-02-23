import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "../../../shared/footer/footer";

@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, Footer],
  templateUrl: './country-layout.html',
})
export class CountryLayout { }
