import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'checkbox',
    template: `
    <div [formGroup]="form" class="form-group" [ngSwitch]="control.controlType"  
        [ngClass]="form.value[control.key]==''?'empty':'has-value'">

        <input [formControlName]="control.key" class="form-control"
                [id]="control.key" [type]="control.type">

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