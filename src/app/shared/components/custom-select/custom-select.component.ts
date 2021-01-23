import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  NG_VALIDATORS,
  Validator,
  FormControl,
  ValidationErrors,
  FormArray,
  Validators,
  FormBuilder,
  FormGroup
} from '@angular/forms';

import { Option } from '@app/models';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export const SELECT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomSelectComponent),
  multi: true,
};

export const SELECT_CONTROL_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CustomSelectComponent),
  multi: true,
};

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SELECT_CONTROL_VALUE_ACCESSOR, SELECT_CONTROL_VALIDATORS],
})
export class CustomSelectComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
  @Input() set options(options: Option[]) {
    this._options = options ? [...options, ...this._options] : [...this._options];
  }

  get options() {
    return this._options;
  }

  @Input() set showErrors(value: boolean) {
    this._showErrors = value;
    if (value) {
      this._sendCheckedOptions();
      this._markFormControlsAsTouched(this.formArray);
    }
  }
  @Input() errorMsg: string;
  @Input() label: string;

  @Output() checkedOptions = new EventEmitter<Partial<Option[]>>(); 

  get formArray() {
    return this.formGroup.get('formArray') as FormArray;
  }

  get firstSelected(): boolean {
    return this.formArray.controls.length ? false : true;
  };

  get optionsToShow(): Option[] {
    return this.options 
    ? this.options.filter(option => (this.formArray.controls.every(arrControl => (arrControl.value !== option.name))))
    : [];
  }

  selectedList: Option[] = [];
  formGroup: FormGroup;

  private _showErrors: boolean = false;
  private _options: Option[] = [];
  private _destroy$: Subject<void> = new Subject();
  private _onTouched: () => void = () => {};

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      formArray: new FormArray([], [Validators.required])
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  writeValue(values): void {
    if (!values?.length) {
      return;
    }

    this._options = [...values];
    values.forEach(value => {
      this.formArray.push(this.fb.control({value: value.name, disabled: true}));
    });
  }

  registerOnChange(fn: (value: any) => void): void {
    this.formArray.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  validate(c: FormArray): ValidationErrors | null {
    return c.value?.length ? null : { invalidForm: { valid: false, message: 'Required field' } };
  }

  onOptionDelete(index: number, ): void {
    this.formArray.removeAt(index);
  }

  onSelectOption(optionName: string) {
    this.formArray.push(this.fb.control({value: optionName, disabled: true}));
  }

  private _sendCheckedOptions() {
    const selectedOptionsData = this.formArray.value.map(optionName => {
      return this.options.find(option => option.name === optionName);
    })
    this.checkedOptions.emit(selectedOptionsData);
  }

  private _markFormControlsAsTouched(formArray: FormArray) {
    formArray.controls.forEach((control: FormControl) => { 
      control.markAsTouched();
    });
  }
}
