import { TestBed } from '@angular/core/testing';
import { ScrollSpyService } from './scroll-spy.service';

describe('ScrollSpyService', () => {
  let service: ScrollSpyService;

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
});
