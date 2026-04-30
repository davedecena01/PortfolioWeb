import { NavItem, SocialLink } from '../models/models';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home',           label: 'Home',           anchor: '#home' },
  { id: 'experience',     label: 'Experience',     anchor: '#experience' },
  { id: 'skills',         label: 'Skills',         anchor: '#skills' },
  { id: 'projects',       label: 'Projects',       anchor: '#projects' },
  { id: 'certifications', label: 'Certifications', anchor: '#certifications' },
  { id: 'contact',        label: 'Contact',        anchor: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/john-dave-decena/', icon: 'linkedin' },
  { label: 'GitHub',   url: 'https://github.com/davedecena01', icon: 'github' },
];
