import { TestBed } from '@angular/core/testing';

import { MovieUtilService } from './movie-util.service';
import { PRODUCTION_STATUS } from './models/movie.interface';

describe('MovieTestService', () => {
  beforeEach(() =>     TestBed.configureTestingModule({ providers: [MovieUtilService] }));

  it('should be created', () => {
    const service: MovieUtilService = TestBed.get(MovieUtilService);
    expect(service).toBeTruthy();
  });

  it('should have two items in the movie list', () => {
    const service: MovieUtilService = TestBed.get(MovieUtilService);
    expect(service.getMovies().length).toEqual(2);
  });

  it('should add a new movie to the movie list', () => {
    const service: MovieUtilService = TestBed.get(MovieUtilService);
    service.addMovie({
      title: 'Some Movie',
      genre: 'Some genre',
      productionStatus: PRODUCTION_STATUS.PRE_PRODUCTION,
      id: 2,
      tags: []
    })
    expect(service.getMovies().length).toEqual(3);
  });
  it('should get a movie given an ID in the movie list', () => {
    const service: MovieUtilService = TestBed.get(MovieUtilService);
    const movie = service.getMovies()[1];
    expect(service.getMovie(movie.id)).toEqual(movie);
  });
  it('should update a movie in the movie list', () => {
    const service: MovieUtilService = TestBed.get(MovieUtilService);
    const newMovie = {
      title: 'Some Movie',
      genre: 'Some genre',
      productionStatus: PRODUCTION_STATUS.PRE_PRODUCTION,
      id: 0,
      tags: []
    };
    service.update(newMovie);
    expect(service.getMovie(newMovie.id)).toEqual(newMovie);
  });
});
