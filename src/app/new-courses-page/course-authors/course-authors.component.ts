import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator, FormControl, AbstractControl, ValidationErrors, FormArray, Validators, FormBuilder, FormGroup } from '@angular/forms';

import { Author } from '@app/models';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export const SELECT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CourseAuthorsComponent),
  multi: true,
};

export const SELECT_CONTROL_VALIDATORS: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => CourseAuthorsComponent),
  multi: true,
};

@Component({
  selector: 'app-course-authors',
  templateUrl: './course-authors.component.html',
  styleUrls: ['./course-authors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SELECT_CONTROL_VALUE_ACCESSOR, SELECT_CONTROL_VALIDATORS],
})
export class CourseAuthorsComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
  @Input() set authors(authors: Author[]) {
    this._authors = authors ? [...authors, ...this._authors] : [...this._authors];
  }

  get authors() {
    return this._authors;
  }

  @Input() set showErrors(value: boolean) {
    this._showErrors = value;
    if (value) {
      this._sendCheckedAuthors();
      this._markFormControlsAsTouched(this.formArray);
    }
  }
  @Input() errorMsg: string;

  @Output() checkedAuthors = new EventEmitter<Partial<Author[]>>(); 

  get formArray() {
    return this.formGroup.get('formArray') as FormArray;
  }

  get firstSelected(): boolean {
    return this.formArray.controls.length ? false : true;
  };

  get authorsToShow(): Author[] {
    return this.authors 
    ? this.authors.filter(author => (this.formArray.controls.every(arrControl => (arrControl.value !== author.name))))
    : [];
  }

  selectedList: Author[] = [];
  formGroup: FormGroup;

  private _showErrors: boolean = false;
  private _authors: Author[] = [];
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

    this._authors = [...values];
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

  onAuthorDelete(index: number, ): void {
    this.formArray.removeAt(index);
  }

  onSelectOption(authorName: string) {
    this.formArray.push(this.fb.control({value: authorName, disabled: true}));
  }

  private _sendCheckedAuthors() {
    const selectedAuthorsData = this.formArray.value.map(authorName => {
      return this.authors.find(author => author.name === authorName);
    })
    this.checkedAuthors.emit(selectedAuthorsData);
  }

  private _markFormControlsAsTouched(formArray: FormArray) {
    formArray.controls.forEach((control: FormControl) => { 
      control.markAsTouched();
    });
  }
}
