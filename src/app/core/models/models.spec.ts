import type {
  NavItem, SocialLink, SkillGroup, ExperienceItem, ProjectItem, CertificationItem, ContactItem
} from './models';

describe('Models', () => {
  it('NavItem should have id, label, anchor', () => {
    const item: NavItem = { id: 'home', label: 'Home', anchor: '#home' };
    expect(item.id).toBe('home');
    expect(item.label).toBe('Home');
    expect(item.anchor).toBe('#home');
  });

  it('ExperienceItem should support optional bullets', () => {
    const item: ExperienceItem = {
      company: 'Acme', title: 'Engineer', start: 'Jan 2020', end: 'Present',
      summary: 'Built things.', isCurrent: true
    };
    expect(item.bullets).toBeUndefined();
  });

  it('ProjectItem status should be a union type', () => {
    const item: ProjectItem = {
      name: 'Test', status: 'in-development', shortDescription: 'Desc',
      role: 'Dev', stack: ['Angular'], impact: 'Big'
    };
    expect(['public', 'private', 'in-development']).toContain(item.status);
  });
});
