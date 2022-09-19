import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pokemons: any;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {

    this.getPokemonAll();
  }


  getPokemonAll() {
    this.apiService
      .getAllPokemons()
      .subscribe(resp => {
        this.pokemons = resp;
        console.log(this.pokemons);
      });

  }

}
