import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { 
       // redirect to home if already logged in
       if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/home']);
      }
    }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authenticationService
    .login(this.f.username.value, this.f.password.value)
    .subscribe(
      data => {
        this.router.navigate(['/home']);
      },
      error => { 
        this.error = error
      });
  }
}
