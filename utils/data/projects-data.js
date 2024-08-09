import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Time Tracking',
        description: "Application developed from scratch, designed to organize and manage a company's resources, including leave management, client billing based on hours worked, as well as project, task, and employee management. The development process included testing, continuous integration and deployment (CI/CD) via Git, automatic deployments on GitHub, and backup management.",
        tools: ['MongoDB', 'OpenAI API', 'Python', 'TypeScript', 'Vue', 'Tailwind'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Network Automation',
        description: 'Network automation application developed from scratch, capable of fully scanning a network via SSH or Telnet. Extensible to include additional APIs (e.g., Fortinet). The application enables on-the-fly VLAN creation, modification, and deletion, and manages switch configurations. The development process included testing in CI/CD.',
        tools: ['MongoDB', 'SSH', 'Telnet', 'Python', 'TypeScript', 'Vue', 'Tailwind'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Open Source Contribution',
        description: 'Contribution to open source projects, including Python, Pydantic, Odoo',
        tools: ['Python', 'Git', 'GitHub'],
        code: '',
        role: 'Software Engineer',
        demo: '',
        image: realEstate,
    },
];
