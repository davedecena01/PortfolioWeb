import { ExperienceItem } from '../models/models';

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: '3Cloud Solutions Inc',
    title: 'Senior Software Engineer',
    start: 'Jul 2023',
    isCurrent: true,
    summary: 'Enterprise data platform engineering across .NET APIs, Databricks, and Azure cloud-native integrations.',
    bullets: [
      'Designed RESTful .NET Core APIs and GraphQL services integrating TM1 with Databricks, enabling secure cross-platform data access.',
      'Established foundational architecture for the Interactive Review Module, adopted as a reference standard across the platform.',
      'Designed and validated cloud-native integration patterns using Azure APIM, Service Bus, and Logic Apps.',
      'Led performance benchmarking and instrumentation, building baseline test harnesses and optimizing API throughput.',
    ],
  },
  {
    company: 'ConnectOS',
    title: 'Full Stack Developer',
    start: 'Nov 2022',
    end: 'Jul 2023',
    isCurrent: false,
    summary: 'Finance system automation and ERP integration.',
    bullets: [
      'Built features for a finance system automating AP, expense reimbursement, and proof of delivery workflows.',
      'Integrated third-party ERP APIs to ingest and normalize client data; optimized system performance through profiling.',
    ],
  },
  {
    company: 'Cognizant Softvision',
    title: 'Associate Lead Developer',
    start: 'Jan 2022',
    end: 'Nov 2022',
    isCurrent: false,
    summary: 'CMS platform enhancements, release coordination, and cross-functional Scrum team leadership.',
    bullets: [
      'Led cross-functional Scrum team as technical point of contact, coordinating releases and managing stakeholder expectations.',
      'Delivered CMS platform enhancements, driving quality through structured code reviews and architecture alignment.',
      'Collaborated with UK-based architects to align delivery standards and engineering practices across distributed teams.',
    ],
  },
  {
    company: 'Cognizant Softvision',
    title: 'Senior Developer',
    start: 'Jan 2021',
    end: 'Dec 2021',
    isCurrent: false,
    summary: 'CMS payment enhancements and engineering standards enforcement with UK-based architects.',
    bullets: [
      'Built payment flow enhancements and CMS features for a UK-based enterprise digital platform in collaboration with offshore architects.',
      'Enforced engineering standards and conducted peer code reviews, maintaining consistency across distributed development teams.',
    ],
  },
  {
    company: 'Chevron Holdings Inc.',
    title: 'Software Engineer',
    start: 'Apr 2020',
    end: 'Dec 2020',
    isCurrent: false,
    summary: 'In-house ASP.NET MVC web and mobile applications for internal operations.',
    bullets: [
      'Developed internal ASP.NET MVC web and mobile applications supporting daily operational workflows for a global energy enterprise.',
      'Built backend APIs and contributed to integration planning for internal business data systems across business units.',
    ],
  },
  {
    company: 'Navitaire Inc.',
    title: 'Senior Web Developer',
    start: 'Mar 2017',
    end: 'Apr 2020',
    isCurrent: false,
    summary: 'Airline booking platform modernization from ASP.NET to Angular; code reviewer and development lead.',
    bullets: [
      'Modernized a legacy airline reservation system from ASP.NET MVC to a full Angular application, supporting high-traffic booking flows for multiple international carriers.',
      'Served as code reviewer and development lead, establishing technical standards and mentoring junior engineers.',
      'Recognized with the Above and Beyond Award and Platinum Award for outstanding delivery contributions.',
    ],
  },
  {
    company: 'Nokia',
    title: 'Software Engineer',
    start: 'Nov 2014',
    end: 'Mar 2017',
    isCurrent: false,
    summary: 'Internal enterprise web applications (HR, Finance, IT) and Scrum Master responsibilities.',
    bullets: [
      'Built and maintained enterprise internal web applications across HR, Finance, and IT domains for a global telecommunications company.',
      'Served as Scrum Master for a cross-functional engineering team, facilitating sprint ceremonies and continuous delivery practices.',
      'Received the Extra Mile Award for consistent engineering contributions and team performance.',
    ],
  },
  {
    company: 'Indra',
    title: 'Software Engineer',
    start: 'Jun 2014',
    end: 'Nov 2014',
    isCurrent: false,
    summary: 'Build validation, testing, and automated smoke test research.',
    bullets: [
      'Performed build validation and software quality assurance to maintain release standards across product deliverables.',
      'Researched and prototyped automated smoke testing approaches to improve continuous integration reliability.',
    ],
  },
];
