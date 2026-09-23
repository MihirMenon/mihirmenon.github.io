// Edit this file to maintain the portfolio. Empty URLs are intentionally hidden.
// Add actual public URLs; never use placeholders or links to confidential material.
export const profile = {
  name: 'Mihir Menon',
  email: 'mm0785@srmist.edu.in',
  links: {
    linkedin: '',
    github: '',
    resume: './assets/mihir-menon-resume.pdf',
  },
  projects: [
    {
      id: 'drm', number: '01', category: 'Security / Enterprise software',
      title: 'Document security.<br>Built for the real world.', shortTitle: 'Enterprise DRM at HAL',
      description: 'An on-premise Digital Rights Management application deployed at Hindustan Aeronautics Limited, serving 100+ users across departments.',
      tags: ['Python', 'PyQt6', 'Cryptography'], date: 'Jun — Jul 2025',
      context: 'Developed during my HAL internship',
      metric: '100+', metricLabel: 'internal users',
      problem: 'Control how enterprise documents are accessed and distributed inside an on-premise environment, with licensing and configurable restrictions.',
      approach: [
        'Built a hybrid licensing architecture using RSA-2048 with AES-128/HMAC and signature verification.',
        'Implemented five configurable access rules and a six-stage validation pipeline, including expiry, passwords, device locking and view limits.',
        'Added eleven watermark patterns, screenshot and recording prevention features, and tamper-resistant document packaging.'
      ],
      result: 'Deployed as a live internal application used by 100+ people across multiple HAL departments. My wider internship contribution received a Letter of Appreciation.',
      links: { repository: '', demo: '', presentation: '', evidence: '' },
      visibility: 'Internal application at HAL. This overview describes the work without distributing internal software or documents.'
    },
    {
      id: 'pii', number: '02', category: 'Applied NLP / Multi-cloud',
      title: 'Keep the meaning.<br>Protect the identity.', shortTitle: 'Multi-cloud PII Redaction',
      description: 'A pipeline that detects personal information in PDF and text documents, then replaces it with readable pseudonyms across AWS and Azure.',
      tags: ['BERT', 'spaCy', 'AWS + Azure', 'Terraform'], date: 'Jan — Apr 2026',
      context: 'NLP & cloud engineering project',
      metric: '3', metricLabel: 'detection layers',
      problem: 'Identify sensitive personal information in unstructured documents while keeping the redacted output readable and useful.',
      approach: [
        'Combined BERT and spaCy named entity recognition with deterministic regex extraction and heuristic fallback rules.',
        'Used AWS Lambda, SageMaker, Cognito and API Gateway for processing and access, with Azure Blob Storage for output.',
        'Provisioned the multi-cloud infrastructure with Terraform and replaced detected values with readable pseudonyms.'
      ],
      result: 'Built an end-to-end workflow for sensitive-data detection and pseudonymization across unstructured PDF and text input, using three complementary detection layers.',
      links: { repository: '', demo: '', presentation: '', evidence: '' },
      visibility: ''
    },
    {
      id: 'churn', number: '03', category: 'Data engineering / Machine learning',
      title: 'From customer data<br>to retention decisions.', shortTitle: 'AWS Churn Prediction',
      description: 'An end-to-end AWS analytics pipeline that turns customer behavior into features, churn predictions and actionable retention insights.',
      tags: ['XGBoost', 'SageMaker', 'Glue', 'Athena'], date: 'Jul — Oct 2025',
      context: 'Data engineering & machine learning project',
      metric: '89.02%', metricLabel: 'reported classification accuracy',
      problem: 'Use customer behavioral data to identify churn risk and help translate model output into actionable retention insights.',
      approach: [
        'Built an AWS pipeline using Glue, Athena and SageMaker for data processing, model training and prediction.',
        'Engineered features from customer behavior and developed and optimized an XGBoost classifier.',
        'Analyzed predictions to identify churn drivers and communicate customer-retention recommendations.'
      ],
      result: 'Achieved 89.02% classification accuracy in the project evaluation and connected the model outputs to customer-retention insights.',
      links: { repository: '', demo: '', presentation: '', evidence: '' },
      visibility: ''
    }
  ],
  experience: [
    {
      company: 'Hindustan Aeronautics Limited', abbreviation: 'HAL', role: 'Developer Intern',
      date: 'Jun — Aug 2025', location: 'Bengaluru, India',
      description: 'Worked on enterprise software inside an aerospace environment: a live DRM platform, dynamic workflows for aircraft snag resolution, and RAG integration within ERP and security workflows.',
      highlights: [{value:'100+',label:'users on the DRM platform'},{value:'Letter of Appreciation',label:'for project contributions'}],
      evidence: ''
    },
    {
      company: 'F.A.S.T', abbreviation: 'FAST', role: 'Founding Corporate Head',
      date: 'Nov 2025 — Present', location: 'Official NVIDIA Student Developer Club, SRMIST',
      description: 'Led corporate partnerships, sponsorship outreach and cross-functional execution across four technical events, including a 24-hour national hackathon with 300+ participants.',
      highlights: [{value:'₹1.5L+',label:'sponsorship for one flagship event'},{value:'300+',label:'national hackathon participants'}],
      evidence: ''
    }
  ],
  skills: [
    {title:'Languages & foundations',items:['Python','SQL','C++','Java','JavaScript','Data Structures & Algorithms','OOP','DBMS']},
    {title:'Data & cloud',items:['AWS','Azure','GCP','Apache Spark','PySpark','Databricks','Glue','Athena','BigQuery','ETL / ELT']},
    {title:'Machine learning & NLP',items:['XGBoost','Scikit-Learn','Pandas','NumPy','BERT','spaCy','Hugging Face','NER','RAG']},
    {title:'Engineering & delivery',items:['Docker','Kubernetes','Terraform','Git','React','Flask','REST APIs','MySQL']}
  ],
  certifications: [
    {name:'Azure AI Fundamentals',issuer:'Microsoft',date:'Apr 2026',url:''},
    {name:'Azure Data Fundamentals',issuer:'Microsoft',date:'Apr 2026',url:''},
    {name:'Data Engineering on AWS — Foundations',issuer:'AWS',date:'Mar 2026',url:''},
    {name:'Networking Basics',issuer:'Cisco',date:'Oct 2025',url:''},
    {name:'Programming in Java',issuer:'NPTEL',date:'Oct 2024',url:''}
  ]
};
