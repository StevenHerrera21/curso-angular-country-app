import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CountryList } from '../../components/country-list/country-list';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList],
  templateUrl: './by-region-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage { 
  countries = signal<Country[]>([]);
}
