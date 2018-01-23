import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class TestService {

	constructor(private http: Http) { }

	getJoke() {
		return this.http.get('https://api.chucknorris.io/jokes/random').map( 
			(response: Response) => {
				console.log(response.json());
				return response.json();
			}
			);
	}	
	getAllCategories() {
		return this.http.get('https://api.chucknorris.io/jokes/categories').map(
			(response: Response) => {
				return response.json();
			}
			)
	}

	getCategoryJoke(value:any){
		return this.http.get('https://api.chucknorris.io/jokes/random?category=' + value).map(
			(response: Response) => {
				return response.json();
			}
		)
	}

	getJokesByValue(value:any){
		return this.http.get('https://api.chucknorris.io/jokes/search?query=' + value).map(
			(response: Response) => {
				return response.json();
			}
		)
	}
}
