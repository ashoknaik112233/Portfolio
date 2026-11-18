// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Ashok Naik',
  firstName: 'Ashok',
  roles: ['Full Stack Developer', 'React Engineer', 'AI Application Builder', 'Real-time Systems Dev'],
  location: 'Bengaluru, India',
  email: 'ashokn702@gmail.com',
  phone: '+91 6363679288',
  linkedin: 'https://www.linkedin.com/in/ashok-naik-95480a208',
  github: 'https://github.com/your-username', // TODO: replace with your GitHub URL
  resume: '/Ashok_Naik_Resume.pdf', // put your resume PDF in /public with this name
  tagline:
    'I build scalable web applications, real-time systems and AI-powered products — from pixel-perfect React frontends to fast, async Python backends.',
  about: [
    'Full Stack Developer with 4+ years of experience building scalable web applications using React, JavaScript, Python and FastAPI.',
    'I enjoy working across the stack: responsive frontends, REST APIs, real-time systems with WebSockets and SSE, and AI-powered applications using LLMs and RAG pipelines. I care about shipping production-ready software that is fast, reliable and pleasant to use.',
  ],
};

export const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '5+', label: 'Production Projects' },
  { value: '~50%', label: 'Faster Benchmarking' },
  { value: '<500ms', label: 'Real-time Latency' },
];

export const experience = [
  {
    company: 'LG Soft India',
    role: 'Software Developer',
    period: '07/2024 — Present',
    location: 'Bengaluru',
    summary:
      'Building AI-driven platforms, real-time dashboards and distributed evaluation tooling for voice and IoT products.',
    highlights: [
      'Architected a distributed ASR evaluation framework with FastAPI + asyncio',
      'Shipped a real-time voice AI home assistant with sub-500ms latency',
      'Built a GPT-4o document intelligence platform cutting manual effort ~90%',
    ],
  },
  {
    company: 'Infosys Limited',
    role: 'Software Developer',
    period: '12/2021 — 02/2024',
    location: 'Bengaluru',
    summary: 'Delivered React applications for a global client in the Banking & Finance domain.',
    highlights: [
      'Built a multi-step cheque-claims portal with robust validation workflows',
      'Integrated frontend with backend services for secure transaction processing',
      'Developed a Google Maps-based merchant locator with responsive, accessible UI',
    ],
  },
];

export const projects = [
  {
    title: 'Jinsil',
    subtitle: 'VoiceDev Evaluation Framework',
    company: 'LG Soft India',
    period: '12/2025 — Present',
    featured: true,
    metric: { value: '~50%', label: 'faster benchmarking' },
    points: [
      'Architected a distributed evaluation framework using FastAPI and asyncio with parallel background workers.',
      'Built a stress-testing engine with 30+ audio perturbations to evaluate ASR robustness in noisy conditions.',
      'Real-time React dashboard with SSE and DAG-based visualization for sub-second experiment tracking.',
      'Client-side DuckDB-WASM OLAP engine querying IndexedDB-persisted Apache Arrow IPC streams in the browser.',
      'Jinja2 request templating and JSONPath response extraction across 5+ ASR services.',
    ],
    tech: ['FastAPI', 'asyncio', 'React', 'SSE', 'DuckDB-WASM', 'Apache Arrow', 'Jinja2'],
  },
  {
    title: 'Furon',
    subtitle: 'Automation Home Agent',
    company: 'LG Soft India',
    period: '12/2024 — 11/2025',
    featured: true,
    metric: { value: '<500ms', label: 'communication latency' },
    points: [
      'Real-time AI assistant built with React and WebSockets.',
      'Web Speech API integration for seamless speech-to-text and text-to-speech.',
      'FastAPI backend with Redis and a RAG pipeline for real-time IoT orchestration.',
      'Extensible framework for dynamic agent orchestration and live monitoring.',
    ],
    tech: ['React', 'WebSockets', 'Web Speech API', 'FastAPI', 'Redis', 'RAG'],
  },
  {
    title: 'IVAN',
    subtitle: 'AI-Powered Document Intelligence',
    company: 'LG Soft India',
    period: '07/2024 — 11/2024',
    featured: true,
    metric: { value: '~90%', label: 'less manual effort' },
    points: [
      'End-to-end extraction platform using Flask + GPT-4o, automating 20+ data fields.',
      'OpenCV pipeline (CLAHE, vertical projection) to segment and batch-process receipts — ~5× throughput.',
      'React dashboard with keyboard workflows and CSV export, boosting validation efficiency by ~40%.',
    ],
    tech: ['Flask', 'GPT-4o', 'OpenCV', 'React', 'Python'],
  },
  {
    title: 'TC Portal',
    subtitle: 'Travelers Cheques Encashment Portal',
    company: 'Infosys',
    period: '12/2021 — 02/2024',
    metric: { value: 'BFSI', label: 'banking & finance' },
    points: [
      'Multi-step React application for cheque claims with robust validation workflows.',
      'Integrated frontend with backend services for secure transaction processing.',
    ],
    tech: ['React', 'Redux', 'REST APIs'],
  },
  {
    title: 'TC Locator',
    subtitle: 'Travelers Cheques Encashment Locator',
    company: 'Infosys',
    period: 'Banking & Finance',
    metric: { value: 'Maps', label: 'geo search' },
    points: [
      'Google Maps-based React application to locate nearby merchants.',
      'Responsive UI with improved accessibility and cross-browser performance.',
    ],
    tech: ['React', 'Google Maps API', 'CSS'],
  },
];

export const skills = [
  { group: 'Languages', icon: '{ }', items: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'HTML', 'CSS'] },
  { group: 'Frontend', icon: '◧', items: ['React', 'Redux', 'Vite', 'Tailwind CSS', 'Bootstrap'] },
  { group: 'Backend', icon: '⚙', items: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'WebSockets', 'SSE'] },
  { group: 'Data', icon: '▤', items: ['PostgreSQL', 'MySQL', 'SQLAlchemy', 'Redis', 'DuckDB'] },
  { group: 'AI & Realtime', icon: '✦', items: ['GPT-4o', 'RAG Pipelines', 'OpenCV', 'Web Speech API', 'asyncio'] },
  { group: 'Tools', icon: '⌘', items: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Jira'] },
];

export const education = {
  degree: 'Master of Computer Applications (MCA)',
  school: 'RNS Institute of Technology, Bangalore',
  score: 'CGPA 8.92',
};
