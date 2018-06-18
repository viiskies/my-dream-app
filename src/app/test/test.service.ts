import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class TestService {

	constructor(private http: HttpClient) { }

	getJoke() {
		return this.http.get('https://api.chucknorris.io/jokes/random');
	}	
	getAllCategories() {
		return this.http.get('https://api.chucknorris.io/jokes/categories');
	}

	getCategoryJoke(value:any){
		return this.http.get('https://api.chucknorris.io/jokes/random?category=' + value);
	}

	getJokesByValue(value:any){
		return this.http.get('https://api.chucknorris.io/jokes/search?query=' + value);
	}
}
