import { Component } from '@angular/core';
import { SectionWrapperComponent } from '../../shared/ui/section-wrapper/section-wrapper.component';
import { SKILL_GROUPS } from '../../core/constants/skills.constants';
import { SkillGroup } from '../../core/models/models';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionWrapperComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  readonly skillGroups: SkillGroup[] = SKILL_GROUPS;
}
