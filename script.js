/* =========================================================
   MÉTODO IA — LANDING PAGE
   script.js
   ========================================================= */

/* ---------------------------------------------------------
   ⚙️ CONFIGURAÇÃO DO CHECKOUT (HUBLA)
   ---------------------------------------------------------
   Altere APENAS a linha abaixo com o link de checkout gerado
   na Hubla (algo como https://pay.hub.la/SEU-PRODUTO).
   Todos os botões de CTA da página (header, hero, oferta,
   CTA final e botão flutuante) serão atualizados
   automaticamente ao carregar a página.
   --------------------------------------------------------- */
const CHECKOUT_URL = "https://pay.hub.la/SEU-LINK-DE-CHECKOUT-AQUI";

document.addEventListener('DOMContentLoaded', () => {
  aplicarLinkDeCheckout();
  configurarHeaderScroll();
  configurarBotaoFlutuante();
  configurarFaq();
  configurarScrollReveal();
});

/* ---------------------------------------------------------
   Aplica a CHECKOUT_URL a todos os botões de CTA da página
   --------------------------------------------------------- */
function aplicarLinkDeCheckout() {
  const botoes = document.querySelectorAll('.js-cta');
  botoes.forEach((botao) => {
    botao.setAttribute('href', CHECKOUT_URL);
    botao.setAttribute('target', '_blank');
    botao.setAttribute('rel', 'noopener noreferrer');

    // Espaço reservado para eventos de conversão (GA4 / Meta Pixel).
    // Exemplo de uso, após colar os snippets no <head> do index.html:
    // botao.addEventListener('click', () => {
    //   if (typeof gtag === 'function') {
    //     gtag('event', 'cta_click', { local: botao.dataset.ctaLocal });
    //   }
    //   if (typeof fbq === 'function') {
    //     fbq('track', 'InitiateCheckout');
    //   }
    // });
  });
}

/* ---------------------------------------------------------
   Header: adiciona sombra/blur ao rolar a página
   --------------------------------------------------------- */
function configurarHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  const atualizarHeader = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  atualizarHeader();
  window.addEventListener('scroll', atualizarHeader, { passive: true });
}

/* ---------------------------------------------------------
   Botão flutuante: aparece após o usuário passar pela Hero
   --------------------------------------------------------- */
function configurarBotaoFlutuante() {
  const floatCta = document.getElementById('floatCta');
  const hero = document.querySelector('.hero');
  if (!floatCta || !hero) return;

  const limite = hero.offsetHeight * 0.6;

  const atualizarVisibilidade = () => {
    floatCta.classList.toggle('is-visible', window.scrollY > limite);
  };
  atualizarVisibilidade();
  window.addEventListener('scroll', atualizarVisibilidade, { passive: true });
}

/* ---------------------------------------------------------
   FAQ: acordeão acessível (um item aberto por vez)
   --------------------------------------------------------- */
function configurarFaq() {
  const itens = document.querySelectorAll('.faq-item');

  itens.forEach((item) => {
    const pergunta = item.querySelector('.faq-item__q');
    if (!pergunta) return;

    pergunta.addEventListener('click', () => {
      const jaAberto = item.classList.contains('is-open');

      itens.forEach((outro) => {
        outro.classList.remove('is-open');
        outro.querySelector('.faq-item__q')?.setAttribute('aria-expanded', 'false');
      });

      if (!jaAberto) {
        item.classList.add('is-open');
        pergunta.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ---------------------------------------------------------
   Scroll reveal: revela elementos suavemente ao entrar na tela
   --------------------------------------------------------- */
function configurarScrollReveal() {
  const elementos = document.querySelectorAll('.reveal');
  if (!elementos.length) return;

  if (!('IntersectionObserver' in window)) {
    elementos.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-in');
          observer.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elementos.forEach((el) => observer.observe(el));
}
