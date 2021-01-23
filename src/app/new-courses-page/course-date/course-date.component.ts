import { 
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import { 
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS
} from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export const SELECT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CourseDateComponent),
  multi: true,
};

export const SELECT_CONTROL_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CourseDateComponent),
  multi: true,
};

@Component({
  selector: 'app-course-date',
  templateUrl: './course-date.component.html',
  styleUrls: ['./course-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SELECT_CONTROL_VALUE_ACCESSOR, SELECT_CONTROL_VALIDATORS],
})
export class CourseDateComponent implements ControlValueAccessor, Validators, OnInit, OnDestroy {
  @Input() set showErrors(value: boolean) {
    this._showErrors = value;
    if (value) {
      this._markFormControlAsTouched(this.formControl);
    }
  }
  @Input() errorMsg: string;
  
  get showErrors() {
    return this._showErrors;
  }

  formControl: FormControl;
  validationMessage: string;

  private _showErrors: boolean = false;
  private _destroy$: Subject<void> = new Subject();
  private _onTouched: () => void = () => {};

  ngOnInit(): void {
    this.formControl = new FormControl('', [Validators.required]);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  writeValue(val): void {
    if (!val) {
      return;
    }
    
    this.formControl.setValue(val.substring(0, 10), { emitEvent: false, onlySelf: true });
  }

  registerOnChange(fn: any): void {
    this.formControl.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  validate(c: AbstractControl): ValidationErrors | null {
    return this.formControl.valid ? null : { invalidForm: { valid: false, message: 'Required field' } };
  }

  private _markFormControlAsTouched(formControl: FormControl) {
    formControl.markAsTouched();
  }
}
