import { Component } from '@angular/core';

@Component({
  selector: 'app-actualizarlicor',
  templateUrl: './actualizarlicor.component.html',
  styleUrl: './actualizarlicor.component.css'
})
export class ActualizarlicorComponent {

  modalAbierto: boolean = false;

  cerrarModal(): void {
    this.modalAbierto = false;
  }

}
