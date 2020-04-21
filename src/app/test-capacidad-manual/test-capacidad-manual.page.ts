import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-capacidad-manual',
  templateUrl: './test-capacidad-manual.page.html',
  styleUrls: ['./test-capacidad-manual.page.scss'],
})
export class TestCapacidadManualPage implements OnInit {
  title: string;
  content: string;
  option: number;

  constructor() { }

  ngOnInit() {
    this.test(0);
  }

  test(option) {
    this.option = option;
    switch (option) {
      case 0:
            {
              this.title = 'Tu nivel es BÁSICO';
              this.content = 'Felicidades por empezar un nuevo estilo de vida con hábitos saludables, mucho esfuerzo para alcanzar el siguiente nivel.';
            }
        break;

      case 1:
        {
          this.title = 'Tu nivel es PRINCIPIANTE';
          this.content = 'Sigue esforzándote y continua esta carrera con mucha disciplina en tu plan, estás a un nivel de tener grandes cambios';
        }
        break;

      case 2:
        {
          this.title = 'Tu nivel es INTERMEDIO';
          this.content = 'Excelente estás a mitad de la carrera, un poco más de esfuerzo y dedicación para llegar a un nivel envidiable.';
        }
        break;

      case 3:
        {
          this.title = 'Tu nivel es AVANZADO';
          this.content = 'No estás aquí por casualidad, muchas sesiones de entreno duro has pasado, ahora enfocate en dar tu máximo, solo así llegarás al siguiente nivel.';
        }
        break;

        case 4:
        {
          this.title = 'Tu nivel es PRO';
          this.content = 'Estás en una minoría privilegiada, que llevan el fitness cómo estilo de vida, admiración, aplausos y solo yendo al límite podrás alcanzar un nivel insuperable.';
        }
        break;

      default:
        break;
    }
  }

}
