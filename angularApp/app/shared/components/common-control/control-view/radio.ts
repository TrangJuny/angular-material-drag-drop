import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'radio',
    template: `
      <div [formGroup]="form">
            <div class="form-check" *ngFor="let opt of control.options">
                  <input class="form-check-input" type="radio" [value]="control.key" >
                  <label class="form-check-label"  for="control.key"> 
                  {{opt.value}}
                  </label>
            </div>
      </div> 
    `
})
export class RadioComponent {
    @Input() control:any = {};
    @Input() form:FormGroup;
    
    get controlForm() { 
        return this.form.controls[this.control.key]; 
    }
}