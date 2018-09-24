import { ControlBase } from './base.field';

export class TextboxColumnOption extends ControlBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: any = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
