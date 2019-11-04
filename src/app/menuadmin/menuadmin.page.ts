import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentService } from '../services/authent.service';
@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.page.html',
  styleUrls: ['./menuadmin.page.scss'],
})
export class MenuadminPage implements OnInit {
  public menus=[
    {title:"Ajout utilisateur",url:"/menuadmin/user", icon:"person-add"},
    {title:"Liste transaction",url:"/menuadmin/historiqueadmin",icon:"list"},
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
  