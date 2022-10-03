import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
getId:any;
updateForm!:FormGroup
  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private activatedRoute:ActivatedRoute,
    private crudApi:CrudService) { 
      this.getId = this.activatedRoute.snapshot.paramMap.get('id');
      this.crudApi.getBook(this.getId).subscribe(res=>{
        this.updateForm.setValue({
name:res['name'],
price:res['price'],
description:res['description']
        })
      });
      this.updateForm = this.formBuilder.group({
        name:[''],
price:[''],
description:['']
      })
    }

  ngOnInit(): void {
  }
  onUpdate(){
    this.crudApi.updateBook(this.getId,this.updateForm.value).subscribe(res=>{
      console.log('Data Updated successfull');
      this,this.ngZone.run(()=>{this.router.navigateByUrl('/books-list')})
    },(err)=>{
console.log(err)
    })
  }

}
