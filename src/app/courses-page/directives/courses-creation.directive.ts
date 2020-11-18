import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCoursesCreation]'
})
export class CoursesCreationDirective implements OnInit {
  @Input('appCoursesCreation') creationDate: Date;
  
  constructor(private el: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.renderStyle();
  }

  renderStyle(): void {
    const msInDay = 86400000;
    const creation = this.creationDate.getTime();
    const now = Date.now();
    const diff = Math.floor((now - creation)/msInDay);

    if (diff >= 0 && diff <= 14) {
      this.render.setStyle(this.el.nativeElement, 'borderColor', '#67a300');
    }

    if (diff < 0) {
      this.render.setStyle(this.el.nativeElement, 'borderColor', '#009ecc');
    }
  }
}
