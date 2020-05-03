import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { SidebarComponent } from './containers/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
]
})
export class SidebarModule {
  
}
