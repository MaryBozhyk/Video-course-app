import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import { 
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { Option, Course, CourseErrors } from '@app/models';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCourseFormComponent implements OnChanges, OnInit {
  @Input() course: Course;
  @Input() authorsList: Option[];
  @Input() loadCoursesError: Error | string;

  @Output() newCourse = new EventEmitter<Partial<Course>>();
  @Output() cancel = new EventEmitter<void>();

  first: boolean = true;
  showFormErrors: boolean = false;
  courseTitle: string = this.translateService.instant('PAGES.NEW_COURSES_PAGE.NEW_COURSE');
  courseForm: FormGroup;
  selectedAuthors: Option[];
  validationMessage: CourseErrors = {
    name: '',
    description: '',
    date: '',
    length: '',
    authors: ''
  };

  get name(): AbstractControl {
    return this.courseForm.get('name');
  }

  get description(): AbstractControl {
    return this.courseForm.get('description');
  }

  get date(): AbstractControl {
    return this.courseForm.get('date');
  }

  get length(): AbstractControl {
    return this.courseForm.get('length');
  }

  get authors() {
    return this.courseForm.get('authors') as FormArray;
  }

  private validationMessagesMap = {
    name: {
      required: this.translateService.instant('PAGES.NEW_COURSES_PAGE.TITLE_REQUIRED_MESSAGE'),
      maxlength: this.translateService.instant('PAGES.NEW_COURSES_PAGE.TITLE_MAX_LENGTH_MESSAGE')
    },
    description: {
      required: this.translateService.instant('PAGES.NEW_COURSES_PAGE.DESCRIPTION_REQUIRED_MESSAGE'),
      maxlength: this.translateService.instant('PAGES.NEW_COURSES_PAGE.DESCRIPTION_MAX_LENGTH_MESSAGE')
    },
    date: {
      required: this.translateService.instant('PAGES.NEW_COURSES_PAGE.DATE_REQUIRED_MESSAGE'),
      pattern: this.translateService.instant('PAGES.NEW_COURSES_PAGE.DATE_PATTERN_MESSAGE')
    },
    length: {
      required: this.translateService.instant('PAGES.NEW_COURSES_PAGE.DURATION_REQUIRED_MESSAGE'),    
      pattern: this.translateService.instant('PAGES.NEW_COURSES_PAGE.DURATION_PATTERN_MESSAGE')
    },
    authors: {
      required: this.translateService.instant('PAGES.NEW_COURSES_PAGE.AUTHORS_REQUIRED_MESSAGE')
    }
  };

  constructor(
    private fb: FormBuilder,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnChanges(): void {
    if (this.course && this.first) {
      this.name.setValue(this.course.name);
      this.description.setValue(this.course.description);
      this.date.setValue(this.course.date);
      this.length.setValue(this.course.length);
      this.authors.setValue(this.course.authors);
      this.courseTitle = this.translateService.instant('PAGES.NEW_COURSES_PAGE.EDIT_COURSE');
      this.first = false;
    }
  }

  onBlur(event: FocusEvent) {
    if ((event.target as Element).id === 'name') {
      this.setValidationMessage(this.name, 'name');
    } else if ((event.target as Element).id === 'description') {
      this.setValidationMessage(this.description, 'description');
    }
  }

  onClick(controlName: string) {
    if (controlName === 'date') {
      this.setValidationMessage(this.date, 'date');
    } else if (controlName === 'length') {
      this.setValidationMessage(this.length, 'length');
    } else if (controlName === 'authors') {
      this.setValidationMessage(this.authors, 'authors');
    }
  }

  onReceiveCheckedAuthors(authors: Option[]) {
    if (authors && this.courseForm.valid) {
      this.authors.setValue([]);
      this.newCourse.emit(
        this.course 
          ? {...this.courseForm.value, id: this.course.id, authors: authors}
          : {...this.courseForm.value, authors: authors}
        )
    }
  }

  onSave(): void {
    this.showFormErrors = true;
  }

  onCancel(): void {
    this.cancel.emit();
  }

  setValidationMessage(c: AbstractControl, controlName: string) {
    for (const field in this.validationMessage) {
      if (!this[field].errors) {
        this.validationMessage[field] = '';
      }
    }

    if (c.errors) {
      this.validationMessage[controlName] = Object.keys(c.errors)
        .map(key => this.validationMessagesMap[controlName][key])
        .join(' ') || this.validationMessagesMap[controlName]['required'];
    }
  }

  private buildForm(): void {
    this.courseForm = this.fb.group({
      name: ['', {validators: [Validators.required, Validators.maxLength(50)], updateOn: 'blur'}],
      description: ['', {validators: [Validators.required, Validators.maxLength(500)], updateOn: 'blur'}],
      date: new FormControl(),
      length: new FormControl(),
      authors: new FormControl(),
    });
  }
}
