import { Routes } from '@angular/router';
import { EstrattoContoComponent } from './components/estratto-conto.component/estratto-conto.component';
import { PrelievoComponent } from './components/prelievo.component/prelievo.component';
import { DepositoComponent } from './components/deposito.component/deposito.component';
import { BancaService } from './services/banca.service';
import { CurrencyPipe } from '@angular/common';
import { DepositoScelta } from './components/deposito-scelta/deposito-scelta';
import { DepositoOperation } from './components/deposito.operation/deposito.operation';

export const routes: Routes = [
    { path: '', redirectTo: 'estratto', pathMatch: 'full' },
    { path: 'estratto', component: EstrattoContoComponent },
    { path: 'prelievo', component: PrelievoComponent },
    {
        path: 'deposito', component: DepositoComponent,
        children: [
            { path: '', component: DepositoScelta },
            // NOTA
            { path: 'contanti', component: DepositoOperation, data: { modalita: 'cash' } },
            { path: 'assegni', component: DepositoOperation, data: { modalita: 'voucher' } }

        ]
    },
];
