import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let fixture: ComponentFixture<SkillsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SkillsComponent] }).compileComponents();
    fixture = TestBed.createComponent(SkillsComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render 5 skill groups', () => {
    expect(compiled.querySelectorAll('.skill-group').length).toBe(5);
  });

  it('should render "Backend" group', () => {
    expect(compiled.textContent).toContain('Backend');
  });

  it('should render C# skill tag', () => {
    expect(compiled.textContent).toContain('C#');
  });
});
