import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../shared/models/movie.interface';

@Component({
	selector: 'cs390wap-movie-display',
	templateUrl: './movie-display.component.html',
	styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {
	@Input() currentMovie: Movie;
	constructor() { }

	ngOnInit() {
	}

}
