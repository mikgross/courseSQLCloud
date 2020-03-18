import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CloudFunctionsService } from 'src/app/services/cloud-functions.service';

@Component({
  selector: 'app-business-app',
  templateUrl: './business-app.component.html',
  styleUrls: ['./business-app.component.css']
})
export class BusinessAppComponent implements OnInit {

  data;
  loading;

  constructor(
    private authService: AuthService,
    private cloudFunc: CloudFunctionsService
  ) { }

  public logout() {
    this.authService.logout();
  }

  public async selectAll() {
    this.data = await this.cloudFunc.selectAll();
    this.data = JSON.parse(this.data);
    console.log(this.data);
  }

  ngOnInit(): void {
    this.authService.checkLogin();
    console.log('calling data')
    this.selectAll();
  }

}
