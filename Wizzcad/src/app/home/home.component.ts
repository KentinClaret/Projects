import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedToken: string;

  constructor(private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private router: Router,) { 
     // redirect to login if not logged it
     if (!this.authenticationService.currentUserValue) { 
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
    this.authenticationService.currentUserValue
  }

}
