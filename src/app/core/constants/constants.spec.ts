import { NAV_ITEMS } from './nav.constants';
import { SKILL_GROUPS } from './skills.constants';
import { EXPERIENCE_ITEMS } from './experience.constants';
import { PROJECT_ITEMS } from './projects.constants';
import { CERTIFICATION_ITEMS } from './certifications.constants';
import { CONTACT_ITEMS } from './contact.constants';

describe('Core constants', () => {
  it('should have 8 nav items', () => expect(NAV_ITEMS.length).toBe(8));
  it('should have 5 skill groups', () => expect(SKILL_GROUPS.length).toBe(5));
  it('should have 8 experience items', () => expect(EXPERIENCE_ITEMS.length).toBe(8));
  it('should have current role marked correctly', () => expect(EXPERIENCE_ITEMS[0].isCurrent).toBe(true));
  it('should not have end field for current role', () => expect(EXPERIENCE_ITEMS[0].end).toBeUndefined());
  it('should have 3 projects', () => expect(PROJECT_ITEMS.length).toBe(3));
  it('should have 8 certifications', () => expect(CERTIFICATION_ITEMS.length).toBe(8));
  it('should have 4 contact items', () => expect(CONTACT_ITEMS.length).toBe(4));
});
