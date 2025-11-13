import { Component, inject } from '@angular/core';
import { BancaService } from '../../services/banca.service';

@Component({
  selector: 'app-estratto-conto.component',
  imports: [],
  templateUrl: './estratto-conto.component.html',
  styleUrl: './estratto-conto.component.css',
})
export class EstrattoContoComponent {

  // NOTA
  public bancaService = inject(BancaService);

}
