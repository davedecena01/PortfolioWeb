import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService implements OnDestroy {
  activeSection$ = new BehaviorSubject<string>('home');
  private observer: IntersectionObserver | null = null;

  init(sectionIds: string[]): void {
    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          this.activeSection$.next(visible[0].target.id);
        }
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
