# FastPrimeWind Project Template

Um template para você iniciar rapidamente seu projeto FastAPI + PrimeVue + TailwindCSS.

## Configuração

Para configurar o projeto, siga os passos abaixo. Isso instalará todas as dependências necessárias para o frontend e o backend.

### Instalar Dependências

Execute o seguinte comando para instalar todas as dependências:

```shell
npm run setup
```

O comando chama o script `setup` no `package.json`:

```json
"scripts": {
  "setup": "npm install && cd frontend && npm install && cd ../backend && python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt"
}
```

Este script irá:

1. Instalar as dependências da raiz.
2. Navegar até o diretório do frontend e instalar suas dependências.
3. Navegar até o diretório do backend, criar e ativar um ambiente virtual, e instalar suas dependências.

### Executar o Projeto

Para iniciar o projeto, use o seguinte comando:

```shell
npm run start
```

O comando chama o script `start` no `package.json`:

```json
"scripts": {
  "start": "concurrently \"cd backend && source venv/bin/activate && uvicorn main:app --reload\" \"cd frontend && npm run dev\""
}
```

Este script chama o `concurrently` para executar simultaneamente os servidores de desenvolvimento do backend e do frontend. Ele irá:

- Navegar até o diretório do backend, ativar o ambiente virtual e iniciar o servidor FastAPI com Uvicorn.
- Navegar até o diretório do frontend e iniciar o servidor de desenvolvimento.

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto para ajudar a entender onde cada parte do código está localizada.

```text
📁project-root/
├─📁 backend/           # Código do backend com FastAPI
│ ├─📄 main.py          # Ponto de entrada para o servidor FastAPI
│ ├─📄 requirements.txt # Dependências do backend
│ └─📄 ...              # Outros arquivos do backend
├─📁 frontend/          # Código do frontend com PrimeVue e TailwindCSS
│ ├─📁 public/          # Arquivos públicos, a serem publicados
│ ├─📁 src/             # Código fonte do projeto
│ │ ├─📁 assets/        # Arquivos estáticos, como imagens e estilos
│ │ ├─📁 components/    # Componentes reutilizáveis do Vue.js
│ ├─📁 presets/         # Arquivos compilados de temas do TailwindCSS
│ │ ├─📄 App.vue        # Componente raiz do Vue.js
│ │ └─📄 main.js        # Arquivo de entrada principal
│ ├─📄 package.json     # Dependências do frontend
│ └─📄 ...              # Outros arquivos do frontend
├─📄 package.json       # Dependências e scripts da raiz
└─📄 README.md          # Documentação do projeto
```
