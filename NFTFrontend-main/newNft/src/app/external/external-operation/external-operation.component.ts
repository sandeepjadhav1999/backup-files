import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-external-operation',
  templateUrl: './external-operation.component.html',
  styleUrls: ['./external-operation.component.css'],
})
export class ExternalOperationComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  logout() {
    this.loginService.isLoggedIn = false;
    sessionStorage.clear();
  }
}
