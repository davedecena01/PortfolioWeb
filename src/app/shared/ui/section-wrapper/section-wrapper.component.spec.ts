import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionWrapperComponent } from './section-wrapper.component';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [SectionWrapperComponent],
  template: `<app-section-wrapper sectionId="about"><p>Content</p></app-section-wrapper>`,
})
class TestHostComponent {}

describe('SectionWrapperComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TestHostComponent] }).compileComponents();
    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should render projected content', () => {
    expect(fixture.nativeElement.querySelector('p').textContent).toBe('Content');
  });

  it('should apply sectionId as element id', () => {
    expect(fixture.nativeElement.querySelector('section').id).toBe('about');
  });
});
