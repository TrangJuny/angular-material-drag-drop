import { Component, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlBase } from '../shared/control-definition/base.field';
@Component({
  selector: 'app-column',
  templateUrl: './column-options-row.component.html',
  styleUrls: ['./column-options-row.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColumnOptionsRowComponent {
  @Input() column: ControlBase<any>;
  @Input() form: FormGroup;
  @Input() index: number;
  @Output() deleteRow: EventEmitter<any> = new EventEmitter<any>();
  get isValid() {
    return this.form.controls[this.column.key].valid;
  }
  delete(key: any, i: any) {
    this.deleteRow.emit([key, i]);
  }
  compareFn(a: any, b: any) {
    return a && b && a.key == b.key;
  }
}
