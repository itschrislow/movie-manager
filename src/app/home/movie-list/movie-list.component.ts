import { Component, OnInit } from '@angular/core';
import { Movie } from '../../shared/models/movie.interface';
import { MovieUtilService } from '../../shared/movie-util.service';
import { MovieDisplayComponent } from '../../movie-display/movie-display.component';

@Component({
	selector: 'cs390wap-movie-list',
	templateUrl: './movie-list.component.html',
	styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
	movies: Movie[];
	constructor(private movieService: MovieUtilService) {
		this.movies = this.movieService.getMovies();
	}

	ngOnInit() {
	}
}