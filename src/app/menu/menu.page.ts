import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentService } from '../services/authent.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
public menus=[
  {title:"Accueil",url:"/menu/home", icon:"home"},
  {title:"Transaction",url:"/menu/transaction",icon:"send"},
  {title:"Liste transaction",url:"/menu/historique",icon:"list"},
  {title:"Logout",url:"logout",icon:"log-out"}
]
  constructor( private router:Router, private authentservice: AuthentService) { }

  ngOnInit() {
  }
  onMenuItem(m){
    if(m.url=='logout'){
      this.authentservice.logout();
      this.router.navigateByUrl('login');
    }else{
      this.router.navigateByUrl(m.url);
    }

  }
}
