import { Component, OnInit } from '@angular/core';
import {DemoService} from '../demo.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data=[];
  i;
  checkclick;
  constructor(private demoservice:DemoService) {
    this.checkclick=false;
   }

  ngOnInit(): void {
    this.demoservice.request().subscribe((data:any[])=>{
      console.log(data);
      this.data=data;
    })
  }
  onclick(i:number)
  {
    this.demoservice.findindex(i);
  }

}
