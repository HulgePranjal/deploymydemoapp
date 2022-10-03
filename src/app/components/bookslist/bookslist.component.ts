import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-bookslist',
  templateUrl: './bookslist.component.html',
  styleUrls: ['./bookslist.component.css']
})
export class BookslistComponent implements OnInit {
Books:any =[];
  constructor(private crudApi:CrudService) { }

  ngOnInit(): void {
    this.crudApi.getBooks().subscribe(res=>{
      console.log(res);
      this.Books =res;
    })
  }
delete(id:any,i:any){
  console.log(id);
  if(window.confirm('Are you want to delete')){
    this.crudApi.deleteBook(id).subscribe(res=>{
      this.Books.splice(i,1);
    })
  }
}
}
