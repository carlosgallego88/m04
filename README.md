# Módulo 04 - React

Trabalho realizado por: *Carlos Gallego* **882 155**

Curso: Informática  
Data de submissão: 29/10/2026

## Exercícios realizados

- EX01 - First Component
- EX02 - Props
- EX03 - Component Tree
- EX04 - State
- EX05 - React Forms
- EX06 - useEffect
- EX07 - React Router

## EX01 - First Component

Neste exercício foi criada uma aplicação React composta por vários componentes.

Foram criados os componentes:

- App
- Header
- Navigation
- Main
- Footer

Cada componente representa uma parte diferente da interface da aplicação.

## EX02 - Props

Neste exercício foi criado um componente reutilizável chamado ProductCard.

Cada produto recebe através de props:

- name
- price
- category
- image

O mesmo componente é reutilizado para apresentar diferentes produtos.

Também foi criada uma variante visual para destacar um dos produtos.

## EX03 - Component Tree

Neste exercício foi criada uma aplicação de produtos organizada numa árvore de componentes.

A estrutura utilizada foi:

App
- Header
- ProductList
  - ProductCard
- Footer

O componente ProductList apresenta vários produtos através do componente ProductCard.

## EX04 - State

Neste exercício foi utilizado o hook useState.

Foi criado um contador com as opções de aumentar, diminuir e colocar o valor a zero.

Também foi criada uma lista dinâmica onde é possível adicionar e eliminar elementos.

Foram utilizados vários estados para controlar os diferentes dados da aplicação.

## EX05 - React Forms

Neste exercício foi criado um formulário de registo utilizando React.

Foram utilizados inputs controlados, validação, mensagens de erro e submit.

Foram realizadas validações para:

- nome obrigatório
- email válido
- palavra-passe com pelo menos 6 caracteres

Também foi criado um componente reutilizável chamado FormField.

## EX06 - useEffect

Neste exercício foi utilizada uma API externa para obter dados de produtos.

Foram utilizados:

- useEffect
- useState
- fetch

A aplicação controla os estados de loading, success e error.

Depois de os dados serem recebidos, os produtos são apresentados dinamicamente na página.

## EX07 - React Router

Neste exercício foi criada uma SPA utilizando React Router.

Foram criadas as rotas:

- /
- /products
- /products/:id
- /contact
- /about

Foi utilizado useParams para obter o identificador do produto através da rota dinâmica.

Também foi criada uma página de erro 404 para rotas que não existem.