import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
data=[];
i;
  constructor(private det:DemoService) {
    alert("To go back click on home");
    this.i=det.i;
   }

  ngOnInit(): void {
    this.det.request().subscribe((data:any[])=>{
      console.log(data);
      this.data=data;
    })
  }

}
