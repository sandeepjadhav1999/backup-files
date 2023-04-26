import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-adminoperation',
  templateUrl: './adminoperation.component.html',
  styleUrls: ['./adminoperation.component.css'],
})
export class AdminoperationComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  logout() {
    this.loginService.isLoggedIn = false;
    sessionStorage.clear();
  }
}
