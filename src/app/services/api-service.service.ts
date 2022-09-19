import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private htpp: HttpClient) { }


  /**
   * 
   * Get POKEMON by URL
   * 
   * @param url  
   * @returns 
   */
  public getPokemonByUrl(url: string) {
    return this.htpp.get(url);
  }

  /**
   * 
   * Get All Pokemos at once
   * 
   * @returns  
   */
  public getAllPokemons () {
    return this.htpp.get(`${environment.pokeAPIBase}/pokemon`);
  }

  

}
