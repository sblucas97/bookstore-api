## CRUD Biblioteca

O projeto consiste num sistema que obtem, cria, edita e remove um livro de uma biblioteca.

Schema do livro:
{
title: string
author: string
copies: number
}

## API Backend

- Utilizar o padrão REST
  - Status code & status messages
- Definir controllers/models/rotas para obter todos os livros
- Definir controllers/models/rotas para criar um livro
- Definir controllers/models/rotas para editar um livro
- Definir controllers/models/rotas para remover um livro

## Frontend

- Clonar o boilerplate de react
- Remover items que não são necessários para POC
  - Providers
  - Suspense & lazy loads
- Criar um provider com axios
- Utilizar o dotenv para armazenar o REACT_APP_API_URL
- Definir rotas
  - GET: '/books'
  - POST: '/books'
  - PUT: '/books/:id'
  - DELETE: '/books/:id'
- Criar componentes para as rotas
  - Listar e remover livros
  - Criar e editar
