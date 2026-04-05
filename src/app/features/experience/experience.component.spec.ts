import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let fixture: ComponentFixture<ExperienceComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ExperienceComponent] }).compileComponents();
    fixture = TestBed.createComponent(ExperienceComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render 8 timeline items', () => {
    expect(compiled.querySelectorAll('.timeline-item').length).toBe(8);
  });

  it('should mark 3Cloud as the current role', () => {
    const currentItem = compiled.querySelector('.timeline-item.current');
    expect(currentItem?.textContent).toContain('3Cloud');
  });

  it('should render impact bullets for current role', () => {
    expect(compiled.querySelectorAll('.timeline-bullets li').length).toBeGreaterThan(0);
  });
});
