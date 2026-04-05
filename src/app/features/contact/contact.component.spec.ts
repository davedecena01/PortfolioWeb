import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ContactComponent] }).compileComponents();
    fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render 4 contact items', () => {
    expect(compiled.querySelectorAll('.contact-item').length).toBe(4);
  });

  it('should show Yahoo email', () => {
    expect(compiled.textContent).toContain('davedecena01@yahoo.com');
  });

  it('should show Gmail', () => {
    expect(compiled.textContent).toContain('davedecena01@gmail.com');
  });
});
