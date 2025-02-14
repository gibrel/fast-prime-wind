# PrimeVue Frontend com TailwindCSS

## Configuração

No diretório raiz do projeto, o script de configuração gerencia as configurações do backend e do frontend, então você não precisa se preocupar com isso. No entanto, se você planeja executar o frontend separadamente do backend, deve configurar o frontend você mesmo, seguindo os passos abaixo. Certifique-se de estar na pasta do frontend antes de executar os comandos.

```shell
cd frontend/
```

### Instalar Dependências

Instale todas as dependências necessárias listadas no arquivo `package.json`. Essas dependências são essenciais para o funcionamento correto do projeto.

```shell
npm install
```

### Executar o Projeto

Inicie o servidor de desenvolvimento. O comando abaixo inicia o servidor e permite que você veja as mudanças em tempo real enquanto desenvolve.

```shell
npm run dev
```

### Atualizar Dependências

Para manter as dependências do projeto atualizadas, você pode usar o comando abaixo. Ele verifica e instala as versões mais recentes das dependências listadas no `package.json`.

```shell
npm update
```

## Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto para ajudar a entender onde cada parte do código está localizada.

```text
📁frontend/
├─📁 public/ # Arquivos públicos, a serem publicados
├─📁 src/ # Código fonte do projeto
│ ├─📁 assets/ # Arquivos estáticos, como imagens e estilos
│ ├─📁 components/ # Componentes reutilizáveis do Vue.js
│ ├─📁 presets/ # Arquivos compilados de temas do TailwindCSS
│ ├─📄 App.vue # Componente raiz do Vue.js
│ └─📄 main.ts # Arquivo de entrada principal
├─📄 package.json # Arquivo de configuração do npm
├─📄 ... # outros arquivos de configuração
└─📄 README.md # Documentação do projeto
```

> O TailwindCSS já está configurado para usar o tema Aura. Ele está presente na pasta presets. Se você desejar instalar outro tema, coloque-o lá, ao lado da pasta aura.
