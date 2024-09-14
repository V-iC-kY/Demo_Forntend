import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Push } from '@ionic-native/push/ngx';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { SettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, CommonModule, ReactiveFormsModule, HttpClientModule, IonicModule.forRoot()],
  declarations: [AppComponent, LoginComponent, HomeComponent, SignUpComponent, ChatPageComponent, SettingsComponent, UserProfileComponent],
  providers: [FirebaseX, HttpClient, Push, IonicRouteStrategy, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }