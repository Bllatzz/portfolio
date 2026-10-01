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
      content: `Stack principal: Laravel, PHP, Python, JavaScript e MySQL. Experiência com arquitetura MVC e  Service/Repository, visando melhor separação de responsabilidades e escalabilidade.

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
          name: 'Evobo',
          year: '2026',
          description: 'Plataforma que analisa jogos e reúne apostas indicadas por robôs, além de capturar tips de canais do Telegram.',
          image: 'https://evobo.vercel.app/evobo-icon.png',
          link: 'https://evobo.vercel.app/',
        },
        {
          id: '2',
          name: 'Setor 90',
          year: '2026',
          description: 'E-commerce de camisas e acessórios de futebol e basquete.',
          image: '/images/setor90.png',
          link: 'https://setor90store.com.br/',
        },
        {
          id: '3',
          name: 'API de Países',
          year: '2023',
          description: 'Aplicação que consome uma API de países e mostra população e área de cada um, com opção de favoritar e ver a lista de favoritos.',
          image: 'https://api-country-theta.vercel.app/assets/countryballs-91V-g3Kj.png',
          link: 'https://api-country-theta.vercel.app/',
        },
        {
          id: '4',
          name: 'Valorant Guide',
          year: '2024',
          description: 'Guia de agentes, armas e mapas do jogo Valorant.',
          image: '/images/valorant.png',
          link: 'https://valorant-guide-react.vercel.app/',
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
          name: 'Evobo',
          year: '2026',
          description: 'Platform that analyzes matches and displays bot-generated picks while capturing tips from Telegram channels.',
          image: 'https://evobo.vercel.app/evobo-icon.png',
          link: 'https://evobo.vercel.app/',
        },
        {
          id: '2',
          name: 'Setor 90',
          year: '2026',
          description: 'E-commerce for football and basketball jerseys and accessories.',
          image: '/images/setor90.png',
          link: 'https://setor90store.com.br/',
        },
        {
          id: '3',
          name: 'Countries API',
          year: '2023',
          description: 'App that consumes a countries API and shows each country\'s population and area, with the option to favorite countries and view the favorites list.',
          image: 'https://api-country-theta.vercel.app/assets/countryballs-91V-g3Kj.png',
          link: 'https://api-country-theta.vercel.app/',
        },
        {
          id: '4',
          name: 'Valorant Guide',
          year: '2024',
          description: 'Guide to the agents, weapons and maps of the game Valorant.',
          image: '/images/valorant.png',
          link: 'https://valorant-guide-react.vercel.app/',
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

