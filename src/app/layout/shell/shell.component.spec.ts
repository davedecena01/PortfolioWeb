import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let fixture: ComponentFixture<ShellComponent>;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ShellComponent] }).compileComponents();
    fixture = TestBed.createComponent(ShellComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render app-header', () => {
    expect(fixture.nativeElement.querySelector('app-header')).toBeTruthy();
  });
});
