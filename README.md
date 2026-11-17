# 📸 Sujeitogram — Réplica de Interface Web (Instagram Clone)

<p align="center"> <img src="./assets/logo.png" alt="Sujeitogram Logo" width="250"> </p>

<p align="center"> <img src="[https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)" alt="HTML5"> <img src="[https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&amp;logo=css3&amp;logoColor=white](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)" alt="CSS3"> <img src="[https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)" alt="JavaScript"> <img src="[https://img.shields.io/badge/Front--End-263238?style=for-the-badge](https://img.shields.io/badge/Front--End-263238?style=for-the-badge)" alt="Front-End"> <img src="[https://img.shields.io/badge/Status-Concluído-2EA44F?style=for-the-badge](https://img.shields.io/badge/Status-Concluído-2EA44F?style=for-the-badge)" alt="Status Concluído"> <a href="[https://projeto-sujeitogram.vercel.app/](https://projeto-sujeitogram.vercel.app/)" target="\_blank"> <img src="[https://img.shields.io/badge/Vercel-000000?style=for-the-badge&amp;logo=vercel&amp;logoColor=white](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)" alt="Vercel"> </a> </p>

<p align="center"> <a href="[https://projeto-sujeitogram.vercel.app/](https://projeto-sujeitogram.vercel.app/)" target="\_blank"> <img src="[https://img.shields.io/badge/🌐_Acessar_Projeto-000000?style=for-the-badge](https://img.shields.io/badge/🌐_Acessar_Projeto-000000?style=for-the-badge)" alt="Acessar Projeto Online"> </a> </p>

<p align="center"> <a href="#-sobre-o-projeto"><img src="[https://img.shields.io/badge/Sobre-263238?style=for-the-badge](https://img.shields.io/badge/Sobre-263238?style=for-the-badge)" alt="Sobre"></a> <a href="#-interfaces-desenvolvidas"><img src="[https://img.shields.io/badge/Interfaces-37474F?style=for-the-badge](https://img.shields.io/badge/Interfaces-37474F?style=for-the-badge)" alt="Interfaces"></a> <a href="#-funcionalidades"><img src="[https://img.shields.io/badge/Funcionalidades-263238?style=for-the-badge](https://img.shields.io/badge/Funcionalidades-263238?style=for-the-badge)" alt="Funcionalidades"></a> <a href="#-tecnologias-e-conceitos"><img src="[https://img.shields.io/badge/Tecnologias-37474F?style=for-the-badge](https://img.shields.io/badge/Tecnologias-37474F?style=for-the-badge)" alt="Tecnologias"></a> <a href="#-estrutura-do-projeto"><img src="[https://img.shields.io/badge/Estrutura-263238?style=for-the-badge](https://img.shields.io/badge/Estrutura-263238?style=for-the-badge)" alt="Estrutura"></a> <a href="#-como-executar"><img src="[https://img.shields.io/badge/Execução-37474F?style=for-the-badge](https://img.shields.io/badge/Execução-37474F?style=for-the-badge)" alt="Execução"></a> <a href="#-aprendizados"><img src="[https://img.shields.io/badge/Aprendizados-263238?style=for-the-badge](https://img.shields.io/badge/Aprendizados-263238?style=for-the-badge)" alt="Aprendizados"></a> </p>

---

## 📌 Sobre o Projeto

O **Sujeitogram** é um projeto de desenvolvimento front-end que reproduz elementos visuais, interações e fluxos de navegação de uma rede social inspirada no Instagram.

Desenvolvido durante o percurso de aprendizagem na plataforma **Sujeito Programador**, o projeto reúne três interfaces integradas: autenticação, cadastro de usuários e feed de publicações interativo.

A proposta explora a construção de interfaces modernas e responsivas inspiradas em aplicações reais, aplicando HTML5 semântico, CSS3 com variáveis globais e manipulação do DOM com JavaScript puro.

---

## 🚀 Interfaces Desenvolvidas

A aplicação é composta por três páginas HTML integradas, cada uma com uma finalidade específica.

### 1. Página de Login — `index.html`

Interface inicial de autenticação, organizada em duas colunas, com painel de acesso e elementos informativos.

- Formulário de login com validação de campos obrigatórios.
- Links de navegação para cadastro e acesso ao feed.
- Seção informativa para download de aplicativos (App Store e Google Play).
- Layout responsivo que adapta os painéis para dispositivos móveis.

### 2. Página de Cadastro — `signup.html`

Interface destinada à criação de novos usuários, com formulário estruturado e elementos de autenticação externa.

- Formulário de cadastro com campos validados.
- Botão de autenticação externa via Facebook.
- Divisor visual e links de navegação entre login e cadastro.

### 3. Feed de Publicações — `feed.html`

Interface inspirada no feed de uma rede social, organizada em cartões modernos e cabeçalho fixo (`sticky`).

- Cabeçalho fixo no topo durante a rolagem da página.
- Apresentação de publicações em cartões individuais com bordas suaves e sombras.
- Identificação dos perfis responsáveis pelo conteúdo (`Dev. Rafael Santana`, `Sujeito Programador` e `Luiz Felipe`) com avatares ajustados via `object-fit`.
- Botões interativos de **Curtir** e **Repostar** com feedback visual dinâmico.

---

## 🎮 Funcionalidades

