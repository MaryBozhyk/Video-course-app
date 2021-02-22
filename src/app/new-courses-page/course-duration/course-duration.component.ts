import { 
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input
} from '@angular/core';
import {
  Validators,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  AbstractControl,
  ValidationErrors,
  NG_VALIDATORS,
  Validator,
  FormControl
 } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';

export const SELECT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CourseDurationComponent),
  multi: true,
};

export const SELECT_CONTROL_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CourseDurationComponent),
  multi: true,
};

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SELECT_CONTROL_VALUE_ACCESSOR, SELECT_CONTROL_VALIDATORS],
})
export class CourseDurationComponent implements ControlValueAccessor, Validator {  
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

  constructor(private translateService: TranslateService) {}
  
  ngOnInit(): void {
    this.formControl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  }
  
  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
  
  writeValue(val): void {
    if (!val) {
      return;
    }
  
    this.formControl.setValue(val, { emitEvent: false, onlySelf: true });
  }
  
  registerOnChange(fn: any): void {
    this.formControl.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(fn);
  }
  
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  
  validate(c: AbstractControl): ValidationErrors | null {
    return this.formControl.valid ? null : { invalidForm: { valid: false, message: this.translateService.instant('PAGES.NEW_COURSES_PAGE.REQUIRED_FIELD') } };
  }
  
  private _markFormControlAsTouched(formControl: FormControl) {
    formControl.markAsTouched();
  }
}
