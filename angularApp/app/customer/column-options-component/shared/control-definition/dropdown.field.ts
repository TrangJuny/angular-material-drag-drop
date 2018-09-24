import { ControlBase } from './base.field';

export class DropdownColumnOption extends ControlBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: any = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
