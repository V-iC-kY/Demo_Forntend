import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Push } from '@ionic-native/push/ngx';


@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, IonicModule.forRoot()],
  declarations: [AppComponent],
  providers: [FirebaseX, HttpClient,Push],
  bootstrap: [AppComponent],
})
export class AppModule { }