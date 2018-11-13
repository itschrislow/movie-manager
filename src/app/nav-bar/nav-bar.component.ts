import { Component, OnInit } from '@angular/core';
import { MovieUtilService } from '../shared/movie-util.service';

@Component({
  selector: 'cs390wap-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(private movieService: MovieUtilService) {
   }
   getList() {
     return this.movieService.getMovies();
   }

  ngOnInit() {
  }

}
