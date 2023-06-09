import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog,MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ValidationComponent } from 'src/app/externalModal/validation/validation.component';
import { CustomError } from 'src/app/helpers/customer-error';
import { skillsBadge } from 'src/app/models/skillsBadge';
import { EmpDataService } from 'src/app/service/emp-data.service';
import { IssueNftService } from 'src/app/service/issue-nft.service';

@Component({
  selector: 'app-validate-nft',
  templateUrl: './validate-nft.component.html',
  styleUrls: ['./validate-nft.component.css']
})
export class ValidateNftComponent implements OnInit {

  isCLicked: boolean = false;
  isSpinner: boolean = false;
  employeeData: any = [];
  autofillEmp: any;
  imgs: any = '';
  customError: CustomError = new CustomError();
  skillBadge: skillsBadge[];

  filteredOptions: any;
  formGroup: FormGroup;

  level:any=["Apprentice","Craftsmith","Artisan","Master", "Grandmaster"]

  validateNft: FormGroup

  constructor(private issueNftService:IssueNftService, private router: Router,public matDialog: MatDialog,private empData: EmpDataService,private fb: FormBuilder) 
  { 
    this.validateNft = new FormGroup({
      userName: new FormControl(null, [ Validators.required ]),
      fName: new FormControl(null, [Validators.required]),
      lName: new FormControl(null, [ Validators.required ]),
      practice: new FormControl(null, [ Validators.required ]),
      circle: new FormControl(null, [ Validators.required ]),
      masteryLevel:new FormControl(null, [ Validators.required ]),
      // expiryDate:new FormControl(null, [ Validators.required ]),
      emailId: new FormControl(null, [ Validators.required ]),
      url: new FormControl(null, [ Validators.required ]),
      nftId:new FormControl(null, [ Validators.required ]),
    });   
  }

  ngOnInit(): void {
    this.empData.getempData().subscribe(
      (res: any[]) => {
        for (let person of res[0]) {
          this.employeeData.push(person['Email-Id']);
        }
        this.filteredOptions = this.employeeData;
        this.autofillEmp = res[0];
      },
      (err) => {
        console.log(err);
      }
    );

    this.issueNftService.getSkillBadges().subscribe(
      (res) => {
        console.log(res)
        this.skillBadge = res;
      },
      (err) => {
        err;
      }
    );

    this.formGroup = this.fb.group({
      employee: [''],
      practice: null,
      circle: null,
    });
    this.formGroup.get('practice').disable();
    this.formGroup.get('circle').disable();
    this.formGroup.get('employee').valueChanges.subscribe((response) => {
      this.filterData(response);
    });

  }

  
  validate(){
    console.log(this.validateNft.value)
    if (this.validateNft.valid) {
      this.isSpinner=true
      this.issueNftService.validateNft(this.validateNft.value).subscribe(
        (res)=>{
          this.isSpinner=false
          let dialogConfig= new MatDialogConfig()
          dialogConfig.data=res
          dialogConfig.width="300px"
          this.matDialog.open(ValidationComponent, dialogConfig)

          if (res.result == "valid"){
            this.validateNft.reset()
            this.validateNft.get("userName").clearValidators()
            this.validateNft.get("userName").updateValueAndValidity()
            this.validateNft.get("fName").clearValidators()
            this.validateNft.get("fName").updateValueAndValidity()
            this.validateNft.get("lName").clearValidators()
            this.validateNft.get("lName").updateValueAndValidity()
            this.validateNft.get("practice").clearValidators()
            this.validateNft.get("practice").updateValueAndValidity()
            this.validateNft.get("circle").clearValidators()
            this.validateNft.get("circle").updateValueAndValidity()
            this.validateNft.get("masteryLevel").clearValidators()
            this.validateNft.get("masteryLevel").updateValueAndValidity()
            this.validateNft.get("emailId").clearValidators()
            this.validateNft.get("emailId").updateValueAndValidity()
            this.validateNft.get("url").clearValidators()
            this.validateNft.get("url").updateValueAndValidity()
            this.validateNft.get("nftId").clearValidators()
            this.validateNft.get("nftId").updateValueAndValidity()  
          }
          
        },
        (err)=>{
          console.log(err.error.message)
          this.isSpinner=false
          let dialogConfig= new MatDialogConfig()
          dialogConfig.data={result: "Invalid"}
          dialogConfig.width="300px"
          this.matDialog.open(ValidationComponent, dialogConfig)
        }
      )
    } 
  }

  getFormControl(controlName: string): FormControl {
    return this.validateNft.get(controlName) as FormControl;
  }

  getErrorMessage(controlName: string, errorType: string): string {
    switch (controlName) {
      case 'emailId': {
        if (errorType === 'required')
          return "<strong>Email</strong> can't be blank";
        else if (errorType === 'email')
          return '<strong>Email</strong> should be in correct format. Eg: someone@example.com';
        else return '';
      }

      case 'circle': {
        if (errorType === 'touched')
          return 'select the <strong>Practice</strong>';
        else return '';
      }
      default:
        return '';
    }
  }

  filterData(enteredData: any) {
    this.filteredOptions = this.employeeData.filter((item: any) => {
      return item?.toLowerCase().indexOf(enteredData.toLowerCase()) > -1;
    });
  }

  getData() {
    const filter = this.autofillEmp.filter((emp: any) => {
      if (emp['Email-Id'] === this.formGroup.value.employee) {
        return emp;
      }
    });
    const userName = filter[0]['Email-Id'].split('@')[0];

    this.validateNft.get('userName').setValue(userName);
    this.validateNft.get('fName').setValue(filter[0]['First Name']);
    this.validateNft.get('lName').setValue(filter[0]['Last Name']);
    this.validateNft.get('emailId').setValue(filter[0]['Email-Id']);
    this.formGroup.get('practice').setValue(filter[0]['Parent Circle']);
    this.formGroup.get('circle').setValue(filter[0]['Circle']);
  }

  select() {
    this.validateNft.get('masteryLevel').reset();
    this.validateNft.get('url').reset();
    this.imgs = null;
  }

  skillseletect() {
    let circleName = this.validateNft.get('practice').value;
    let masteryName = this.validateNft.get('masteryLevel').value;
    let finalsearch = `${circleName} ${masteryName}`;
    console.log('hi', finalsearch);
    this.skillBadge.find((data) => {
      if (data.badgeName === finalsearch) {
        console.log(data);
        this.imgs = data.badgeURL;
        this.validateNft.patchValue({
          url: data.badgeURL,
        });
      }
    });
  }


}