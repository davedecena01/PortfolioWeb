import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-wrapper',
  standalone: true,
  templateUrl: './section-wrapper.component.html',
  styleUrls: ['./section-wrapper.component.scss'],
})
export class SectionWrapperComponent implements OnInit, OnDestroy {
  @Input({ required: true }) sectionId!: string;

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const inner = this.el.nativeElement.querySelector('.section-inner') as HTMLElement;
    if (!inner) return;

    inner.classList.add('section-animate');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inner.classList.add('section-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    this.observer.observe(inner);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
