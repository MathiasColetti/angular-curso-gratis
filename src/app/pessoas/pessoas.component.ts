import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pessoas.component.html',
  styleUrl: './pessoas.component.css'
})
export class PessoasComponent {

  pessoas: String[] = ['Mathias', "Rebeca", "Esther", "Isabela", "Ana Julia"];

}
