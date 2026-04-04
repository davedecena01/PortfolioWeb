import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollSpyService implements OnDestroy {
  activeSection$ = new BehaviorSubject<string>('home');
  private observer: IntersectionObserver | null = null;
  private visibleSections = new Set<string>();

  init(sectionIds: string[]): void {
    this.observer?.disconnect();
    this.visibleSections.clear();

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) this.visibleSections.add(e.target.id);
          else this.visibleSections.delete(e.target.id);
        });

        const topmost = [...this.visibleSections].sort(
          (a, b) =>
            (document.getElementById(a)?.getBoundingClientRect().top ?? 0) -
            (document.getElementById(b)?.getBoundingClientRect().top ?? 0)
        )[0];

        if (topmost) this.activeSection$.next(topmost);
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
