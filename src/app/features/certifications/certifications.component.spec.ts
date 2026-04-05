import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CertificationsComponent } from './certifications.component';

describe('CertificationsComponent', () => {
  let fixture: ComponentFixture<CertificationsComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [CertificationsComponent] }).compileComponents();
    fixture = TestBed.createComponent(CertificationsComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should render 8 certification cards', () => {
    expect(compiled.querySelectorAll('.cert-card').length).toBe(8);
  });

  it('should show Azure Developer Associate', () => {
    expect(compiled.textContent).toContain('Azure Developer Associate');
  });

  it('should show SAFe certification', () => {
    expect(compiled.textContent).toContain('SAFe');
  });
});
