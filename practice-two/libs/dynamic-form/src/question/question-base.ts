import { ValidatorFn } from "@angular/forms";

export class QuestionBase<T> {
  value: T;
  key: string;
  label: string;
  validator: ValidatorFn[]
  placeholder: string;
  order: number;
  controlType: string;
 
  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      validator?: ValidatorFn[],
      placeholder?: string,
      order?: number,
      controlType?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.validator = options.validator || [];
    this.placeholder = options.placeholder || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
  }
}