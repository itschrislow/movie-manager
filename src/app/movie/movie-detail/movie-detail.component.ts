import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../shared/models/movie.interface';

@Component({
  selector: 'cs390wap-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  constructor(private route: ActivatedRoute) {
    const movieId = +this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
