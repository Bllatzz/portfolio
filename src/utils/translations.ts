import type { Translation } from '@/@types/i18n.d'

export const translations: Record<'pt' | 'en', Translation> = {
  pt: {
    nav: {
      home: 'Início',
      projects: 'Projetos',
      courses: 'Cursos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      role: 'Desenvolvedor Full Stack',
      description: 'Desenvolvedor Full Stack com experiência em ambientes de produção, atuando em startup de logística no desenvolvimento de aplicações web, automações e integrações de dados.',
      cta: 'Ver Projetos',
    },
    about: {
      title: 'Sobre Mim',
      content: `Stack principal: Laravel, PHP, Python, JavaScript e MySQL. Experiência com arquitetura MVC e migração gradual para Service/Repository, visando melhor separação de responsabilidades e escalabilidade.

No back-end, desenvolvi automações em Python para coleta e processamento de dados logísticos, realizando consultas automatizadas em sistemas de shipping lines para obtenção de rotas, valores de frete e preços de navios.

Vivência com AWS (EC2, RDS, S3 e Secrets Manager), incluindo gerenciamento de ambientes, variáveis sensíveis, clonagem de ambientes sandbox.

No front-end, atuação com Laravel Blade e conhecimentos em Vue.js, React e Tailwind CSS.

Formado em Ensino Médio Técnico em TI pelo Colégio Cotemig e graduando em Sistemas de Informação pela PUC Minas.`,
    },
    projects: {
      title: 'Projetos',
      viewProject: 'Ver Projeto',
      items: [
        {
          id: '1',
          name: 'Hikki Bot',
          year: '2020-2021',
          description: 'Um Bot desenvolvido para o Discord com diversas funcionalidades',
          image: '/images/mini_hiki_cool.png',
          link: '#',
        },
        {
          id: '2',
          name: 'Kazizas',
          year: '2023',
          description: 'E-Commerce completo apenas com Front-End',
          image: 'https://portfolio-feio-dms.netlify.app/assets/kazizas.png',
          link: 'https://kazizas.netlify.app/camisas/masculinos/',
        },
        {
          id: '3',
          name: 'Lista SuperMercado',
          year: '2024',
          description: 'Uma lista de compras para produtos de supermercado',
          image: '/images/lista.png',
          link: 'https://souma-lista-e-imc.netlify.app/',
        },
      ],
    },
    courses: {
      title: 'Cursos',
      certificate: 'Certificado',
      items: [
        {
          id: '1',
          name: 'Curso WebDesign',
          progress: 100,
          certificateUrl: 'https://cursos.dankicode.com/api/certificados/6f57ce6a-525f-4f1e-a18c-56ead359a373',
        },
        {
          id: '2',
          name: 'Curso Banco de Dados',
          progress: 100,
          certificateUrl: 'https://cursos.dankicode.com/api/certificados/d8e21d87-2307-4ab7-a242-e7cf4d5d7508',
        },
      ],
    },
    contact: {
      title: 'Contato',
      subtitle: 'Vamos trabalhar juntos?',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      courses: 'Courses',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Full Stack Developer',
      description: 'Full Stack Developer with experience in production environments, working at a logistics startup developing web applications, automations and data integrations.',
      cta: 'View Projects',
    },
    about: {
      title: 'About Me',
      content: `Main stack: Laravel, PHP, Python, JavaScript and MySQL. Experience with MVC architecture and gradual migration to Service/Repository pattern for better separation of concerns and scalability.

On the back-end, I developed Python automations for collecting and processing logistics data, performing automated queries on shipping lines systems to obtain routes, freight values and ship prices.

Experience with AWS (EC2, RDS, S3 and Secrets Manager), including environment management, sensitive variables, sandbox environment cloning.

On the front-end, working with Laravel Blade and knowledge of Vue.js, React and Tailwind CSS.

Graduated from Technical High School in IT at Colégio Cotemig and pursuing a degree in Information Systems at PUC Minas.`,
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project',
      items: [
        {
          id: '1',
          name: 'Hikki Bot',
          year: '2020-2021',
          description: 'A Bot developed for Discord with various features',
          image: '/images/mini_hiki_cool.png',
          link: '#',
        },
        {
          id: '2',
          name: 'Kazizas',
          year: '2023',
          description: 'Complete E-Commerce with Front-End only',
          image: 'https://portfolio-feio-dms.netlify.app/assets/kazizas.png',
          link: 'https://kazizas.netlify.app/camisas/masculinos/',
        },
        {
          id: '3',
          name: 'Grocery List',
          year: '2024',
          description: 'A shopping list for grocery products',
          image: '/images/lista.png',
          link: 'https://souma-lista-e-imc.netlify.app/',
        },
      ],
    },
    courses: {
      title: 'Courses',
      certificate: 'Certificate',
      items: [
        {
          id: '1',
          name: 'WebDesign Course',
          progress: 100,
          certificateUrl: 'https://cursos.dankicode.com/api/certificados/6f57ce6a-525f-4f1e-a18c-56ead359a373',
        },
        {
          id: '2',
          name: 'Database Course',
          progress: 100,
          certificateUrl: 'https://cursos.dankicode.com/api/certificados/d8e21d87-2307-4ab7-a242-e7cf4d5d7508',
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's work together?",
    },
  },
}

