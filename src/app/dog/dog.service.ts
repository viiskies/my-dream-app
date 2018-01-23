import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class DogService {

	constructor(private http: Http) { }

	getDoggyImage() {
		return this.http.get('https://dog.ceo/api/breeds/image/random').map( 
			(response: Response) => {
				// console.log(response.json());
				return response.json();
			}
			);
	}	
	getAllBreeds() {
		return this.http.get('https://dog.ceo/api/breeds/list').map(
			(response: Response) => {
				return response.json();
			}
			)
	}

	// getCategoryJoke(value:any){
	// 	return this.http.get('https://api.chucknorris.io/jokes/random?category=' + value).map(
	// 		(response: Response) => {
	// 			return response.json();
	// 		}
	// 		)
	// }

	// getJokesByValue(value:any){
	// 	return this.http.get('https://api.chucknorris.io/jokes/search?query=' + value).map(
	// 		(response: Response) => {
	// 			return response.json();
	// 		}
	// 		)
	// }

}

