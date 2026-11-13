
# Diretório de Usuários

Aplicação web desenvolvida com React e TypeScript para consulta e visualização de usuários a partir de uma API REST pública.

O projeto permite listar usuários, realizar pesquisas por nome e consultar informações individuais por meio de uma interface responsiva. A implementação contempla gerenciamento de estados, tratamento de erros, componentização e tipagem estática.

## Tecnologias

- **React** — construção da interface e gerenciamento de estado.
- **TypeScript** — tipagem de dados, componentes e propriedades.
- **Vite** — ambiente de desenvolvimento e geração da versão de produção.
- **CSS3** — estilização, responsividade e feedback visual.
- **Fetch API** — comunicação HTTP com a API externa.
- **ESLint** — análise estática do código.

## Funcionalidades

- Listagem de usuários obtidos de uma API REST.
- Pesquisa por nome, sem diferenciação entre letras maiúsculas e minúsculas.
- Atualização da listagem conforme o termo pesquisado.
- Restauração da listagem completa ao limpar a pesquisa.
- Visualização de detalhes individuais em um modal.
- Exibição de nome, e-mail, telefone, empresa e cidade.
- Indicadores visuais de carregamento.
- Tratamento de falhas na requisição HTTP.
- Mensagem específica quando nenhum usuário corresponde à pesquisa.
- Interface adaptável a diferentes tamanhos de tela.

## Instalação e execução

### Pré-requisitos

- Node.js compatível com a versão do Vite utilizada.
- npm.

### 1. Clonar o repositório

```bash
git clone https://github.com/JoaoPedro1402/usuarios-app.git
```

### 2. Acessar o diretório

```bash
cd usuarios-app
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Iniciar o ambiente de desenvolvimento

```bash
npm run dev
```

O Vite informará no terminal o endereço local para acessar a aplicação.

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Executa a compilação TypeScript e gera o build de produção. |
| `npm run preview` | Permite visualizar localmente o build gerado. |
| `npm run lint` | Executa a análise estática com ESLint. |

## Estrutura do projeto

```text
src/
├── components/
│   ├── UserCard.tsx
│   └── UserModal.tsx
├── types/
│   └── Usuario.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

### Organização dos arquivos

- **App.tsx:** coordena a consulta à API, os estados da aplicação, a pesquisa e a seleção de usuários.
- **UserCard.tsx:** componente responsável pela apresentação individual dos usuários na listagem.
- **UserModal.tsx:** componente de visualização das informações detalhadas de um usuário.
- **Usuario.ts:** define a estrutura dos dados utilizados pela aplicação.
- **App.css e index.css:** contêm os estilos da interface e as regras de responsividade.
- **main.tsx:** ponto de entrada da aplicação React.

## Integração com a API

Os dados são obtidos da API pública JSONPlaceholder:

```http
GET https://jsonplaceholder.typicode.com/users
```

A requisição é realizada por meio da Fetch API durante o carregamento inicial da aplicação.

Após a resposta, os dados são armazenados no estado do React e utilizados na renderização dos componentes.

A pesquisa é executada localmente sobre os dados carregados, sem necessidade de uma nova requisição HTTP a cada consulta.

### Tratamento de estados

A aplicação considera os seguintes cenários:

- **Carregamento:** exibição de um indicador enquanto a requisição está em andamento.
- **Sucesso:** apresentação dos usuários retornados pela API.
- **Erro:** exibição de uma mensagem quando a requisição falha ou retorna um status HTTP inválido.
- **Pesquisa sem resultados:** apresentação de uma mensagem informando que nenhum usuário corresponde ao termo pesquisado.

## Decisões de implementação

A interface foi organizada em componentes para separar a apresentação dos usuários da lógica principal da aplicação.

O TypeScript é utilizado para definir a estrutura das informações recebidas da API e os contratos de propriedades dos componentes.

A pesquisa foi implementada no cliente, considerando o volume reduzido de registros disponibilizados pelo endpoint.

A estilização foi desenvolvida com CSS, sem dependência de bibliotecas adicionais de componentes.

## Escopo

Este projeto utiliza dados fictícios disponibilizados pelo JSONPlaceholder e não realiza operações de cadastro, edição ou exclusão.

A aplicação tem como finalidade demonstrar consumo de API REST, manipulação de dados, componentização e construção de interfaces com React e TypeScript.

## Autor

João Pedro Coelho

GitHub: [JoaoPedro1402](https://github.com/JoaoPedro1402)
