import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
	selector: 'mano-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

	title:string = "Mano antraste";

	joke:any;
	categories:any;
	jokes:any;

	constructor( private tS: TestService ) { 

	}

	ngOnInit() {
		this.tS.getJoke().subscribe( 
			result => {this.joke = result},
			err => {console.log(err)}
			);

		this.tS.getAllCategories().subscribe(
			gautaInfo => {this.categories = gautaInfo},
			err => {console.log(err)}
			);
	}
	
	categoryChanged(value:any){
		this.tS.getCategoryJoke(value).subscribe(
			result => {this.joke = result},
			err => {console.log(err)}
			);
	}

	searchJoke(value:any){
		if(value.length > 3) {
			this.tS.getJokesByValue(value).subscribe(
				result => {this.jokes = result['result']},

				error => {console.log(error)}
				);
		}
	}
}

