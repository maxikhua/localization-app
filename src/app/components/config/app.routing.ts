import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {NotfoundComponent} from '../notfound/notfound.component';
import {ContactComponent} from '../contact/contact.component';
import {ProfileComponent} from '../profile/profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'not-found', component: NotfoundComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'}
];

export const routeConfig = RouterModule.forRoot(routes);
