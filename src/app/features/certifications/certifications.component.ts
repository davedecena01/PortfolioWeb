import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';
import { CERTIFICATION_ITEMS } from '../../core/constants/certifications.constants';
import { CertificationItem } from '../../core/models/models';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss'],
})
export class CertificationsComponent {
  readonly certifications: CertificationItem[] = CERTIFICATION_ITEMS;
}
