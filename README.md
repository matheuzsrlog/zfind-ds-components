
# 🔎 Find components design-system

Este projeto é destinado a mapear os componentes do design-system que são
usados nos projetos da logcomex.

### Passos necessários:
1. Clone o repositório no mesmo diretório do projeto que deseja mapear os componentes.
2. Realize os inputs/alterações que julgar necessário no arquivo `inputs.js`, para rodar o projeto.
  - Inserção do nome do repositório;
  - Possíveis alterações ou inclusões de novos diretórios a serem buscados;

### Inserção do nome do repositório:

```javascript
// input.js
const currentRepository = 'repository-name'
```

### Inclusão de novos diretórios a serem buscados:

```javascript
// input.js
const searchPaths = [
  '/pages/**/*.vue',
  '/layouts/**/*.vue',
  '/app/**/components/**/*.vue',
  ...
]
```
