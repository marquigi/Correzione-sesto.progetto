import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BancaService } from '../../services/banca.service';

@Component({
  selector: 'app-prelievo.component',
  imports: [ReactiveFormsModule],
  templateUrl: './prelievo.component.html',
  styleUrl: './prelievo.component.css',
})
export class PrelievoComponent {

  private bancaService = inject(BancaService)

  frm = new FormGroup({
    // NOTA
    importo: new FormControl('', { nonNullable: true }),
  })


  preleva() {
    // NOTA
    // Prova a eseguire il metodo preleva del service...
    try {
      this.bancaService.preleva(this.frm.get('importo')!.value);
    }
    // NOTA
    // Qualsiasi errore esca fuori, lo prendo
    catch (e: any) {
      alert(e.message)
    }
  }

}
