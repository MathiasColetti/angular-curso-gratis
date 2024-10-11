import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {NgIf} from "@angular/common";
import { BaseUiComponent } from './base-ui/base-ui.component';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent, FooterComponent, NgIf, BaseUiComponent, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
