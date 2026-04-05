import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../core/constants/nav.constants';
import { SocialLink } from '../../core/models/models';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly socialLinks: SocialLink[] = SOCIAL_LINKS;
  readonly resumeUrl = 'resume/John_Dave_Decena_CV.pdf';
}
