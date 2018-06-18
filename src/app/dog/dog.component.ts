import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

	title:string = "Mano antraste";

	doggyImage:any;
	breeds:any;
	breedDog:any;
	// jokes:any;

	constructor( private tS: DogService ) { 
		this.breedDog = '';
	}

	ngOnInit() {
		this.tS.getDoggyImage().subscribe( 
			result => {this.doggyImage = result},
			err => {console.log(err)}
			);

		this.tS.getAllBreeds().subscribe(
			result => {this.breeds = result['message']},
			err => {console.log(err)}
			);
	}
	
	breedDogChanged(value:any){
		this.tS.getDogBreedImage(value).subscribe(
			result => {this.breedDog = result},
			err => {console.log(err)}
			);
	}

	// searchJoke(value:any){
	// 	if(value.length > 3) {
	// 		this.tS.getJokesByValue(value).subscribe(
	// 			result => {this.jokes = result['result']},

	// 			error => {console.log(error)}
	// 			);
	// 	}
	// }

}
