import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let fixture: ComponentFixture<AboutComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AboutComponent] }).compileComponents();
    fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render section title "About Me"', () => {
    expect(compiled.textContent).toContain('About Me');
  });

  it('should render 4 stat highlight cards', () => {
    expect(compiled.querySelectorAll('.highlight-card').length).toBe(4);
  });

  it('should show 12 years of experience stat', () => {
    expect(compiled.textContent).toContain('12');
  });
});
