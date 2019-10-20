import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Component, OnInit } from '@angular/core';
import { AuthentService } from '../app/services/authent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authservice: AuthentService, private router: Router) {}
  ngOnInit(){
    this.router.navigateByUrl('/login');
  }
  isSuperadmin() {
    return this.authservice.isSuperadmin();
  }
  isAdmin() {
    return this.authservice.isAdmin();
  }
  isUser() {
    return this.authservice.isUser();
  }
  isCaissier() {
    return this.authservice.isCaissier();
  }
  isAuthenticated() {
    return this.authservice.isAuthenticated();
  }
  isConnected() {
    return this.authservice.isConnected();
  }
  logout() {
    return this.authservice.logout();
  }
  loggedIn() {
    return this.authservice.loggedIn();
  }
}

