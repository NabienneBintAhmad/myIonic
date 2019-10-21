import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../services/authent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  implements OnInit {
  loginUserData = {};
    constructor(private authentService: AuthentService , private router: Router) { }
  
    ngOnInit(){
    }
     isSuperadmin() {
      return this.authentService.isSuperadmin();
    }
    isAdmin() {
      return this.authentService.isAdmin();
    }
    isUser() {
      return this.authentService.isUser();
    }
    isCaissier() {
      return this.authentService.isCaissier ();
    }
    isAuthenticated() {
      return this.authentService.isAuthenticated ();
    }
    isConnected() {
      return this.authentService.isConnected ();
    }
    logout() {
      return this.authentService.logout ();
    }
    loggedIn() {
      return this.authentService.loggedIn ();
    }
  login() {
   this.authentService.login(this.loginUserData)
      .subscribe(
        resp => {
          window.confirm('Connexion réussie');
          this.router.navigateByUrl('/register');
          console.log(resp);
          const jwt: any = resp.body;
          this.authentService.saveToken(jwt);
          if(this.authentService.login(this.loginUserData)){
            this.router.navigateByUrl('register');
          }
          else{
            this.router.navigateByUrl('login');

          }
          
        },
        err => {
          console.log(err);
          window.confirm('Connexion échouée, rassayer');
        }
      );
  }
  
  }
  
