# 🎨 Ateliê Landing Page

![Status](https://img.shields.io/badge/status-Em_Desenvolvimento-green)
![Runtime](https://img.shields.io/badge/tech-Vanilla_JS-yellow)
![Styling](https://img.shields.io/badge/styling-CSS_Tokens_&_Themes-blue)
![Arquitetura](https://img.shields.io/badge/arquitetura-Component_Based-orange)

---

## 📖 Descrição do Projeto

**Ateliê Landing Page** é uma interface web leve e moderna desenvolvida com foco em **Clean Architecture** no front-end, dispensando a necessidade de frameworks pesados. Utilizando **Vanilla JavaScript** e uma estrutura de **CSS Design Tokens**, o projeto implementa um sistema de carregamento dinâmico de componentes (`loadComponent`).
A paleta de cores (tons terrosos, terracota e neutros quentes) foi desenhada para transmitir a essência artesanal e elegante do ateliê.

---

## 📦 Tecnologias

* HTML5
* CSS3 (com organização modular + temas)
* JavaScript (ES Modules)
* Vite
* ESLint
* Prettier

---

## 📋 Requisitos

Antes de começar, você precisa ter instalado:

* Node.js (versão 18+ recomendada)
* npm (já vem com o Node)

Verifique com:

```bash
node -v
npm -v
```

---

## ⚙️ Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/AtelierWeb.git
```

### 2. Acessar a pasta

```bash
cd AtelierWeb
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Rodar o servidor de desenvolvimento

```bash
npm run dev
```

👉 O projeto estará disponível em algo como:

```
http://localhost:5173
```

---

## 🏗️ Estrutura do projeto

```bash
src/
├── assets/          # imagens, ícones, etc
│
├── components/      # componentes reutilizáveis
│   └── navbar/
│
├── pages/           # páginas da aplicação
│   └── home/
│
├── styles/
│   ├── base/        # reset + global
│   ├── tokens/      # variáveis (cores, etc)
│   └── themes/      # light / dark
│
├── utils/           # funções utilitárias
│
└── main.js          # ponto de entrada
```

---


## 🧩 Componentização

Os componentes são carregados dinamicamente via JavaScript:

```js
loadComponent('/src/components/navbar/navbar.html', '#app');
```

Isso permite reutilização sem frameworks.

---

## 🧹 Scripts disponíveis

```bash
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção
npm run preview   # visualizar build
```

---

## 🧼 Qualidade de código

* ESLint → análise de código
* Prettier → formatação automática

Rodar manualmente:

```bash
npm run lint
npm run format
```

---

## 💡 Objetivo

Este projeto tem como objetivo:



---

## 📌 Observações


---


