import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let fixture: ComponentFixture<ProjectsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProjectsComponent] }).compileComponents();
    fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render 3 project cards', () => {
    expect(compiled.querySelectorAll('.project-card').length).toBe(3);
  });

  it('should show "Where To Stay in Japan?" project', () => {
    expect(compiled.textContent).toContain('Where To Stay in Japan?');
  });

  it('should show status badge for each card', () => {
    expect(compiled.querySelectorAll('.project-status').length).toBe(3);
  });
});
