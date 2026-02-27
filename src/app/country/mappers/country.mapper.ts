import { Country } from "../interfaces/Country.interface";
import { RESTCountriesInterface } from "../interfaces/RESTCountries.interface";

export class CountryMapper {
    static mapRestCountriesToCountry(RestCountries: RESTCountriesInterface): Country {
        return {
            cca2: RestCountries.cca2,
            flag: RestCountries.flags.svg,
            name: RestCountries.translations["spa"].common ?? "No Spanish name",
            capital: RestCountries.capital.join(","),
            population: RestCountries.population,
            region: RestCountries.region,
            subRegion: RestCountries.subregion,
        }
    }

    static mapRestCountriesArrayToCountryArray(RestCountries: RESTCountriesInterface[]): Country[] {
        return RestCountries.map((countries) => this.mapRestCountriesToCountry(countries))
    }
}