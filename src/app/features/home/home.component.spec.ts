import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [HomeComponent] }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render full name', () => {
    expect(compiled.textContent).toContain('John Dave Decena');
  });

  it('should render professional title', () => {
    expect(compiled.textContent).toContain('Senior Software Engineer');
  });

  it('should render Download Resume button', () => {
    expect(compiled.textContent).toContain('Download Resume');
  });

  it('should render profile image', () => {
    expect(compiled.querySelector('img')?.getAttribute('alt')).toContain('John Dave Decena');
  });
});
