import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BancaService } from '../../services/banca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prelievo.component',
  imports: [ReactiveFormsModule],
  templateUrl: './prelievo.component.html',
  styleUrl: './prelievo.component.css',
})
export class PrelievoComponent {

  alert_error?: string;
  success = false;
  private bancaService = inject(BancaService);
  private router = inject(Router);

  frm = new FormGroup({
    // NOTA
    importo: new FormControl('', { nonNullable: true }),
  })


  preleva() {
    // NOTA
    // Prova a eseguire il metodo preleva del service...
    try {
      this.bancaService.preleva(this.frm.get('importo')!.value);
      this.success = true;
      setTimeout(() => {
        this.router.navigateByUrl('/');
      }, 2000);
    }
    // NOTA
    // Qualsiasi errore esca fuori, lo prendo
    catch (e: any) {
      this.alert_error = e.message;
    }
  }

}
