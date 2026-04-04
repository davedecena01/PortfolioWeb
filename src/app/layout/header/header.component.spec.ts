import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let compiled: HTMLElement;

  beforeAll(() => {
    if (typeof (globalThis as any).IntersectionObserver === 'undefined') {
      (globalThis as any).IntersectionObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
      };
    }
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HeaderComponent] }).compileComponents();
    fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render the JD logo badge', () => {
    expect(compiled.querySelector('.logo')?.textContent?.trim()).toBe('JD');
  });

  it('should render 8 nav links', () => {
    expect(compiled.querySelectorAll('.nav-links a').length).toBe(8);
  });

  it('should mark "home" as active by default', () => {
    const active = compiled.querySelector('.nav-links a.active');
    expect(active?.getAttribute('data-section')).toBe('home');
  });
});
