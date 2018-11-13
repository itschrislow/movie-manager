import { Injectable } from '@angular/core';
import { Movie, PRODUCTION_STATUS } from './models/movie.interface';
import { SharedModule } from './shared.module';

@Injectable({
  providedIn: SharedModule
})
export class MovieUtilService {
	private movies: Movie[] = [
		{ 
		title: 'Uncharted',
		productionStatus: PRODUCTION_STATUS.PRE_PRODUCTION,
		genre: 'Action',
		logline: 'Plot is unknown at this time',
		tags: ['Action', 'Adventure'],
		id: 0
		},
		{
		title: 'Son of Jeru',
		productionStatus: PRODUCTION_STATUS.SCREENPLAY_FINISHED,
		genre: 'Action',
		director: 'Maneesh Tewani',
		screenwriters: [ 'Maneesh Tewani' ],
		logline: 'Unable to stop the world from ending, young Nelson unravels the troubled path to finding his parents again.',
		tags: [ 'Action', 'Drama' ],
		id: 1
		}
	];
	constructor() { }
	/*
		Accepts: id as a number
		Returns: movie at an index
	*/
	getMovie(id: number): Movie {
		return this.movies[id]; 
	}
	/*
		Accepts: movie as a Movie type
		Returns: void, updates movie at id with passed in movie
	*/
	update(movie: Movie) {
		this.movies[movie.id] = movie;
	}
	getProductionStatuses(): string[] {
		return Object.values(PRODUCTION_STATUS);
	}
	/*
		Accepts: movie as a Movie type
		Returns: void, adds movie to the end of movies array
	*/
	addMovie(movie: Movie) {
		this.movies.push(movie);
	}
	/*
		Accepts: void
		Returns: copy of movies
	*/
	getMovies() {
		return JSON.parse(JSON.stringify(this.movies));
	}
}
