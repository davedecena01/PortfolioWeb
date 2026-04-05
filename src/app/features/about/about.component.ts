import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';

interface StatHighlight { value: string; label: string; }

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  readonly highlights: StatHighlight[] = [
    { value: '12',     label: 'Years of experience' },
    { value: '8+',     label: 'Companies served' },
    { value: '7',      label: 'Azure certifications' },
    { value: 'SAFe 5', label: 'Certified practitioner' },
  ];
}
