import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  profile_obj=[
    {name:'Matthew',date:'Joined in 2015',comment:'Matthew is a musicican living in Nashville.',img:'im2.png'},
    {name:'Mohan Sharma',date:'Joined in 2015',comment:'Mohan Sharma is a good developer.',img:'img1.jpg'},
    {name:'Ranjeet Singh',date:'Joined in 2015',comment:'Ranjeet wants to do bhangra.',img:'img3.ico'},
    {name:'Papa ki Pari',date:'Joined in Facebook',comment:'Works at stuDy!nG @ noT yEt',img:'img5.jpg'}
  ]

  ngOnInit() {
  }

}
