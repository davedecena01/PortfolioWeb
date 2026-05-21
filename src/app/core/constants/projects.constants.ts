import { ProjectItem } from '../models/models';

export const PROJECT_ITEMS: ProjectItem[] = [
  {
    name: 'Rental Property Manager',
    status: 'in-development',
    shortDescription:
      'Full-stack SaaS dashboard for landlords to manage rental properties, tenants, leases, rent payments, maintenance requests, and portfolio analytics — with Stripe payments, file uploads, and email reminders.',
    role: 'Solo Developer',
    stack: ['Angular', '.NET 8', 'C#', 'PostgreSQL', 'Supabase', 'Stripe', 'TypeScript', 'SCSS'],
    impact:
      'Live-deployed app with E2E test coverage. Demonstrates clean layered architecture, role-based auth, Stripe Checkout flow, and full landlord–tenant workflow.',
    liveUrl: 'https://rental-management-system-roan.vercel.app',
    repoUrl: 'https://github.com/davedecena01/RentalManagementSystem',
  },
  {
    name: 'Where To Stay in Japan?',
    status: 'in-development',
    shortDescription: 'AI-assisted trip planner using Google Gemini and Rakuten API to recommend accommodations across Japan.',
    role: 'Solo Developer',
    stack: ['Angular', '.NET Core', 'Google Gemini', 'Rakuten API'],
    impact: 'Personal showcase project — public repo on GitHub.',
    repoUrl: 'https://github.com/davedecena01',
    liveUrl: 'https://where-to-stay-in-japan.vercel.app/',
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
];
