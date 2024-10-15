import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from "./user/user.component";
import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoaComponent } from './pessoa/pessoa.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users/list', component: UsersComponent },
  { path: 'user/:username', component: UserComponent },
  { path: 'pessoas', component: PessoasComponent },
  { path: 'pessoa/:nome', component: PessoaComponent }
];
