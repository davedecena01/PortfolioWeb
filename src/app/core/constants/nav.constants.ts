import { NavItem, SocialLink } from '../models/models';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home',           label: 'Home',           anchor: '#home' },
  { id: 'about',          label: 'About',          anchor: '#about' },
  { id: 'skills',         label: 'Skills',         anchor: '#skills' },
  { id: 'experience',     label: 'Experience',     anchor: '#experience' },
  { id: 'projects',       label: 'Projects',       anchor: '#projects' },
  { id: 'certifications', label: 'Certifications', anchor: '#certifications' },
  { id: 'resume',         label: 'Resume',         anchor: '#resume' },
  { id: 'contact',        label: 'Contact',        anchor: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/john-dave-decena-0ab9a6196/', icon: 'linkedin' },
  { label: 'GitHub',   url: 'https://github.com/davedecena01', icon: 'github' },
];
