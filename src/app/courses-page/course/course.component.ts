import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgBodyScrollLockService } from 'ng-body-scroll-lock';

import { Course } from '@app/models';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
  @Input() course: Course;

  @Output() delete = new EventEmitter<Course>();
  @ViewChild('delete', {static: true}) VerticalMenuRef: ElementRef;
  
  isOpen = false;

  constructor(private bodyScrollLock: NgBodyScrollLockService) {}

  onDelete(): void {    
    this.delete.emit(this.course);
    this.bodyScrollLock.EnableBodyScroll(this.VerticalMenuRef.nativeElement);
  }

  onCancel(): void {
    this.isOpen = false;
    this.bodyScrollLock.EnableBodyScroll(this.VerticalMenuRef.nativeElement);
  }

  onOpenOverlay() {
    this.isOpen = true;
    this.bodyScrollLock.DisableBodyScroll(this.VerticalMenuRef.nativeElement);
  }
}
