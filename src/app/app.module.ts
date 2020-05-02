import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/services/login.service.service';
import { HttpClientModule } from '@angular/common/http';
import {LOCAL_STORAGE, WebStorageService, StorageServiceModule} from 'angular-webstorage-service';

@NgModule({
  declarations: [
    AppComponent
    ], 
  imports: [
    BrowserModule,
    LoginModule,
    HttpClientModule,
  
  ],
  providers: [LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
  constructor() {   }

}
