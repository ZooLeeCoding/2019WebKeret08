import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyFirsztComponent } from './my-firszt/my-firszt.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MainComponent } from './main/main.component';

import { AppRoutingModule } from './app.routing.module';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from
  '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirsztComponent,
    MySecondComponent,
    MainComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SidenavListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
