export interface NavItem {
  id: string;
  label: string;
  anchor: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin';
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  title: string;
  start: string;
  end?: string;
  summary: string;
  isCurrent: boolean;
  bullets?: string[];
}

export interface ProjectItem {
  name: string;
  status: 'public' | 'private' | 'in-development';
  shortDescription: string;
  role: string;
  stack: string[];
  impact: string;
  repoUrl?: string;
  liveUrl?: string;
  visibilityNote?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
  credentialUrl?: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: 'email' | 'linkedin' | 'github';
}
