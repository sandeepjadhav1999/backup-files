import { Component, } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
 
  constructor() { }

  logo:any = [
    'assets/angular.png',
    'assets/js.png',
    'assets/html5.png',
    'assets/css3.png',
    'assets/python.png',
    'assets/nodejs.png',
    'assets/bootstrap.png'
  ]

  techskills= [
    {name: 'Angular', value:85},
    {name: 'javascript', value:70},
    {name: 'html', value:85},
    {name: 'css', value:85},
    {name: 'python', value:80},
    {name: 'nodejs', value:50},
    {name: 'bootstrap', value:70}
  ]

  certificate =[
    {org: 'Udemy', org_logo:'assets/udemy.png', name:'Build Responsive Real-World Websites with HTML and  CSS', credential_id:'UC-3f95b8df-8edb-47c4-9b65-ac1d89e94cf7'},
    {org: 'Udemy', org_logo:'assets/udemy.png', name:'Modern Javascript Bootcamp', credential_id:'UC-defd19af-7ef6-4325-84a4-405d0032a662'},
    {org: 'Udemy', org_logo:'assets/udemy.png', name:'Complete Angular - Ultimate guide - with Real World app', credential_id:'UC-e53316a9-bf24-453d-96ab-21f4e14ec810/'},
    {org: 'Udemy', org_logo:'assets/udemy.png', name:'Angular with Angular Material, ANgularFire & NgRx ', credential_id:'UC-fb67fe3f-769a-4096-8b14-030bd823f782/'},
    {org: 'Udemy', org_logo:'assets/udemy.png', name:'Complete Node js Developer Course', credential_id:'UC-0043624b-2e8e-473f-aa69-b863de3a2dc7'},
    {org: 'JSpider', org_logo:'assets/jspider.png', name:'Python Full Stack', credential_id:'N/A'},

  ]

  navigateToLinkedIn() {
    window.open('https://www.linkedin.com/in/sandeep-jadhav-n-6b1883219', '_blank');
  }

  copyText() {
    const textToCopy = '+91 7760847075'; // Replace with your text
    const clipboard = navigator.clipboard;
    clipboard.writeText(textToCopy).then(() => {
      alert('Text copied to clipboard');
    }, () => {
      alert('Copy operation failed');
    });
  }

  

 

  

}
