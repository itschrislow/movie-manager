import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PRODUCTION_STATUS, Movie } from '../../shared/models/movie.interface';
import { MovieUtilService } from '../../shared/movie-util.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'cs390wap-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie: Movie;
  editForm: FormGroup;
  statuses: string[];
  constructor(private fb: FormBuilder, private movieService: MovieUtilService,
    private router: Router,
    private route: ActivatedRoute) {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      productionStatus: ['', Validators.required],
      genre: ['', Validators.required],
      director: '',
      screenwriters: '',
      logline: '',
      image: ''
    });
    let movieId = +this.route.snapshot.params['id'] ;
    this.movie = this.movieService.getMovie(movieId);
    this.statuses = this.movieService.getProductionStatuses();
    this.editForm.patchValue(this.movie);
   }
   
   update() {
     const updatedMovie = { ...this.editForm.value, id: this.movie.id, tags: this.movie.tags };
     this.router.navigate(['']);
   }

  ngOnInit() {
  }

}
