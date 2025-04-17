import logoTech9 from '@/images/logos/tech9.png';
import logoQS from '@/images/logos/qs.jpg';
import logoIdha from '@/images/logos/idhasoft.jpg';
import logoNelito from '@/images/logos/nelito.jpg';
import logoLivetek from '@/images/logos/livetek.jpg';
import logoCkad from '@/images/logos/ckad.png';
import logoTechAccred from '@/images/logos/technical-accred.png';
import logoDevAssos from '@/images/logos/developer-associate.png';
import logoSAAssos from '@/images/logos/sa-associate.png';
import logoSysOps from '@/images/logos/sysops-admin.png';
import logoSAPro from '@/images/logos/sa-professional.png';
import logoSecurity from '@/images/logos/security-specialty.png';
import logoPractitioner from '@/images/logos/practitioner.png';
import logoAIPractitioner from '@/images/logos/AI-Practitioner.png';


export const WORK = [
  {
    company: 'Tech9',
    title: 'Sr. Solutions Architect',
    logo: logoTech9,
    start: 'Aug 2022',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Tech9',
    title: 'Principal Software Engineer',
    logo: logoTech9,
    start: 'Non 2018',
    end: 'Jul 2022',
  },
  {
    company: 'Tech9',
    title: 'Lead Software Engineer',
    logo: logoTech9,
    start: 'Feb 2017',
    end: 'Oct 2018',
  },
  {
    company: 'Quinstreet Software Private Limited',
    title: 'Technical Lead',
    logo: logoQS,
    start: 'Jan 2012',
    end: 'Jan 2017',
  },
  {
    company: 'Idhasoft',
    title: 'Sr. Software Engineer',
    logo: logoIdha,
    start: 'May 2011',
    end: 'Jan 2012',
  },
  {
    company: 'Smartsourcing Global',
    title: 'Sr. Software Developer',
    start: 'May 2010',
    end: 'May 2011',
  },
  {
    company: 'Nelito Systems Pvt. Ltd.',
    title: 'Sr. Software Engineer',
    logo: logoNelito,
    start: 'Nov 2009',
    end: 'April 2010',
  },
  {
    company: 'Livetek Solutions',
    title: 'Web Developer',
    logo: logoLivetek,
    start: 'April 2008',
    end: 'Oct 2009',
  },
  {
    company: 'Can & Will Softwares',
    title: 'Intern',
    start: 'Jul 2007',
    end: 'Mar 2008',
  },
];

export const CERTIFICATIONS = [
  {
    company: 'AWS Certified AI Practitioner',
    title: 'Amazon Web Services',
    logo: logoAIPractitioner,
    start: 'April 2025',
    end: 'April 2028',
    href: 'https://www.credly.com/badges/b59fe05b-3861-45bc-9211-e0a19a0617cb',
    credential: '09bbbcf950334441a8ca725f8933e121',
  },
  {
    company: 'AWS Certified Security - Specialty',
    title: 'Amazon Web Services',
    logo: logoSecurity,
    start: 'Dec 2022',
    end: 'Dec 2025',
    href: 'https://www.credly.com/badges/01a6cbc7-4fca-4d9d-a687-1fa190c07e31',
    credential: '42MHH3NC5JE11CCR',
  },
  {
    company: 'AWS Certified Solutions Architect - Professional (2x)',
    title: 'Amazon Web Services',
    logo: logoSAPro,
    start: 'Jun 2021',
    end: 'May 2027',
    href: 'https://www.credly.com/badges/e8e198a8-55e6-43c5-9c54-4de6ea19a969',
    credential: '9FM34Z3BBMV11L5F',
  },
  {
    company: 'CKAD: Certified Kubernetes Application Developer',
    title: 'The Linux Foundation',
    logo: logoCkad,
    start: 'April 2022',
    end: 'April 2025',
    href: 'https://www.credly.com/badges/2d9eb564-e86c-4845-b92c-a5f19b685b9b',
    credential: 'LF-cm3nzlagt6',
  },
  {
    company: 'AWS Certified SysOps Administrator – Associate',
    title: 'Amazon Web Services',
    logo: logoSysOps,
    start: 'Jun 2021',
    end: 'Jun 2024',
    href: 'https://www.credly.com/badges/b2070a20-549b-4e4b-9dca-af07a7627fe1',
    credential: 'C4C0TCYDDMR1Q7KR',
  },
  {
    company: 'AWS Certified Solutions Architect - Associate',
    title: 'Amazon Web Services',
    logo: logoSAAssos,
    start: 'Jun 2018',
    end: 'May 2027',
    href: 'https://www.credly.com/badges/46a1eee5-826d-4b6f-bed0-da44880167ca',
    credential: 'J38939WCDF111LGF',
  },
  {
    company: 'AWS Certified Developer - Associate',
    title: 'Amazon Web Services',
    logo: logoDevAssos,
    start: 'Jun 2018',
    end: 'Jun 2021',
    href: 'https://www.credly.com/badges/fedf7427-0c4c-47a7-9e35-7cfa1ff4cf80',
    credential: 'R122LNQKJ2E1QYCW',
  },
  {
    company: 'AWS Certified Cloud Practitioner',
    title: 'Amazon Web Services',
    logo: logoPractitioner,
    start: 'Jun 2022',
    end: 'May 2027',
    href: 'https://www.credly.com/badges/928b947c-4d9f-4fc6-8a84-1b36451e474f',
    credential: 'YGHS6VLLF1EQQZ98',
  },

  {
    company: 'AWS Partner: Accreditation (Technical)',
    title: 'Amazon Web Services',
    logo: logoTechAccred,
    start: 'Feb 2023',
    end: '',
    href: 'https://www.credly.com/badges/7b1ded70-86b7-4cf0-afa7-fe894ad830a3',
    credential: 'RKHXX4WCMEE1QDWW',
  },
];

