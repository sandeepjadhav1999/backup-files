import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-user-operation',
  templateUrl: './user-operation.component.html',
  styleUrls: ['./user-operation.component.css'],
})
export class UserOperationComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  logout() {
    this.loginService.isLoggedIn = false;
    sessionStorage.removeItem('userName');
    sessionStorage.clear();
  }
}
