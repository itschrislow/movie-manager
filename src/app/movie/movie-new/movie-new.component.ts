import { Component, OnInit } from '@angular/core';
import { MovieUtilService } from '../../shared/movie-util.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'cs390wap-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {
  newMovieForm: FormGroup;
  statuses: string[];
  tags: string[] = [];
  writers: string[] = [];
  constructor(private movieService: MovieUtilService, private fb: FormBuilder, private router: Router) {
    this.newMovieForm = this.fb.group({
      title: ['', Validators.required],
      productionStatus: ['', Validators.required],
      genre: ['', Validators.required],
      director: '',
      screenwriters: '',
      logline: '',
      image: '',
      tags: ''
    });
    this.statuses = this.movieService.getProductionStatuses();    
  }
  addMovie() {
    this.movieService.addMovie({ id: this.movieService.getMovies().length, ...this.newMovieForm.value, tags: [...this.tags], screenwriters: [...this.writers] });
    this.router.navigate(['']);
  }
  addTag() {
    let newTag = this.newMovieForm.get('tags').value;
    this.tags.push(newTag);
    this.newMovieForm.get('tags').setValue('');
  }
  addWriter() {
    let newWriter = this.newMovieForm.get('screenwriters').value;
    this.writers.push(newWriter);
    this.newMovieForm.get('screenwriters').setValue('');
  }
  ngOnInit() {
  }

}
