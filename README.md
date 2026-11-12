# 🚀 Checklist Operacional - Troca de Servidor (Check e SGF)

Aplicação web responsiva desenvolvida para auxiliar a equipe de suporte da Consys durante a migração de servidores em campo, garantindo que nenhuma etapa da Base de Conhecimento seja pulada.

## ⚙️ Funcionalidades

- **Cálculo Automático:** Barras de progresso independentes de 0 a 100% para cada uma das 6 fases de migração.
- **Persistência Local (Offline):** O progresso é salvo instantaneamente no `localStorage` do navegador. Se a aba for fechada sem querer, os dados não são perdidos.
- **Modo Dark/Light:** Interface clean com detalhes em dourado, alternável com um clique para melhorar o contraste na tela em diferentes iluminações.
- **100% Responsivo:** Estrutura otimizada para uso tanto na tela do notebook quanto no celular durante a correria da loja.

## 🛠️ Tecnologias Utilizadas

- HTML5 Semântico
- CSS3 (Variáveis nativas, Layout Responsivo)
- JavaScript Vanilla (Manipulação de DOM, `localStorage`, `Set`)

## 🚀 Como colocar no ar (GitHub Pages)

1. Crie um novo repositório público no GitHub chamado `checklist-migracao`.
2. Faça o upload dos arquivos do projeto (`index.html`, `style.css`, `app.js`, `data.js` e `README.md`).
3. No seu repositório, clique na aba **Settings** (Configurações).
4. No menu lateral esquerdo, clique em **Pages**.
5. Na seção "Build and deployment", mude o "Source" de "None" para a branch `main` e clique em **Save**.
6. Em cerca de um minuto, o GitHub fornecerá o link da sua aplicação hospedada.
