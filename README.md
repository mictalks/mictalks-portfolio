# MicTalks Portfólio

Portfólio pessoal desenvolvido com Next.js, TypeScript, Tailwind CSS e Hygraph CMS.

## Funcionalidades

- Home com apresentação, tecnologias, projetos em destaque e experiência.
- Listagem de projetos alimentada pelo Hygraph.
- Páginas dinâmicas para cada projeto.
- Formulário de contato com envio por `mailto`.
- SEO básico com metadados no App Router.

## Como rodar

```bash
yarn install
yarn dev
```

Crie um arquivo `.env.local` com as variáveis:

```bash
HYGRAPH_URL=""
HYGRAPH_TOKEN=""
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_CONTACT_EMAIL=""
```
