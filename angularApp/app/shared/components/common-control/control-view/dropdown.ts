import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'checkbox',
    template: `
    <div [formGroup]="form" class="form-group" [ngSwitch]="control.controlType"  
            [ngClass]="form.value[control.key]==''?'empty':'has-value'">

      <select [id]="control.key" [formControlName]="control.key" class="form-control">
            <option *ngFor="let opt of control.options" [value]="opt.key">{{opt.value}}</option>
      </select> 

            <label [attr.for]="control.key" class="control-label">{{control.label}}</label>

            <app-error-validate [control]="controlForm" 
            *ngIf="controlForm.touched || controlForm.dirty || form.submit"></app-error-validate>
        
    </div>
    `
})
export class CheckboxComponent {
    @Input() control: any = {};
    @Input() form: FormGroup;
    
    get controlForm() { 
        return this.form.controls[this.control.key]; 
    }
}