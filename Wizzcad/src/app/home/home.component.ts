import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';
import * as _ from "lodash";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  columnDefs = [
    { field: 'name' },
    {
      field: "Company",
      valueGetter: params => {
        return params.data.forms[0].values[1].displayValue;
      }
    },
    {
      field: "Job",
      valueGetter: params => {
        return params.data.forms[0].values[0].displayValue;
      }
    }
  ];

  defaultColDef = {
    editable: true,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
  };

  rowData = [];

  constructor(private authenticationService: AuthenticationService,
    private router: Router) 
    { 
     // redirect to login if not logged it
     if (!this.authenticationService.currentUserValue) { 
      this.router.navigate(['/login']);
    } else {
      this.authenticationService.getDatas().subscribe(datas => {
        this.rowData = datas.filter(data => data.name);
      });
    }
  }
}
