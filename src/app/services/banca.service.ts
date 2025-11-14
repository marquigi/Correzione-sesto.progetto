import { CurrencyPipe } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BancaService {

  // NOTA
  private _saldo = 7000;

  private curPipe = inject(CurrencyPipe);

  constructor() { }

  // Getter typescript: definisce la proprietà "saldo" che è
  // accessibile esclusivamente attraverso il suo getter.
  // Il Getter restituisce il valore della private property _saldo
  get saldo() {
    // NOTA
    return `${this.curPipe.transform(this._saldo, 'EUR', 'symbol', '.2-2')}`;
  }

  // Per dimostrare il controllo degli errori,
  // il service ha come parametro il value dell'input type text e non
  // il number già verificato, validato, ecc.
  preleva(s: string) {
    if (s.length === 0) {
      // NOTA
      throw new Error("Inserire l'importo del prelievo")
    }

    // NOTA
    const v = parseFloat(s);
    if (isNaN(v)) {
      throw new Error('Importo non valido')
    }

    // NOTA
    if (v > this._saldo) {
      throw new Error(`Importo non disponibile, valore massimo prelevabile ${this._saldo}`)
    }

    this._saldo -= v;

  }
}
