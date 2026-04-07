import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../../features/home/home.component';
import { AboutComponent } from '../../features/about/about.component';
import { SkillsComponent } from '../../features/skills/skills.component';
import { ExperienceComponent } from '../../features/experience/experience.component';
import { ProjectsComponent } from '../../features/projects/projects.component';
import { CertificationsComponent } from '../../features/certifications/certifications.component';
import { ResumeComponent } from '../../features/resume/resume.component';
import { ContactComponent } from '../../features/contact/contact.component';
import { ScrollSpyService } from '../../shared/ui/scroll-spy/scroll-spy.service';
import { ScrollToTopComponent } from '../../shared/ui/scroll-to-top/scroll-to-top.component';
import { NAV_ITEMS } from '../../core/constants/nav.constants';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, CertificationsComponent, ResumeComponent, ContactComponent, ScrollToTopComponent],
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements AfterViewInit {
  constructor(private scrollSpy: ScrollSpyService) {}

  ngAfterViewInit(): void {
    this.scrollSpy.init(NAV_ITEMS.map(n => n.id));
  }
}
