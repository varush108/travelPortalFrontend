import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginModule } from './01_login/login.module';
import { LoginService } from './01_login/services/login.service.service';
import { HttpClientModule } from '@angular/common/http';
import {LOCAL_STORAGE, WebStorageService, StorageServiceModule} from 'angular-webstorage-service';
import { UserModule } from './02_user/user.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardLoggedInService } from './services/AuthGuardLoggedIn.service';
import { AuthGuardService } from './services/AuthGuard.service';
import { AdminModule } from './03_admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
    ], 
  imports: [
    BrowserModule,
    LoginModule,
    HttpClientModule,
    UserModule,
    AdminModule
  ], 
  providers: [LoginService,
    AuthGuardLoggedInService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
  constructor() {   }

}
