import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class DogService {

	constructor(private http: HttpClient) { }

	getDoggyImage() {
		return this.http.get('https://dog.ceo/api/breeds/image/random');
	}

	getAllBreeds() {
		return this.http.get('https://dog.ceo/api/breeds/list');
	}

	getDogBreedImage(value:any){
		return this.http.get('https://dog.ceo/api/breed/' + value + '/images/random');
	}

	// getJokesByValue(value:any){
	// 	return this.http.get('https://api.chucknorris.io/jokes/search?query=' + value).map(
	// 		(response: Response) => {
	// 			return response.json();
	// 		}
	// 		)
	// }

}

