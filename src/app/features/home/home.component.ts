import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SOCIAL_LINKS } from '../../core/constants/nav.constants';
import { SocialLink } from '../../core/models/models';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  readonly socialLinks: SocialLink[] = SOCIAL_LINKS;
  readonly resumeUrl = 'resume/John_Dave_Decena_CV.pdf';

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.heroVideo.nativeElement;
    video.muted = true;
    video.play().catch(() => {});
  }
}
