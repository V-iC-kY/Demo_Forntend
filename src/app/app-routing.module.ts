import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { SettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: SignUpComponent, },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
      { path: 'chatpage', component: ChatPageComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'profile', component: UserProfileComponent },

    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }