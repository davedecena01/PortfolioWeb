import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';
import { EXPERIENCE_ITEMS } from '../../core/constants/experience.constants';
import { ExperienceItem } from '../../core/models/models';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  readonly items: ExperienceItem[] = EXPERIENCE_ITEMS;
}
