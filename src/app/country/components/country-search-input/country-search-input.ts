import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
})
export class CountrySearchInput { 
  //RECIBIR VALOR
  placeholder = input('Buscar');
  //EMITIR VALOR
  value = output<string>();
  
}
