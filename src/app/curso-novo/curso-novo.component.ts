import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from '../cursos/curso.model';
import { CursoService } from '../cursos/curso.service';

@Component({
  selector: 'app-curso-novo',
  templateUrl: './curso-novo.component.html',
  styleUrls: ['./curso-novo.component.css']
})

export class CursoNovoComponent{

  curso: Curso = new Curso();

  constructor(private readonly cursoService: CursoService,
              private readonly router: Router) { }
  
  salvar() {
     this.cursoService.createCurso(this.curso).subscribe(
      dado => {
                console.log(dado)
                this.cursoService.openSnackBar('Curso criado com sucesso !');
                this.router.navigate(['/cursos']);
              }
    )
  }

  cancelar() {
      this.router.navigate(['/cursos']);
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.salvar();
    }
  }
}