# 🎨 Ateliê Landing Page

![Status](https://img.shields.io/badge/status-Em_Desenvolvimento-green)
![Runtime](https://img.shields.io/badge/tech-Vanilla_JS-yellow)
![Styling](https://img.shields.io/badge/styling-CSS_Tokens_&_Themes-blue)
![Arquitetura](https://img.shields.io/badge/arquitetura-Vanilla_HTML_CSS_JS-orange)

---

## 📖 Descrição do Projeto

**Ateliê Landing Page** é uma interface web leve, sem framework pesado: **HTML** em `index.html`, **CSS** com tokens e temas em `src/styles`, e **JavaScript** em `src/main.js` (tema claro/escuro via `themeManager`). A marcação fica no documento principal; não há carregamento dinâmico de fragmentos HTML.
A paleta (tons terrosos, terracota e neutros quentes) transmite a identidade artesanal do ateliê.

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


## 🧩 Front-end

O ponto de entrada é `src/main.js`: importa os CSS na ordem correta e chama `initTheme()` para aplicar `data-theme` no `<html>` conforme preferência salva ou `prefers-color-scheme`. Para alternar o tema no UI, importe `toggleTheme` de `themeManager.js` e ligue a um botão.

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


