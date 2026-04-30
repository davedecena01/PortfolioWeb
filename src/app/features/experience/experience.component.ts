import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';
import { EXPERIENCE_ITEMS } from '../../core/constants/experience.constants';
import { ExperienceItem } from '../../core/models/models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
  readonly items: ExperienceItem[] = EXPERIENCE_ITEMS;

  @ViewChild('trackFill') trackFillRef!: ElementRef<HTMLElement>;
  @ViewChild('timeline') timelineRef!: ElementRef<HTMLElement>;

  private observer: IntersectionObserver | null = null;
  private animated = false;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !this.animated) {
          this.animated = true;
          this.animateTimeline();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (this.timelineRef) {
      this.observer.observe(this.timelineRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animateTimeline(): void {
    const items = this.timelineRef.nativeElement.querySelectorAll<HTMLElement>('.timeline-item');
    const fill = this.trackFillRef?.nativeElement;

    items.forEach((item, i) => {
      setTimeout(() => {
        item.classList.add('revealed');
        if (fill) {
          fill.style.height = ((i + 1) / items.length * 100) + '%';
        }
      }, i * 180);
    });
  }
}
