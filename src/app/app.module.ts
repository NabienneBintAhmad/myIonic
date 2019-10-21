import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import {FormsModule} from '@angular/forms'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthentService } from './services/authent.service';
import { TokenInterceptorService } from './services/token-interceptor.service';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    AuthentService,
    StatusBar,
    SplashScreen,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true  },
    NativeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}