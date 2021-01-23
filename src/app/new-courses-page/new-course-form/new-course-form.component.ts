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
  courseTitle: string = "New course";
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
      required: '*Please enter title',
      maxlength: '*Max length 50 symbols'
    },
    description: {
      required: '*Please enter description',      
      maxlength: '*Max length 500 symbols'
    },
    date: {
      required: '*Please enter date',      
      pattern: '*Doesn\'t feet pattern dd/mm/yyyy'
    },
    length: {
      required: '*Please enter duration',      
      pattern: '*Only digits can be used'
    },
    authors: {
      required: '*Please enter authors'
    }
  };

  constructor(
    private fb: FormBuilder,
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
      this.courseTitle = "Edit course";
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
