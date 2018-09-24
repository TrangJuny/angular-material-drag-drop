import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

import { ControlBase }     from '../control-definition/base.field';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html'
})
export class AppControlComponent {
  @Input() control: ControlBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.control.key].valid; }
}