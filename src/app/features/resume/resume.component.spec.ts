import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeComponent } from './resume.component';

describe('ResumeComponent', () => {
  let fixture: ComponentFixture<ResumeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ResumeComponent] }).compileComponents();
    fixture = TestBed.createComponent(ResumeComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render Download Resume button', () => {
    expect(compiled.textContent).toContain('Download Resume');
  });

  it('should render LinkedIn link', () => {
    expect(compiled.textContent).toContain('LinkedIn');
  });

  it('should render GitHub link', () => {
    expect(compiled.textContent).toContain('GitHub');
  });
});
