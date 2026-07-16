import { Language } from '../i18n/translations'
import { Project } from '../types/projects'

const projectCopyOverrides: Record<string, Record<Language, {
  title: string
  shortDescription: string
  descriptionParagraphs: string[]
}>> = {
  'user-management': {
    pt: {
      title: 'User Management Project',
      shortDescription: 'Uma aplicação full stack de gerenciamento de usuários com React, Vite, Node.js, Express e MongoDB.',
      descriptionParagraphs: [
        'Uma aplicação full stack de gerenciamento de usuários desenvolvida com React, Vite, Node.js, Express, Prisma ORM e MongoDB. O projeto oferece uma experiência completa de CRUD por meio de um frontend responsivo integrado a uma API REST.',
        'Desenvolvido para demonstrar práticas modernas de desenvolvimento full stack, o projeto evidencia a integração entre frontend e backend, a construção de APIs REST, o gerenciamento de banco de dados com MongoDB e a utilização do Prisma como ORM, proporcionando uma experiência de uso limpa, intuitiva e eficiente.',
      ],
    },
    en: {
      title: 'User Management Project',
      shortDescription: 'A full-stack user management application built with React, Vite, Node.js, Express, and MongoDB.',
      descriptionParagraphs: [
        'A full-stack user management application built with React, Vite, Node.js, Express, Prisma ORM, and MongoDB. The project provides a complete CRUD experience through a responsive frontend integrated with a RESTful API.',
        'Developed to demonstrate modern full-stack development practices, the project highlights frontend-backend integration, REST API design, database management with MongoDB, and the use of Prisma as an ORM, delivering a clean, intuitive, and efficient user experience.',
      ],
    },
  },
}

export const getProjectCopy = (project: Project, language: Language) => {
  const override = projectCopyOverrides[project.slug]?.[language]

  return {
    title: override?.title ?? project.title,
    shortDescription: override?.shortDescription ?? project.shortDescription,
    descriptionParagraphs: override?.descriptionParagraphs ?? null,
  }
}
