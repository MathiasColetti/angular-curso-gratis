import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from "./user/user.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users/list', component: UsersComponent},
  {path: 'user/:username', component: UserComponent},
];
