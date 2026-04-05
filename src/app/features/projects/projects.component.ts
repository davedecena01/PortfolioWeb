import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';
import { PROJECT_ITEMS } from '../../core/constants/projects.constants';
import { ProjectItem } from '../../core/models/models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly projects: ProjectItem[] = PROJECT_ITEMS;

  statusLabel(status: ProjectItem['status']): string {
    return { 'public': 'Public', 'private': 'Private / Anonymized', 'in-development': 'In Development' }[status];
  }
}
