import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slide: string[] = []; 
  id="";
  state;
  constructor(public dataservice:DataService,private router:Router,private activatedRouter:ActivatedRoute ) { }

  ngOnInit(): void {
    this.getHomeVideos;

  }
  allCategories;
  getBanner(){
    this.dataservice.getBanner()
    .subscribe((resp:any)=>{
      for(var i=0; i< resp.length; i++) {
        this.slide.push(resp[i].thumbUrl)
      }
    })
  }
  getHomeVideos(){
    this.dataservice.getHomeVideos()
    .subscribe((resp:any)=>{
this.allCategories=resp;
    })
  }

}
