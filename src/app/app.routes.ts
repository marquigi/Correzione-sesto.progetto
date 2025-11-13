import { Routes } from '@angular/router';
import { EstrattoContoComponent } from './components/estratto-conto.component/estratto-conto.component';
import { PrelievoComponent } from './components/prelievo.component/prelievo.component';
import { DepositoComponent } from './components/deposito.component/deposito.component';

export const routes: Routes = [
    { path: '', redirectTo: 'estratto', pathMatch: 'full' },
    { path: 'estratto', component: EstrattoContoComponent },
    { path: 'prelievo', component: PrelievoComponent },
    { path: 'deposito', component: DepositoComponent },
];
