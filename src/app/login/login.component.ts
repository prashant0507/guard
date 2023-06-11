import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      username:[''],
      password:['']
    })
  }

  onSubmit(){
    console.log("login", this.login.value);
    localStorage.setItem('username', this.login.value.username);
    this.router.navigate(['/about']);
  }

}
