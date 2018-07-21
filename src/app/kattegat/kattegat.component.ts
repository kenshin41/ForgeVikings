import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'vikings-kattegat',
  templateUrl: './kattegat.component.html'
})
export class KattegatComponent {
  
  showListSword: boolean = false;
  swordTypes = [
    {value: 'katana'},
    {value: 'cuchillo'},
    {value: 'machete' },
    {value: 'shuriken'},
    {value: 'daga'},
    {value: 'gladius'},
    {value: 'mandoble'},
    {value: 'alabarda'},
    {value: 'flechas'},
    {value: 'sica'},
    {value: 'puño de acero'},
    {value: 'navaja'},
    {value: 'falcata'},
    {value: 'lanza'},
    {value: 'claymore'},
    {value: 'puñal'},
    {value: 'espada'},
    {value: 'alfanje'},
    {value: 'espadin'},
    {value: 'bracamante'},
    {value: 'florete'},
    {value: 'cuchillo corvo'},
    {value: 'almadana'},
    {value: 'estoque'},
  ];
}
