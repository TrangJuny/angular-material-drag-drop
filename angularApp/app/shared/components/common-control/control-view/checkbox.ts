import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-checkbox',
    template: `
            <div [formGroup]="form" class="form-group form-check" >
                  <input type="checkbox" class="form-check-input" id="headQuater"  formControlName="control.key">
                  <label class="form-check-label" for="headQuater">Check me out</label>
            </div>
    `
})
export class CheckboxComponent {
    @Input() control:any = {};
    @Input() form:FormGroup;
}