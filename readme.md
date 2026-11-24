# ⚜ Maestrini & Gomes — Atelier de Biscoitos

Landing page de um produto criado por alunas do curso **Técnico em Gastronomia do Senac**: um biscoito inédito de **fécula de batata, caramelo tostado e sal**, desenvolvido por **Gabriela Maestrini** e **Paula Gomes**.

As alunas precisavam desenvolver um produto e vendê-lo. Entrei no projeto para criar a página que apresenta o produto, mostra as embalagens e leva o visitante direto ao pedido pelo WhatsApp.

> Este repositório documenta o resultado e também o **processo**: do rascunho em papel, passando pela pesquisa e pela validação, até a versão final.

---

## 📌 Sumário

1. [Visão geral](#-visão-geral)
2. [Recursos](#-recursos)
3. [Tecnologias](#️-tecnologias)
4. [Estrutura de pastas](#-estrutura-de-pastas)
5. [Como executar](#-como-executar)
6. [Processo de desenvolvimento](#-processo-de-desenvolvimento)
7. [Checagens e testes](#-checagens-e-testes)
8. [Correções feitas após a validação](#-correções-feitas-após-a-validação)
9. [Personalização](#️-personalização)
10. [Aprendizados](#-aprendizados)
11. [Próximos passos](#-próximos-passos)
12. [Autoria e contato](#-autoria-e-contato)

---

## 📸 Visão geral

Página *one-page* com sete seções:

| # | Seção | Função |
|---|-------|--------|
| 1 | **Hero** | Imagem panorâmica de fundo, título de impacto e botões de ação |
| 2 | **Quem somos** | Apresentação das confeiteiras e da proposta do atelier |
| 3 | **Diferenciais** | Texto, lista de benefícios e foto com vapor animado saindo do café |
| 4 | **Vitrine** | Três linhas de embalagem; ao clicar, o produto é selecionado no pedido |
| 5 | **Nosso atelier, do seu jeito** | Três públicos: Família, Presente e Empresas |
| 6 | **Banner de fechamento** | Chamada para pedido e depoimentos |
| 7 | **Rodapé / Pedido** | Formulário que gera a mensagem para o WhatsApp, dúvidas rápidas e contato |

Há ainda um **botão flutuante de WhatsApp** visível durante toda a rolagem.

---

## ✨ Recursos

- **Pedido pelo WhatsApp:** o formulário monta uma mensagem pronta (nome, apresentação, quantidade e observação) e abre a conversa via `wa.me`.
- **Vitrine interativa:** clicar em uma embalagem seleciona a opção no formulário e rola suavemente até o pedido.
- **Vapor animado no café:** três fiapos de vapor feitos só com CSS (gradiente radial, desfoque e `@keyframes`).
- **Animação de entrada ao rolar:** blocos aparecem suavemente com `IntersectionObserver`.
- **Identidade visual consistente:** preto, dourado e creme, combinando com os rótulos das embalagens.
- **SEO e compartilhamento:** `title`, `description`, `keywords`, Open Graph e dados estruturados Schema.org (`Bakery`).
- **Acessibilidade:** títulos e rótulos para leitores de tela, foco visível no teclado, contraste revisado e respeito a `prefers-reduced-motion`.
- **Responsiva:** grid que vira coluna única em telas menores, com ajustes extras até 480px.

---

## 🛠️ Tecnologias

- **HTML5** semântico
- **CSS3**: variáveis, Grid, Flexbox, animações e `backdrop-filter`
- **JavaScript** puro, sem frameworks
- **Google Fonts:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (títulos) e [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (texto)

### Identidade visual

| Variável | Cor | Uso |
|----------|-----|-----|
| `--dark-forest` | `#171715` | Fundos escuros e textos de destaque |
| `--gold-accent` | `#E5C16C` | Botões, títulos e etiquetas |
| `--gold-strong` | `#C99E3E` | Hover e detalhes |
| `--cream-bg` | `#FAF6F0` | Seções claras |
| `--wa-green` | `#25D366` | Botão do WhatsApp |

---

## 📁 Estrutura de pastas

```
projeto/
├── index.html
├── style.css
├── script.js
├── README.md
└── imagens/
    ├── biscoitos-artesanais-panoramica.jpg.jpg
    ├── biscoito-fecula-batata-com-cafe.webp.jpg
    ├── biscoito-caramelo-tostado-sal-solapa.webp.jpeg
    ├── biscoito-fecula-batata-pote-hermetico.webp.jpeg
    ├── biscoito-artesanal-caixas-presente.webp.jpeg
    └── biscoito-gourmet-corporativo-laco.webp.jpeg
```

> ⚠️ Os nomes dos arquivos em `imagens/` precisam ser **idênticos** aos usados em `index.html` e `style.css`, incluindo `.webp.jpg` e `.webp.jpeg`. Se forem diferentes, as imagens não carregam.

---

## 🚀 Como executar

1. Baixe ou clone o projeto.
2. Garanta que a pasta `imagens/` esteja ao lado do `index.html`.
3. Abra o `index.html` no navegador **ou** use a extensão **Live Server** do VS Code (clique direito → *Open with Live Server*).

Não há dependências nem etapa de build.

---

## 🧭 Processo de desenvolvimento

### 1. Rascunho em papel
Tudo começou com um esboço à mão: fundo com imagem panorâmica, apresentação do trabalho das duas confeiteiras, texto com imagem, três imagens de embalagem, informações para Família / Presente / Empresa, formulário e WhatsApp.

| Rascunho | Resultado final |
|----------|-----------------|
| Fundo com imagem panorâmica | Hero com "O sabor inédito que derrete na boca" |
| Falando sobre o trabalho das duas | Seção "Quem somos" |
| Texto + imagem que desperta desejo | "Feito à mão, do café em família ao presente corporativo" |
| Três imagens | Vitrine com três linhas de embalagem |
| Família / Presente / Empresa | "Nosso atelier, do seu jeito" |
| Formulário + WhatsApp | Pedido pronto direto no WhatsApp |

### 2. Pesquisa e aprendizado
Pesquisei **tipografia, imagens, cores e movimento**. Usei a IA como **professora guiada**: eu pedia que ela explicasse cada conceito e como aplicá-lo na prática, e só depois implementava e ajustava. Entre os temas:
- por que combinar uma fonte serifada nos títulos com uma sans-serif no texto;
- como manter uma paleta coerente com as embalagens;
- como criar movimento discreto (entrada ao rolar, flutuação e o vapor da xícara) sem atrapalhar a leitura.

### 3. Implementação
Construí o layout seção por seção, com foco em **conversão**: botão de pedido no topo, vitrine que preenche o formulário, botão flutuante do WhatsApp e mensagem gerada automaticamente.

### 4. Revisão e validação
Antes de entregar, fiz uma rodada de checagens (próxima seção) e corrigi o que apareceu.

---

## ✅ Checagens e testes

| Checagem | Ferramenta | Situação |
|----------|-----------|----------|
| Validação do HTML | [W3C Markup Validator](https://validator.w3.org) | Feita: **1 erro, 4 avisos e 22 informações**, todos tratados (ver abaixo) |
| Revisão de contraste | Cálculo manual das cores | Feita: 2 pontos corrigidos (botão do WhatsApp e hover dourado) |
| Navegação por teclado | Tecla **Tab** | Foco visível adicionado |
| Rótulos e títulos | Revisão de acessibilidade | Rótulos nos campos e títulos na vitrine adicionados |
| Conteúdo sem JavaScript | Revisão do CSS | Conteúdo continua visível se o script falhar |
| Revalidação do HTML | W3C Markup Validator | ☐ Confirmar zero erros e zero avisos |
| Desempenho, acessibilidade e SEO | Lighthouse (mobile) | ☐ Registrar as notas: Desempenho __ · Acessibilidade __ · Boas práticas __ · SEO __ |
| Responsividade | Modo celular do navegador (360, 390, 768, 1024 e 1366px) | ☐ Conferir |
| Teste em celular real | Aparelho do cliente | ☐ Conferir |
| Fluxo do pedido | Envio do formulário e do botão flutuante | ☐ Conferir a mensagem recebida no WhatsApp |
| Navegadores | Chrome, Edge, Firefox e Safari | ☐ Conferir |

> As linhas com ☐ são conferências finais. Atualize a tabela com os resultados reais antes da entrega.

### Como repetir os testes
1. **Console e rede:** abra o navegador, aperte **F12** e confira se não há erros em vermelho nem imagens com erro 404. Recarregue com **Ctrl+Shift+R**.
2. **HTML:** cole o `index.html` em [validator.w3.org](https://validator.w3.org), na aba *Validate by direct input*.
3. **Lighthouse:** F12 → aba *Lighthouse* → *Mobile* → *Analyze*.
4. **Responsividade:** F12 → ícone de celular e teste várias larguras.
5. **Funcionalidade:** clique em cada card da vitrine, envie o formulário e confira a mensagem recebida no WhatsApp.

---

## 🔧 Correções feitas após a validação

**HTML (`index.html`)**
- **Erro:** `select` com `required` sem opção vazia → removi o `required` (a primeira opção já vem selecionada).
- **4 avisos:** seção e cards da vitrine sem título → adicionei `h2` e `h3` visíveis apenas para leitores de tela.
- **22 informações:** barras desnecessárias em tags vazias (` />`) → removidas.
- **Rótulos:** campos de nome, apresentação, quantidade e observações ganharam `<label>`.
- **Favicon:** adicionado, evitando erro 404 no console.

**CSS (`style.css`)**
- **Contraste:** o texto branco sobre o verde do WhatsApp (cerca de 2:1) e sobre o dourado escuro no hover (cerca de 2,5:1) passou a ser escuro.
- **Teclado:** `:focus-visible` com contorno claro.
- **Movimento reduzido:** `prefers-reduced-motion` desliga flutuação, vapor e animações de entrada.
- **Sem JavaScript:** `@media (scripting: none)` mantém o conteúdo visível.
- **Celular:** bloco para telas até 480px e `svh` no hero.
- **Safari:** prefixo `-webkit-backdrop-filter`.
- **Utilitário:** classe `.sr-only` para texto só de leitor de tela.

---

## ⚙️ Personalização

**Número do WhatsApp** — altere em **dois lugares**:
1. `script.js`: constante `WHATSAPP_NUMBER` (formato `55` + DDD + número).
2. `index.html`: link do botão flutuante (`https://wa.me/...`).

**Embalagens** — o texto de cada `<option>` do `productSelect` deve ser igual ao `data-pack` do botão correspondente na vitrine.

**Cores** — edite as variáveis no `:root` do `style.css`.

**Vapor do café** — ajuste a posição em `.coffee-steam-wrap` (`right` e `bottom`) e a velocidade em `.steam-wisp`.

**Compartilhamento** — quando a página estiver online, descomente `og:url` e `og:image` no `<head>` e troque `SEU-SITE.com` pelo endereço real.

---

## 💡 Aprendizados

- Um bom projeto web conecta **design, comunicação e conversão**.
- Validar e testar antes de entregar evita retrabalho e mostra cuidado com quem vai usar a página.
- **Acessibilidade** faz parte do projeto, não é um extra: rótulos, contraste e navegação por teclado melhoram a experiência de todos.
- Usar a IA **para aprender**, pedindo explicações e entendendo cada decisão, muda a forma de construir.
- Trabalhar para um cliente real, mesmo em um contexto de curso, exige ouvir o objetivo de venda e traduzi-lo em interface.


---

## 👩‍🍳 Autoria e contato

**Produto:** Gabriela Maestrini e Paula Gomes, alunas do Técnico em Gastronomia do Senac.

**Design e desenvolvimento da landing page:** **Débora Maestrini**

Estou em busca de oportunidades na área de **[desenvolvimento front-end / web / desing]** e sempre aprendendo.

📧 demboone@gmail.com · 💼 [LinkedIn] https://www.linkedin.com/in/debora-maestrini/ · 🐙 [GitHub] https://github.com/demboone-sudo

---

© Maestrini & Gomes — Atelier de Biscoitos. Projeto acadêmico.