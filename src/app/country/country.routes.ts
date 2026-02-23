import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { ByCountryPage } from './pages/by-country-page/by-country-page';

export const countryRoutes: Routes = [
    {
        path: "",
        component: ByCountryPage,
    },
    {
        path: "**",
        redirectTo: "",
    }
];

export default countryRoutes