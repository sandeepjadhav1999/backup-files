import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';

import { CustomValidators } from '../customerValidotrs/password';
import { CustomError } from '../helpers/customer-error';
import { LoginService } from '../service/login.service';
import { SiginValidators } from '../customerValidotrs/siginEmail';
import {emailValidtor} from '../customerValidotrs/email'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChild('playvideo') playvideo: ElementRef | any;

  customError: CustomError = new CustomError();

  backgroundVideo: any = 'Play';

  playpause: boolean = false;
  createAcc: boolean = false;
  updatePass: boolean = false;

  isSnackBarOpen: boolean = false;
  isSnackBarDesp: string;
  isSnackClose: number = 0;

  adminLogin: FormGroup;
  userLogin: FormGroup;
  externalLogin: FormGroup;
  createAccount: FormGroup;
  updatePassword: FormGroup;

  constructor(
    private loginService: LoginService,
    private route: Router,
    private matsnackBar: MatSnackBar,
    private fb: FormBuilder
  ) {
    this.adminLogin = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
    this.adminLogin.get('userName').setValue('');
    this.adminLogin.get('password').setValue('');

    this.userLogin = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });

    this.externalLogin = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });

    // this.createAccount = new FormGroup({
    //   userName: new FormControl(null, [Validators.required]),
    //   password: new FormControl(null, [
    //     Validators.required,
    //     Validators.minLength(5),
    //   ]),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   role: new FormControl('user', [Validators.required]),
    //   passwordAllocatedBy: new FormControl('false', [Validators.required]),
    // });
      this.createAccount = this.fb.group(

      {

        userName:[null,[Validators.required,]],

        password:[null, [Validators.required,Validators.minLength(5),]],

        email: [null, [Validators.required,Validators.email,emailValidtor()]],

        role: ['user', [Validators.required]],

        passwordAllocatedBy: ['false', [Validators.required]],

      },

      {validator: SiginValidators.MatchingUserName}

    )
    this.updatePassword = this.fb.group(
      {
        userName: [null, [Validators.required]],
        old_password: [null, [Validators.required]],
        new_password: [null, [Validators.required]],
        confirm_password: [null, [Validators.required]],
      },
      { validator: CustomValidators.MatchingPasswords }
    );
  }

  ngOnInit(): void {}

  change() {
    this.playpause = !this.playpause;
    if (this.playpause) {
      this.backgroundVideo = 'Pause';
      this.playvideo.nativeElement.play();
    } else {
      this.backgroundVideo = 'Play';
      this.playvideo.nativeElement.pause();
    }
  }
  newacc() {
    this.createAcc = true;
  }
  back() {
    this.createAcc = false;
  }

  updatepassw() {
    this.updatePass = true;
  }

  backupdate() {
    this.updatePass = false;
  }

  adminlog() {
    if (this.adminLogin.valid) {
      console.log(this.adminLogin.value);
      this.loginService.login(this.adminLogin.value).subscribe(
        (res: any) => {
          if (
            res[1] === 'user' ||
            res[1] === 'External' ||
            res[1] === 'external' ||
            res[1] === 'others' ||
            res[1] === 'Others'
          ) {
            this.adminLogin.reset();
            this.adminLogin.get('userName').clearValidators();
            this.adminLogin.get('userName').updateValueAndValidity();
            this.adminLogin.get('password').clearValidators();
            this.adminLogin.get('password').updateValueAndValidity();

            this.isSnackBarOpen = true;
            this.isSnackBarDesp = 'You are not allowed to visit this page';
            this.matSnackBarCloseAction();
            this.isSnackClose = 2;
          } else if (res[2] === 'Successfully LoggedIn') {
            this.loginService.isLoggedIn = true;
            this.isSnackBarOpen = true;
            this.isSnackBarDesp = 'Successfully Logged In';
            this.matSnackBarCloseAction();
            this.isSnackClose = 1;
            sessionStorage.setItem('auth', 'loggedIn');

            setTimeout(() => {
              this.route.navigate(['/', 'admin', 'adminoperation']);
            }, 2000);
          }
        },
        (err) => {
          console.log(err);
          if (err.error === 'Incorrect username or password.') {
            this.adminLogin.reset();
            this.adminLogin.get('userName').clearValidators();
            this.adminLogin.get('userName').updateValueAndValidity();
            this.adminLogin.get('password').clearValidators();
            this.adminLogin.get('password').updateValueAndValidity();

            this.isSnackBarOpen = true;
            this.isSnackBarDesp = 'Incorrect username or password.';
            this.matSnackBarCloseAction();
            this.isSnackClose = 2;

            // this.matsnackBar.open('Incorrect username or password.', 'Close', {
            //   duration: 1500,
            //   panelClass: 'my-snackbar',
            // });

            // this.matsnackBar.open('Successfully Logged In', 'Close', {
            //   duration: 1500,
            //   // verticalPosition:"top",
            //   // horizontalPosition:'center'
            //   panelClass: 'my-snackbar',
            // });
          }
        }
      );
    }
  }
  userlog() {
    if (this.userLogin.valid) {
      this.loginService.login(this.userLogin.value).subscribe(
        (res: any) => {
          console.log(res);
          if (
            res[1] === 'Admin' ||
            res[1] === 'External' ||
            res[1] === 'external' ||
            res[1] === 'others' ||
            res[1] === 'Others'
          ) {
            this.userLogin.reset();
            this.userLogin.get('userName').clearValidators();
            this.userLogin.get('userName').updateValueAndValidity();
            this.userLogin.get('password').clearValidators();
            this.userLogin.get('password').updateValueAndValidity();

            this.isSnackBarOpen = true;
            this.isSnackBarDesp = 'You are not allowed to visit this page';
            this.matSnackBarCloseAction();
            this.isSnackClose = 6;
          } else if (res[1] === 'user') {
            if (
              res[2] ===
              'Successfully LoggedIn, Please update the password every 30 days once'
            ) {
              this.loginService.isLoggedIn = true;
              sessionStorage.setItem('userName', this.userLogin.value.userName);

              this.isSnackBarOpen = true;
              this.isSnackBarDesp =
                'Successfully Logged In, Please update the password every 30 days once';
              this.matSnackBarCloseAction();
              this.isSnackClose = 3;
              sessionStorage.setItem('auth', 'loggedIn');

              // this.matsnackBar.open(
              //   'Successfully Logged In, Please Update The Password',
              //   'Close',
              //   {
              //     duration: 1500,
              //     // verticalPosition:"top",
              //     // horizontalPosition:'center'
              //     panelClass: 'userLogin-snackbar',
              //   }
              // );

              setTimeout(() => {
                this.route.navigate(['/', 'user', 'userOperation']);
              }, 2000);
            } else if (res[2] === 'Successfully LoggedIn') {
              this.loginService.isLoggedIn = true;
              sessionStorage.setItem('userName', this.userLogin.value.userName);

              this.isSnackBarOpen = true;
              this.isSnackBarDesp = 'Successfully Logged In';
              this.matSnackBarCloseAction();
              this.isSnackClose = 4;
              sessionStorage.setItem('auth', 'loggedIn');

              // this.matsnackBar.open('Successfully Logged In', 'Close', {
              //   duration: 1500,
              //   // verticalPosition:"top",
              //   // horizontalPosition:'center'
              //   panelClass: 'userLogin-snackbar',
              // });

              setTimeout(() => {
                this.route.navigate(['/', 'user', 'userOperation']);
              }, 2000);
            } else if (
              res[2] === 'Password Expired, Please Update The Password'
            ) {
              this.userLogin.reset();
              this.userLogin.get('userName').clearValidators();
              this.userLogin.get('userName').updateValueAndValidity();
              this.userLogin.get('password').clearValidators();
              this.userLogin.get('password').updateValueAndValidity();

              this.isSnackBarOpen = true;
              this.isSnackBarDesp =
                'Password expired, please update the password';
              this.matSnackBarCloseAction();
              this.isSnackClose = 5;

              // this.matsnackBar.open(
              //   'Password Expired, Please Update The Password',
              //   'Close',
              //   {
              //     duration: 1500,
              //     panelClass: 'userLogin-snackbar',
              //   }
              // );
            }
          }
        },
        (err) => {
          console.log(err);
          if (err.error === 'Incorrect username or password.') {
            this.userLogin.reset();

            this.userLogin.get('userName').clearValidators();

            this.userLogin.get('userName').updateValueAndValidity();

            this.userLogin.get('password').clearValidators();

            this.userLogin.get('password').updateValueAndValidity();

            this.isSnackBarOpen = true;

            this.isSnackBarDesp = 'Incorrect username or password.';

            this.matSnackBarCloseAction();

            this.isSnackClose = 6;
          }
        }
      );
    }
  }
  externallog() {
    if (this.externalLogin.valid) {
      this.loginService.login(this.externalLogin.value).subscribe(
        (res: any) => {
          console.log(res);
          if (res[1] === 'Admin' || res[1] === 'user') {
            this.externalLogin.reset();
            this.externalLogin.get('userName').clearValidators();
            this.externalLogin.get('userName').updateValueAndValidity();
            this.externalLogin.get('password').clearValidators();
            this.externalLogin.get('password').updateValueAndValidity();

            this.isSnackBarOpen = true;
            this.isSnackBarDesp = 'You are not allowed to visit this page';
            this.matSnackBarCloseAction();
            this.isSnackClose = 8;
          } else if (res[1] === 'External' || res[1] === 'external') {
            if (res[2] === 'Successfully LoggedIn') {
              this.loginService.isLoggedIn = true;

              this.isSnackBarOpen = true;
              this.isSnackBarDesp = 'Successfully Logged In';
              this.matSnackBarCloseAction();
              this.isSnackClose = 7;
              sessionStorage.setItem('auth', 'loggedIn');

              // this.matsnackBar.open('Successfully Logged In', 'Close', {
              //   duration: 1500,
              //   // verticalPosition:"top",
              //   // horizontalPosition:'center'
              //   panelClass: 'my-snackbar',
              // });

              setTimeout(() => {
                this.route.navigate(['/', 'external', 'externalOperation']);
              }, 2000);
            }
          }
        },
        (err) => {
          console.log(err);
          if (err.error === 'Incorrect username or password.') {
            this.externalLogin.reset();
            this.externalLogin.get('userName').clearValidators();
            this.externalLogin.get('userName').updateValueAndValidity();
            this.externalLogin.get('password').clearValidators();
            this.externalLogin.get('password').updateValueAndValidity();

            this.isSnackBarOpen = true;
            this.isSnackBarDesp = 'Incorrect username or password.';
            this.matSnackBarCloseAction();
            this.isSnackClose = 8;

            // this.matsnackBar.open('Incorrect username or password.', 'Close', {
            //   duration: 1500,
            //   panelClass: 'my-snackbar',
            // });
          }
        }
      );
    }
  }

  signup() {
    if (this.createAccount.valid) {
      this.loginService.sigup(this.createAccount.value).subscribe(
        (res) => {
          this.loginService.isLoggedIn = true;

          this.isSnackBarOpen = true;
          this.isSnackBarDesp = 'Your Account has Created Successfully';
          this.matSnackBarCloseAction();
          this.isSnackClose = 9;

          // this.matsnackBar.open(
          //   'Your Account has Created Successfully',
          //   'Close',
          //   {
          //     duration: 1500,
          //     panelClass: 'userSignup-snackbar',
          //   }
          // );

          setTimeout(() => {
            this.createAcc = false;
          }, 2000);
        },
        (err) => {
          this.isSnackBarOpen = true;
          this.isSnackBarDesp = 'User Name/Account already exists';
          this.matSnackBarCloseAction();
          this.isSnackClose = 10;

          // this.matsnackBar.open('User Name/Account already exists', 'Close', {
          //   duration: 1500,
          //   panelClass: 'userSignup-snackbar',
          // });
          this.createAccount.reset();
          this.createAccount.get('userName').clearValidators();
          this.createAccount.get('userName').updateValueAndValidity();

          this.createAccount.get('password').clearValidators();
          this.createAccount.get('password').updateValueAndValidity();

          this.createAccount.get('email').clearValidators();
          this.createAccount.get('email').updateValueAndValidity();

          this.createAccount.get('role').clearValidators();
          this.createAccount.get('role').updateValueAndValidity();

          this.createAccount.get('passwordAllocatedBy').clearValidators();
          this.createAccount
            .get('passwordAllocatedBy')
            .updateValueAndValidity();
        }
      );
    }
  }

  updatesubmit() {
    if (this.updatePassword.valid) {
      this.loginService.update(this.updatePassword.value).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
          if (err.error.text == 'password successfully updated!') {
            this.isSnackBarOpen = true;
            this.isSnackBarDesp = 'Password successfully updated!';
            this.matSnackBarCloseAction();
            this.isSnackClose = 11;

            // this.matsnackBar.open('Password successfully updated!', 'Close', {
            //   duration: 2000,
            //   panelClass: 'userUpdate-snackbar',
            // });

            setTimeout(() => {
              this.updatePass = false;
            }, 2000);
          } else if (err.error.text == 'password successfully updated') {
            // console.log('hi');

            this.isSnackBarOpen = true;
            this.isSnackBarDesp = 'Password successfully updated';
            this.matSnackBarCloseAction();
            this.isSnackClose = 12;

            // this.matsnackBar.open('Password successfully updated', 'Close', {
            //   duration: 2000,
            //   panelClass: 'userUpdate-snackbar',
            // });

            setTimeout(() => {
              this.updatePass = false;
            }, 2000);
          }
        }
      );
    }
  }
  getFormControl(controlName: string): FormControl {
    return this.createAccount.get(controlName) as FormControl;
  }

  getErrorMessage(controlName: string, errorType: string): string {
    switch (controlName) {
      case 'email': {
        if (errorType === 'required')
          return "<strong>Email</strong> can't be blank";
        else if (errorType === 'email')
          return '<strong>Email</strong> should be in correct format. Eg: someone@example.com';
        else return '';
      }
      case 'userName': {

        if (errorType === 'required')

          return "<strong>User Name</strong> can't be blank";

        else return '';

      }
      case 'password': {
        if (errorType === 'required')
          return "<strong>Password</strong> can't be blank";
        else if (errorType === 'minlength')
          return '<strong>Password</strong> must contain 5 characters';
        else return '';
      }
      default:
        return '';
    }
  }

  matSnackBarCloseAction() {
    setTimeout(() => {
      this.isSnackBarOpen = false;
    }, 2000);
  }

  closeSnack() {
    if (this.isSnackClose === 1) {
      this.route.navigate(['/', 'admin', 'adminoperation']);
      this.isSnackBarOpen = false;
    } else if (this.isSnackClose === 3) {
      this.route.navigate(['/', 'user', 'userOperation']);
      this.isSnackBarOpen = false;
    } else if (this.isSnackClose === 4) {
      this.route.navigate(['/', 'user', 'userOperation']);
      this.isSnackBarOpen = false;
    } else if (this.isSnackClose === 7) {
      this.route.navigate(['/', 'external', 'externalOperation']);
      this.isSnackBarOpen = false;
    } else if (
      this.isSnackClose === 2 ||
      this.isSnackClose === 5 ||
      this.isSnackClose === 6 ||
      this.isSnackClose === 8 ||
      this.isSnackClose === 9 ||
      this.isSnackClose === 10 ||
      this.isSnackClose === 11 ||
      this.isSnackClose === 12
    ) {
      this.isSnackBarOpen = false;
    }
  }
}
