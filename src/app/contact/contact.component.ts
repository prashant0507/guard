import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CanComponentDeactivate } from '../shared/guards/deactivate.guard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, CanComponentDeactivate {
  contact!:FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log('Contact');
    
    this.contact = this.fb.group({
      username:[''],
      city:['']
    })
  }

  CanDeactivate(){
    if(this.contact.dirty){
      return confirm("are you sure you want to move");
    }else{
      return true;
    }
  }

  onSubmit(){
    console.log('this.contact', this.contact);
  }

}
