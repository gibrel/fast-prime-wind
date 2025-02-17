# Backend Python com FastAPI

## Configuração

Na raiz do projeto, o script de configuração gerencia as configurações do backend e do frontend, então você não precisa se preocupar com isso. No entanto, se você planeja executar o backend separadamente do frontend, você deve criar o ambiente virtual, ativá-lo, instalar as dependências e executá-lo de forma independente. Abaixo estão as instruções para cada uma dessas etapas. Se você adicionar bibliotecas adicionais ao projeto, lembre-se de atualizar o arquivo de requisitos. Certifique-se de executar esses comandos dentro da pasta backend.

```shell
cd backend/
```

### Criar e Ativar o Ambiente Virtual

Crie um ambiente virtual chamado _venv_ no diretório atual. Um ambiente virtual é uma ferramenta que ajuda a manter as dependências do projeto isoladas das dependências do sistema.

```shell
python3 -m venv venv
```

O próximo comando ativa o ambiente virtual, permitindo que você instale e use pacotes Python dentro deste ambiente isolado.

```shell
source venv/bin/activate
```

### Instalar Dependências

Após ativar o _venv_, você deve ser capaz de executar pip e python dentro do ambiente isolado. Agora podemos instalar todas as dependências listadas no arquivo requirements.txt. Essas dependências são necessárias para o funcionamento correto do projeto.

```shell
pip install -r requirements.txt
```

## Executar

O próximo comando inicia o servidor FastAPI usando Uvicorn. A opção --reload faz com que o servidor reinicie automaticamente sempre que você fizer alterações no código, facilitando o desenvolvimento.

```shell
uvicorn main:app --reload
```

### Atualizar o Arquivo de Requisitos

Primeiro, você precisa instalar ferramentas que ajudam a gerenciar e atualizar as dependências do projeto. Essas ferramentas são pipreqs e pip-tools.

```shell
pip install pipreqs pip-tools
```

Em seguida, você gerará um arquivo requirements.in com base nas importações do seu código usando pipreqs. E então converterá requirements.in em requirements.txt usando pip-compile, garantindo que todas as dependências estejam listadas com suas versões específicas.

```shell
pipreqs --savepath=requirements.in && pip-compile -q --no-annotate
```

- Se o pacote _uvicorn_ estiver faltando, adicione-o manualmente ao arquivo requirements.txt para evitar erros.

[Voltar](../README.pt.md)

|  |  |  |  |  |
|-----:|-----:|-----:|-----:|-----:|
| [English](README.en.md) |  [Português](README.pt.md) | [Español](README.es.md) | [Français](README.fr.md) | [简体中文](README.zh.md) |
