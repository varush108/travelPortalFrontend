import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NavbarComponent } from './containers/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class NavbarModule {
  
}
