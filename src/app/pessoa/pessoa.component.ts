import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  standalone: true,
  imports: [],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css'
})
export class PessoaComponent {
  nome: String | null = ' ';

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.nome = params.get('nome');
    });
  }

}
