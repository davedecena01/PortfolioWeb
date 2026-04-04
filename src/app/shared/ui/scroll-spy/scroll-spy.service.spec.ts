import { TestBed } from '@angular/core/testing';
import { ScrollSpyService } from './scroll-spy.service';

describe('ScrollSpyService', () => {
  let service: ScrollSpyService;

  beforeAll(() => {
    if (typeof (globalThis as { IntersectionObserver: unknown }).IntersectionObserver === 'undefined') {
      (globalThis as { IntersectionObserver: unknown }).IntersectionObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
        readonly root = null;
        readonly rootMargin = '';
        readonly thresholds: ReadonlyArray<number> = [];
        takeRecords(): IntersectionObserverEntry[] { return []; }
      };
    }
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollSpyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should default active section to "home"', () => new Promise<void>((resolve) => {
    service.activeSection$.subscribe(section => {
      expect(section).toBe('home');
      resolve();
    });
  }));

  it('scrollTo should not throw if element does not exist', () => {
    expect(() => service.scrollTo('nonexistent')).not.toThrow();
  });

  it('ngOnDestroy should disconnect observer without throwing', () => {
    expect(() => service.ngOnDestroy()).not.toThrow();
  });

  it('init should not throw when called with non-existent section IDs', () => {
    expect(() => service.init(['nonexistent-a', 'nonexistent-b'])).not.toThrow();
  });

  it('calling init twice should not throw', () => {
    expect(() => {
      service.init(['a']);
      service.init(['b']);
    }).not.toThrow();
  });
});
