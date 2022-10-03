import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  bookForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService) {
    this.bookForm = this.formBuilder.group({
      name: [''],
      price: [''],
      description: ['']
    })
  }

  ngOnInit() { }
  onSubmit(): any {
    this.crudService.AddBook(this.bookForm.value).subscribe(() => {
console.log('Data Added Successfully');
this.ngZone.run(()=>{
  this.router.navigateByUrl('/books-list')
},(err:any)=>{
  console.log(err);

});
    })
  }
}
