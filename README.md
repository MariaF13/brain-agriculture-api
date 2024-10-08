# Brain Agriculture

Este projeto é uma plataforma para cadastro e gerenciamento de produtores rurais, com um backend desenvolvido em Node.js utilizando PostgreSQL e TypeORM. A plataforma permite cadastrar, editar, excluir produtores, bem como acessar um dashboard com estatísticas e gráficos sobre as fazendas.

## Tecnologias Utilizadas

- Node.js
- PostgreSQL
- TypeORM
- Express
- TypeScript
- Jest (para testes unitários)
- ESLint (com configurações padrão standard-with-typescript e prettier)

## Funcionalidades

- Cadastro de Produtores Rurais: Permite cadastrar novos produtores com informações como CPF, CNPJ, nome do produtor, nome da fazenda, cidade, estado, área total em hectares, área arável, área de vegetação, entre outras.
- Edição e Exclusão de Produtores: Suporte para edição e exclusão de registros existentes.
- Dashboard: Apresenta estatísticas como o total de fazendas em quantidade e hectares.
- Relação de Culturas Plantadas: Cada produtor rural pode ser relacionado a várias culturas plantadas.
- Consultas Paginadas: Implementação de paginação para carregar dados de produtores rurais.
- Validação Simples de CPF/CNPJ: O sistema valida apenas o tamanho do CPF e CNPJ, garantindo que ao menos um dos dois seja inserido.

## Instalação

1. Clone o repositório para sua máquina local:
   git clone https://github.com/MariaF13/brain-agriculture-api.git

```bash
  cd brain-agriculture-api
  npm install
  npm run dev
```

2. Para derrubar o docker e subi-lo

```bash
  docker-compose down
  docker-compose up -d
```

3. Para rodar o Eslint

```bash
  npx eslint "src/**/*.{ts,js}" --fix // Arquivos da pasta src
  npx eslint "tests/**/*.{ts,js}" --fix // Arquivos da pasta tests
  npx eslint "*.js" --fix  // Arquivos na raiz do projeto
```

4. Para rodar os testes unitários

```bash
  npm run test
  npm run test:coverage //Relatório da cobertura de testes
```