- **Autenticação e Cadastro:** interfaces com formulários e validação de campos.
- **Navegação entre páginas:** integração dos fluxos de login, cadastro e feed.
- **Feed em Cartões:** organização visual de conteúdos em cartões responsivos com cabeçalho fixo.
- **Interatividade:** alternância de estado nos botões _Curtir_ (`Curtido`) e _Repostar_ (`Repostado`) via JavaScript.
- **Design Responsivo:** adaptação para desktops, tablets e smartphones com media queries.
- **Identidade Visual Unificada:** utilização de variáveis CSS (`:root`) para padronizar cores, bordas, sombras e espaçamentos.
- **Recursos Locais:** carregamento organizado de imagens e avatares armazenados na estrutura do projeto.

---

## 🛠️ Tecnologias e Conceitos

### Tecnologias Utilizadas

| Tecnologia            | Aplicação no Projeto                                                          |
| :-------------------- | :---------------------------------------------------------------------------- |
| **HTML5**             | Estruturação semântica (`header`, `main`, `article`, `footer`) e formulários. |
| **CSS3**              | Variáveis globais, design em cartões, responsividade e transições suaves.     |
| **JavaScript (ES6+)** | Manipulação do DOM e eventos de clique nos botões de interação do feed.       |
| **Flexbox**           | Distribuição e alinhamento flexível dos elementos nas interfaces.             |

### Conceitos Técnicos Aplicados

- Estruturação semântica com elementos modernos do HTML5.
- Unificação e padronização de estilos com variáveis CSS.
- Uso de `object-fit: cover` para evitar distorções em avatares e imagens de publicações.
- Posicionamento `sticky` no cabeçalho do feed.
- Manipulação de classes e textos dinâmicos via `addEventListener` e `classList.toggle`.
- Design responsivo adaptado para diferentes resoluções de tela.
- Separação entre estrutura, apresentação e comportamento da aplicação.

### Organização dos Estilos e Scripts

O projeto centraliza a estilização e o comportamento em arquivos dedicados:

- `style.css`: folha de estilo utilizada nas interfaces de autenticação e cadastro.
- `feed.css`: folha de estilo específica para a interface de publicações.
- `script.js`: script responsável pela interatividade dos botões de curtir e repostar no feed.

---

## 🌐 Acesse o Projeto

A aplicação está publicada na **Vercel** e pode ser acessada diretamente pelo navegador.

<p align="center"> <a href="[https://projeto-sujeitogram.vercel.app/](https://projeto-sujeitogram.vercel.app/)" target="\_blank"> <img src="[https://img.shields.io/badge/VERCEL-000000?style=for-the-badge&amp;logo=vercel&amp;logoColor=white](https://img.shields.io/badge/VERCEL-000000?style=for-the-badge&logo=vercel&logoColor=white)" alt="Projeto publicado na Vercel"> </a> </p>

**Link de acesso:** [https://projeto-sujeitogram.vercel.app/](https://projeto-sujeitogram.vercel.app/)

---

## 📂 Estrutura do Projeto

```text
📦 projeto-sujeitogram
│
├── 📁 assets/
│   ├── 📁 fotoPerfil/
│   │   └── Imagens dos perfis de usuários
│   ├── 📁 postFeed/
│   │   └── Imagens das publicações
│   ├── 📄 logo.png
│   ├── 📄 main-foto.png
│   ├── 📄 appstore.png
│   └── 📄 googleplay.png
│
├── 📄 index.html
├── 📄 signup.html
├── 📄 feed.html
├── 📄 style.css
├── 📄 feed.css
├── 📄 script.js
└── 📄 README.md
```

---

## 💻 Como Executar

### Pré-requisitos

- Navegador atualizado.
- Git instalado.
- Visual Studio Code (opcional).

### 1. Clonar o Repositório

```bash
git clone URL-DO-REPOSITORIO.git
```

### 2. Acessar a Pasta do Projeto

```bash
cd projeto-sujeitogram
```

### 3. Executar a Aplicação

Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** no Visual Studio Code.

Para visualizar as demais interfaces, acesse:

- `signup.html` — página de cadastro.
- `feed.html` — feed de publicações interativo.

Por se tratar de um projeto front-end estático, não é necessário instalar dependências ou configurar um servidor de backend.

---

## 🧠 Aprendizados

O desenvolvimento e a refatoração do Sujeitogram proporcionaram a aplicação prática de conceitos fundamentais da construção de interfaces web modernas:

- **HTML5 Semântico:** uso de elementos estruturais como `article`, `main` e `button` para organização do conteúdo.
- **CSS3 Moderno:** centralização de estilos com variáveis CSS, sombreamento, cabeçalho `sticky` e responsividade.
- **JavaScript Interativo:** implementação de comportamentos dinâmicos sem dependência de bibliotecas externas.
- **Arquitetura Front-End:** organização de diretórios, utilização de caminhos relativos e separação entre estrutura (HTML), estilo (CSS) e comportamento (JavaScript).

O projeto contribuiu para consolidar conhecimentos em desenvolvimento front-end, construção de interfaces responsivas e organização de aplicações web.

---

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack e Engenharia de Software.

<p align="center"> <a href="[https://github.com/devRafaelSantana-Code](https://github.com/devRafaelSantana-Code)" target="\_blank"> <img src="[https://img.shields.io/badge/GitHub-181717?style=for-the-badge&amp;logo=github&amp;logoColor=white](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)" alt="GitHub"> </a> </p>

---

<p align="center">
&#x20; Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, CSS Grid, Flexbox e desenvolvimento de interfaces responsivas.
</p>
