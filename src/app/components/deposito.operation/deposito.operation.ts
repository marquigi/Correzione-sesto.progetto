import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BancaService } from '../../services/banca.service';


@Component({
  selector: 'app-deposito.operation',
  imports: [ReactiveFormsModule],
  templateUrl: './deposito.operation.html',
  styleUrl: './deposito.operation.css',
})
export class DepositoOperation {

  // NOTA
  private readonly ar = inject(ActivatedRoute);
  // NOTA
  mode?: 'cash' | 'voucher';

  ngOnInit() {
    // NOTA
    this.ar.data.subscribe(d => {
      // NOTA
      this.mode = d['modalita'];
    })
  }



  alert_error?: string;
  success = false;
  private bancaService = inject(BancaService);
  private router = inject(Router);

  frm = new FormGroup({
    // NOTA
    importo: new FormControl('', { nonNullable: true }),
  })

  deposita() {
    // NOTA
    // Prova a eseguire il metodo deposita del service...
    try {
      this.bancaService.deposita(this.frm.get('importo')!.value);
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
