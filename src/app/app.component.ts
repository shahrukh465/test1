import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'Angular11';
  name='Saddu'
  Address='City Center'

  getName()
  {
    return this.name
  }

  obj=
  {
    name:'Shahrukh',
    phone:9713220465
  }

  arr=['Shahrukh','Gwalior','9713220465']

  a=100;
  b=250;

  siteUrl=window.location.href

}
 