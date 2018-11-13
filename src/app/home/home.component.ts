import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../shared/models/movie.interface';
import { MovieUtilService } from '../shared/movie-util.service';

@Component({
    selector: 'cs390wap-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    user = {
        name: 'Mary'
    }

    @Input() currentMovie: Movie;
    constructor() {}
    
    ngOnInit() {}
}
