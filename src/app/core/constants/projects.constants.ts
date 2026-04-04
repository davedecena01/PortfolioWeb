import { ProjectItem } from '../models/models';

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    name: 'Where To Stay in Japan?',
    status: 'in-development',
    shortDescription: 'AI-assisted trip planner using Google Gemini and Rakuten API to recommend accommodations across Japan.',
    role: 'Solo Developer',
    stack: ['Angular', '.NET Core', 'Google Gemini', 'Rakuten API'],
    impact: 'Personal showcase project — public repo on GitHub.',
    repoUrl: 'https://github.com/davedecena01',
  },
  {
    name: 'TM1 Platform Integration',
    status: 'private',
    shortDescription: 'Enterprise accounting platform integration enabling secure, scalable cross-platform data access between TM1 and Databricks.',
    role: 'Senior Software Engineer',
    stack: ['.NET Core', 'Angular', 'Databricks', 'GraphQL', 'TypeScript'],
    impact: 'Delivered a key Statement of Work objective for the enterprise data platform strategy.',
    visibilityNote: 'Private enterprise work — anonymized case study.',
  },
  {
    name: 'Airline Booking Platform',
    status: 'private',
    shortDescription: 'Modernized legacy airline reservation system from ASP.NET to a full Angular application supporting high-traffic customer-facing booking flows.',
    role: 'Senior Developer & Tech Lead',
    stack: ['Angular', 'ASP.NET MVC', 'JavaScript', 'XSLT'],
    impact: 'Improved performance, maintainability, and UX for a major airline and multiple international carriers.',
    visibilityNote: 'Private enterprise work — anonymized case study.',
  },
];
