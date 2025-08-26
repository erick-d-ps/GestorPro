# GESTOR PRO


![Next.JS](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![tailwind css](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![mongodb](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)

**GESTOR PRO** é uma plataforma web criada com o objetivo de otimizar a gestão de chamados e clientes para empresas, proporcionando um sistema organizado e eficiente.

Este projeto foi desenvolvido como parte de meus estudos em desenvolvimento web, aplicando conhecimentos práticos para criar uma solução funcional e robusta. 

👉 Visite: [https://gestor-pro-roan.vercel.app/](https://gestor-pro-roan.vercel.app/)

---

## ✨ Funcionalidades

- **Página Inicial:** Uma landing page com uma apresentação clara da plataforma.

- **Abertura de Chamados Pública:** A página exclusiva /open permite que clientes abram um chamado sem a necessidade de autenticação, apenas informando o e-mail.  

- **Autenticação:** Login seguro com conta Google, utilizando NextAuth.

- **Dashboard:** Uma área exclusiva onde o usuário pode gerenciar todas as operações.

- **Gestão** de Clientes: Página dedicada para visualizar, cadastrar e remover dados de clientes.

- **Gestão de Chamados:** Página para visualizar os chamados em aberto, ver detalhes e alterar o status.

- **Persistência de Dados:** Todas as informações de clientes e chamados são salvas em um banco de dados para garantir a segurança e a acessibilidade.

- **Rotas Protegidas:** Áreas críticas, como o Dashboard, são acessíveis apenas por usuários autenticados.



---

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/): (App Router, Server/Client Components): A base da aplicação, aproveitando os novos paradigmas do Next.js para renderização otimizada e gestão de rotas de API para o backend.  
- [React](https://react.dev/): Biblioteca fundamental para a construção de uma interface de usuário interativa e dinâmica.
- [TypeScript](https://www.typescriptlang.org/): Garantindo maior segurança e escalabilidade ao código através da tipagem estática.
- [Tailwind CSS](https://tailwindcss.com/): Framework de CSS para a estilização e responsividade rápida e eficiente da interface do usuário.
- [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database): Serviço de banco de dados Mongodb na nuvem, utilizado para armazenar e gerenciar todas as informações de clientes e chamados.
- [Prisma](https://www.prisma.io/docs): ORM (Object-Relational Mapper) que facilita a interação com o banco de dados de forma segura e intuitiva.
- [NextAuth](https://next-auth.js.org/): Biblioteca de autenticação para Next.js, permitindo o login seguro com provedores como o Google.

 

---



## 🚀 Como Rodar o Projeto Localmente

```bash
# Clone o repositório
git clone https://github.com/erick-d-ps/GestorPro.git

# Entre no diretório do projeto
cd gestor-pro

# Instale as dependências
npm install

# Execute o projeto
npm run dev

