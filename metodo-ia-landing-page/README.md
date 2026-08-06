# Método IA — Landing Page

Landing page estática (HTML5 + CSS3 + JS puro, sem frameworks) pronta para publicação no GitHub Pages.

## Preview das imagens

| E-book | Bônus 01 | Bônus 02 |
|---|---|---|
| ![Capa do e-book](assets/images/ebook-capa.jpg) | ![Capa do Bônus 01](assets/images/bonus-01-capa.jpg) | ![Capa do Bônus 02](assets/images/bonus-02-capa.jpg) |

## Estrutura de arquivos

```
index.html
style.css
script.js
assets/images/
  ebook-capa.jpg        → capa do produto principal (hero + seção "o que você recebe")
  bonus-01-capa.jpg     → capa do Bônus 01
  bonus-02-capa.jpg     → capa do Bônus 02
  favicon.svg           → ícone da aba do navegador
  og-image.svg          → imagem de compartilhamento (redes sociais)
```

As capas (`ebook-capa.jpg`, `bonus-01-capa.jpg`, `bonus-02-capa.jpg`) já são as imagens finais enviadas por você — foram redimensionadas e comprimidas (800px de largura, JPEG otimizado) para manter o carregamento rápido da página.

O cabeçalho não usa mais uma imagem de logotipo: o nome "Método IA" é exibido como texto estilizado diretamente no `index.html`/`style.css` (elemento `.header__logo`). Se um dia você quiser voltar a usar uma logo em imagem, basta substituir esse trecho por uma tag `<img>` apontando para o arquivo desejado em `assets/images/`.

## O que você precisa substituir

### 1. Link de checkout (Hubla)
Abra `script.js` e edite a primeira variável do arquivo:

```js
const CHECKOUT_URL = "https://pay.hub.la/SEU-LINK-DE-CHECKOUT-AQUI";
```

Todos os botões da página (header, hero, oferta, CTA final e botão flutuante) usam essa única variável — você só precisa trocar o link **uma vez**.

### 2. Imagens
As capas do e-book e dos bônus já estão atualizadas (`ebook-capa.jpg`, `bonus-01-capa.jpg`, `bonus-02-capa.jpg`). Se quiser trocá-las novamente, é só substituir o arquivo mantendo o mesmo nome — ou usar outro nome/extensão e atualizar o `src` correspondente no `index.html`.

- `og-image.svg` → ainda é um placeholder. Recomenda-se substituir por um `.jpg`/`.png` de 1200x630px (imagens SVG têm suporte limitado em alguns leitores de redes sociais).

### 3. Favicon
`assets/images/favicon.svg` ainda é um placeholder — substitua pelo seu ícone. Se preferir `.ico` ou `.png`, atualize a tag `<link rel="icon">` no `<head>` do `index.html`.

### 4. Google Analytics (GA4)
No `<head>` do `index.html`, localize o bloco comentado `GOOGLE ANALYTICS`, remova os comentários `<!-- -->` e insira o seu ID de medição.

### 5. Meta Pixel (Facebook/Instagram Ads)
No `<head>` do `index.html`, localize o bloco comentado `META PIXEL`, remova os comentários e insira o seu Pixel ID.

### 6. Domínio (SEO)
No `<head>` do `index.html`, substitua todas as ocorrências de `https://SEU-DOMINIO-AQUI.com/` pelo domínio final da página (usado nas tags `canonical`, Open Graph e Schema.org).

## Publicar no GitHub Pages

1. Crie um repositório novo no GitHub.
2. Envie todos os arquivos deste projeto para a raiz do repositório (mantendo a pasta `assets/images`).
3. Vá em **Settings → Pages**.
4. Em "Source", selecione a branch principal (`main`) e a pasta `/root`.
5. Salve — o GitHub gerará uma URL pública (ex: `https://seu-usuario.github.io/seu-repositorio/`).

## Observações técnicas

- Sem dependências pesadas: apenas Google Fonts (Sora, Inter, JetBrains Mono) via CDN.
- Totalmente responsivo (desktop, tablet e mobile).
- Respeita `prefers-reduced-motion` para usuários sensíveis a animações.
- HTML semântico, `alt` em todas as imagens e navegação por teclado com foco visível.
- Copy escrita sem promessas de resultado financeiro, conforme diretrizes de boas práticas para infoprodutos.
