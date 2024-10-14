import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users: string[] = ["Mathias", "Esther", "Dante"];

}
