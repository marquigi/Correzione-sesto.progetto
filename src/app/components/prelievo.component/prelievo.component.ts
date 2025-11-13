import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-prelievo.component',
  imports: [ReactiveFormsModule],
  templateUrl: './prelievo.component.html',
  styleUrl: './prelievo.component.css',
})
export class PrelievoComponent {

  frm = new FormGroup({
    importo: new FormControl(''),
  })


  preleva() { }

}
