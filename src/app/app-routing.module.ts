import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        // component: ExampleComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'home',
          },
          {
            path: 'home',
            // loadChildren: () => import('../app/home/home.module').then((m) => m.HomePageModule),
          },
          {
            path: 'signup',
            // component:() => import('../app/home/home.module').then((m) => m.HomePageModule),
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }