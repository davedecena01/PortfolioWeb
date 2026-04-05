import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent {
  readonly resumeUrl = 'resume/John_Dave_Decena_CV.pdf';
  readonly linkedinUrl = 'https://www.linkedin.com/in/john-dave-decena-0ab9a6196/';
  readonly githubUrl = 'https://github.com/davedecena01';
}
