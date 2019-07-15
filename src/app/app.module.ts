import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes,RouterModule, Router} from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

import {UserPreferenceService} from './services/userPreference.service'
const appRoutes : Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'users' , component: UserComponent}]
  
  @NgModule({
    declarations: [
      AppComponent,
      UserComponent,
      HomeComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [UserPreferenceService],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