export const TOOLS_AND_TECH = [
  {
    id: 1,
    title: 'Frontend Technologies / Skills',
    technologies: [
      {
        id: 1,
        title: 'Javascript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        description:
          'As Jeff Atwood said in 2007, &quot;Any application that can be\n' +
          '              written in JavaScript, will eventually be written in\n' +
          '              JavaScript.&quot; I couldn&apos;t agree more. I&apos;ve been using\n' +
          '              Javascript for <b>over 10 years</b> now and I&apos;m still\n' +
          '              learning new things every day.',
      },
      {
        id: 4,
        title: 'Angular JS',
        href: 'https://angularjs.org/',
        description:
          'AngularJS was a revolutionary framework for frontend development.\n' +
          '              I have used AngularJS for <b>over 2 years.</b>',
      },
    ],
  },
  {
    id: 2,
    title: 'Backend Technologies / Skills',
    technologies: [
      {
        id: 1,
        title: 'PHP',
        href: 'https://php.net/',
        description:
          'PHP is a great language for building server-side applications.\n' +
          '              I&apos;ve been using PHP for <b>over 15 years</b>.\n' +
          '              Created lots of web application/sites into various domains',
      },
      {
        id: 2,
        title: 'Python',
        href: 'https://python.org',
        description:
          'Python is highly efficient language. Python\'s clean object-oriented design provides enhanced process control, \n'+
          ' and the language is equipped with excellent text processing and integration capabilities. \n'
      },
      {
        id: 3,
        title: 'ROR',
        href: 'https://go.dev/',
        description:
          'Ruby on Rails is a great web application building framework, I used it for few projects.',
      },
      {
        id: 4,
        title: 'GoLang',
        href: 'https://go.dev/',
        description:
            'Recently I stated using GoLang into existing project where I wanted the performance',
      },
      {
        id: 5,
        title: 'Bash',
        href: 'https://www.rust-lang.org/',
        description:
          'I&apos;ve been using bash scripting from long time. Bash scripting helped me for automating repetitive tasks and make their workflow more efficient.\n' +
          '              As a devops person it helps me on daily basis.',
      },
    ],
  },
  {
    id: 3,
    title: 'Frameworks',
    technologies: [
      {
        id: 1,
        title: 'Symfony',
        href: 'https://symfony.com/',
        description:
          'Symfony is a feature-rich back-end framework that is used to build complex applications\n' +
          '              The framework provides a range of tools and features specifically designed for building\n'+
          '               scalable PHP web applications, including support for multiple environments and a robust caching system\n' +
          '              I have been using Symfony for more than 5 years.',
      },
      {
        id: 1,
        title: 'CodeIgnitor',
        href: 'https://codeigniter.com/',
        description:
            'CodeIgniter is an open-source software rapid development web framework, for use in building dynamic web sites with PHP.\n' +
            'It makes it easier for programmers to write secure PHP applications by providing several features.\n' +
            'I worked on CodeIgniter for around 4 years and with multiple projects.'
      },
    ],
  },
  {
    id: 4,
    title: 'Database Technologies / Skills',
    technologies: [
      {
        id: 1,
        title: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        description:
          'PostgreSQL is a great RDBMS with extensibility and SQL compliance.\n' +
          '              I&apos;ve been using PostgreSQL for <b>over 7 years</b> now.',
      },
      {
        id: 2,
        title: 'MongoDB',
        href: 'https://www.mongodb.com/',
        description:
          'MongoDB is a great NoSQL database. I&apos;ve been using MongoDB\n' +
          '              for <b>over 5 years</b> now.',
      },
      {
        id: 3,
        title: 'DynamoDB',
        href: 'https://aws.amazon.com/dynamodb/',
        description:
          'While working on AWS, I&apos;ve used DynamoDB when I needed a\n' +
          '              NoSQL database. Though I&apos;ve used it for a short period of\n' +
          '              time, I&apos;ve found it to be a useful one.',
      },
      {
        id: 3,
        title: 'Redis',
        href: 'https://redis.io',
        description:
            'For caching purpose, I have been using Redis on multiple projects\n' +
            '              One of the main advantages of Redis is its in-memory storage, \n' +
            '              which allows it to provide fast access to data and high performance.',
      },
    ],
  },
  {
    id: 5,
    title: 'DevOps / Cloud Technologies',
    technologies: [
      {
        id: 1,
        title: 'AWS',
        href: 'https://aws.amazon.com/',
        description:
          ' I&apos;ve extensively used AWS for building and deploying\n' +
          '              applications with several AWS services. I&apos;m having 8x \n' +
          '              <b>AWS certifications including top ones such as Solutions Architect Professional & Security Specialty.</b>',
      },
      {
        id: 2,
        title: 'Kubernetes',
        href: 'https://kubernetes.io/',
        description:
            ' I&apos;m extensively using K8s for building applications.\n' +
            '              Having a great experieice of using it with AWS EKS. \n' +
            '              I have created many services and applications into K8s' +
            '              <b>I am also a Certified Kubernetes Application Developer.</b>',
      },
      {
        id: 3,
        title: 'Docker',
        href: 'https://docker.io/',
        description:
            ' I&apos;ve extensively used Docker for building containerised applications.\n' +
            '              Using it for more than 7 years',
      },
      {
        id: 4,
        title: 'Terraform',
        href: 'https://www.terraform.io/',
        description:
          ' I have been recently working on Terraform to automate the infrastructure for one of projects\n' +
          '              Also side by side, I am preparing for an official Terraform associate certification.',
      },
      {
        id: 4,
        title: 'Ansible',
        href: 'https://ansible.com/',
        description:
            ' Ansible can configure systems, deploy software, and orchestrate advanced workflows to support \n' +
            ' application deployment, system updates, and more. Ansible&apos;s main strengths are simplicity and ease of use.\n' +
            'I&apos;ve been using Ansible for more than 4 years.'
      },
      {
        id: 4,
        title: 'AWS CDK',
        href: 'https://aws.amazon.com/cdk/',
        description:
            'The AWS Cloud Development Kit (AWS CDK) is an open-source software development framework for defining \n' +
            ' cloud infrastructure as code with modern programming languages and deploying it through AWS CloudFormation..\n' +
            'I&apos;ve been using CDK for few of client projects'
      },
      {
        id: 5,
        title: 'Serverless Framework',
        href: 'https://www.serverless.com\n',
        description:
            ' I&apos;ve used serverless framework to build and deploy few\n' +
            '              of the applications. These\n' +
            '              days I&apos;m getting familiar with CDK to build serverless\n' +
            '              applications. Used it for few serverless hackathon projects and own the first price for one of it.',
      },
      {
        id: 6,
        title: 'Vercel',
        href: 'https://vercel.com/',
        description:
          'My primary usage of Vercel is deployment of NextJS applications\n' +
          '              and my own portfolio website.',
      },
    ],
  },
  {
    id: 6,
    title: 'CMS',
    technologies: [
      {
        id: 1,
        title: 'Drupal',
        href: 'https://drupal.org/',
        description:
          'Drupal is an open source platform for building amazing digital experiences.\n' +
          '              I&apos;ve fallen in to love with the ease of use and the\n' +
          '              flexibility it provides. I&apos;ve used Drupal for several\n' +
          '               websites into various domains for my clients.',
      },
      {
        id: 2,
        title: 'Joomla',
        href: 'https://www.joomla.org/',
        description:
          'Joomla! is a free and open-source content management system (CMS) for publishing web content\n' +
          '              I&apos;ve used Joomla for several\n' +
            '               websites into various domains for my clients',
      }
    ],
  },
  {
    id: 7,
    title: 'Design',
    technologies: [
      {
        id: 1,
        title: 'Figma',
        href: 'https://www.figma.com/',
        description:
          'We started using Figma as just a design tool, but now it&apos;s\n' +
          '              become our virtual whiteboard for the entire company. Never would\n' +
          '              have expected the collaboration features to be the real hook.',
      },
    ],
  },
  {
    id: 8,
    title: 'Source Control',
    technologies: [
      {
        id: 1,
        title: 'GitHub',
        href: 'https://github.com/',
        description:
          'GitHub is my stop solution for all professional and personal\n' +
          '              projects. With the grand entry of GitHub Copilot, I&apos;m looking\n' +
          '              forward to see how it&apos;s going to change the way I code.',
      },
      {
        id: 2,
        title: 'Bitbucket',
        href: 'https://bitbucket.org/product',
        description:
          'I have used bitbucket for numerous client projects, but I&apos;ve\n' +
          '              found GitHub more useful for me.',
      },
    ],
  },
  {
    id: 9,
    title: 'Tools',
    technologies: [
      {
        id: 1,
        title: 'Visual Studio Code',
        href: 'https://code.visualstudio.com/',
        description:
          'Visual Studio Code IDE is one stop solution for most of my development\n' +
          '              needs.',
      },
      {
        id: 2,
        title: 'Warp',
        href: 'https://www.warp.dev/',
        description:
          'I&apos;m using Warp from long time instead of basic terminal.',
      },
      {
        id: 3,
        title: 'Jetbrains PHPStorm',
        href: 'https://www.jetbrains.com/phpstorm/',
        description:
          'PHPStorm is a great IDE for PHP development',
      },
    ],
  },
];