# Diretório de Usuários

Aplicação web desenvolvida com **React, TypeScript e Vite**, com o objetivo de consumir uma API REST pública e apresentar informações de usuários em uma interface simples, responsiva e organizada.

Projeto desenvolvido como parte de um desafio técnico para uma vaga de Desenvolvedor Front-end Júnior.

## Tecnologias utilizadas

- **React:** construção de interfaces por meio de componentes.
- **TypeScript:** tipagem de dados, propriedades e estados.
- **Vite:** ambiente de desenvolvimento e ferramenta de build.
- **CSS3:** estilização, responsividade e transições.
- **Git e GitHub:** controle de versão e gerenciamento do histórico de desenvolvimento.

## Funcionalidades

- Listagem de usuários obtidos por API REST.
- Exibição de nome e e-mail.
- Pesquisa de usuários por nome.
- Restauração automática da lista quando a pesquisa é apagada.
- Modal com informações detalhadas: nome, e-mail, telefone, empresa e cidade.
- Indicadores de carregamento e tratamento de erros de requisição.
- Interface adaptável a diferentes tamanhos de tela.

## API utilizada

A aplicação utiliza a API pública **JSONPlaceholder**.

Endpoint: `https://jsonplaceholder.typicode.com/users`

Os dados são obtidos por uma requisição HTTP GET. O sistema utiliza essas informações para apresentar os usuários e permitir consultas locais, sem necessidade de um banco de dados próprio.

## Como executar o projeto

**Pré-requisitos:** Node.js e npm instalados.

**1. Clonar o repositório**

`git clone https://github.com/SEU-USUARIO/usuarios-app.git`

**2. Acessar a pasta**

`cd usuarios-app`

**3. Instalar as dependências**

`npm install`

**4. Iniciar o servidor de desenvolvimento**

`npm run dev`

Depois, abra no navegador o endereço local informado pelo Vite, normalmente `http://localhost:5173/`.

## Comandos disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run lint` | Executa a análise estática com ESLint |
| `npm run preview` | Visualiza localmente o build gerado |

## Versionamento de código

O projeto utiliza **Git** para controle de versões e **GitHub** para armazenamento do repositório remoto.

A estratégia adotada é registrar alterações em commits pequenos e descritivos, organizados conforme a finalidade da modificação.

Padrões de mensagem utilizados:

- `feat:` implementação de funcionalidades.
- `fix:` correção de problemas.
- `refactor:` reorganização do código sem mudança de comportamento.
- `style:` alterações visuais e de estilização.
- `docs:` atualizações da documentação.

Essa organização facilita a identificação de mudanças, o acompanhamento da evolução do projeto e a manutenção do código.

## Organização do código

A aplicação utiliza componentes React para separar responsabilidades, evitando concentrar toda a interface em um único arquivo.

O componente principal gerencia os estados e o fluxo dos dados, enquanto componentes reutilizáveis são responsáveis pela apresentação de elementos da interface.

## Objetivo técnico

Este projeto foi desenvolvido para praticar conceitos de desenvolvimento Front-end, incluindo consumo de APIs, programação assíncrona, tipagem com TypeScript, gerenciamento de estados e componentização.

O foco foi construir uma aplicação funcional, compreensível e de fácil manutenção.
