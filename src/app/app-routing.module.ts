import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './components/addbook/addbook.component';
import { BookdetailsComponent } from './components/bookdetails/bookdetails.component';
import { BookslistComponent } from './components/bookslist/bookslist.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'addbook',
    pathMatch:'full'
  },
  {
    path:'books-list',
    component:BookslistComponent
  },
  {
    path:'add-book',
    component:AddbookComponent
  },
  {
    path:'edit-book/:id',
    component:BookdetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
