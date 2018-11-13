import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MovieNewComponent } from './movie-new/movie-new.component';
const routes: Route[] = [
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'edit/:id', component: MovieEditComponent },
  { path: 'new', component: MovieNewComponent }
]
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MovieDetailComponent,
    MovieEditComponent,
    MovieNewComponent,
  ],
  providers: []
})
export class MovieModule { }
