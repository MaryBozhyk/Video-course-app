import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCoursesCreation]'
})
export class CoursesCreationDirective implements OnInit {
  @Input('appCoursesCreation') date: string;
  
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.renderStyle();
  }

  renderStyle(): void {
    const msInDay = 86400000;
    const creation = new Date(this.date).getTime();
    const now = Date.now();
    const diff = Math.floor((now - creation)/msInDay);
    const isFreshCourse = diff >= 0 && diff <= 14;
    const isUpcoming = diff < 0;

    if (isFreshCourse) {
      this.render.addClass(this.el.nativeElement, 'is-fresh');
    }

    if (isUpcoming) {
      this.render.addClass(this.el.nativeElement, 'is-upcomming');
    }
  }
}
