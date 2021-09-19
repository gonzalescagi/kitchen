import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppComponent } from './app.component';
import { AsideComponent } from './component/aside/aside.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SharedModule } from './shared/shared.module';
import { SectionComponent } from './component/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
   // MatSidenavModule,
   // MatDatepickerModule,
    SharedModule
  ],
exports:[SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
