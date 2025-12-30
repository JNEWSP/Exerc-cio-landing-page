// ==============================
// MENU MOBILE
// ==============================
const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("nav__list--open");
  });

  // Fecha o menu ao clicar em um link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navList.classList.remove("nav__list--open");
    });
  });
}

// ==============================
// DESTAQUE DA ABA ATIVA NO MENU AO ROLAR
// ==============================
const sections = document.querySelectorAll("main section[id]");

function onScrollHighlightNav() {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${sectionId}`
        );
      });
    }
  });
}

window.addEventListener("scroll", onScrollHighlightNav);

// ==============================
// TABS DE ATRAÇÕES
// ==============================
const tabButtons = document.querySelectorAll(".tabs__button");
const tabs = document.querySelectorAll(".tab");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabName = button.getAttribute("data-tab");
    const targetTab = document.querySelector(`#tab-${tabName}`);

    // Atualiza botões
    tabButtons.forEach((btn) =>
      btn.classList.toggle("tabs__button--active", btn === button)
    );

    // Atualiza conteúdo
    tabs.forEach((tab) => {
      tab.classList.toggle("tab--active", tab === targetTab);
    });
  });
});

// ==============================
// SELEÇÃO DE PLANOS
// ==============================
const planCards = document.querySelectorAll(".plan");

planCards.forEach((card) => {
  const selectBtn = card.querySelector(".plan__select");
  selectBtn.addEventListener("click", () => {
    // Remove estado ativo de todos
    planCards.forEach((c) => c.classList.remove("plan--active"));
    // Ativa o plano clicado
    card.classList.add("plan--active");
  });
});

// ==============================
// FAQ - ABRIR/FECHAR
// ==============================
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const questionBtn = item.querySelector(".faq__question");
  questionBtn.addEventListener("click", () => {
    const isOpen = item.classList.contains("faq__item--open");

    // Fecha todos
    faqItems.forEach((i) => i.classList.remove("faq__item--open"));

    // Se estava fechado, abre
    if (!isOpen) {
      item.classList.add("faq__item--open");
    }
  });
});

// ==============================
// FORMULÁRIO DE CONTATO (feedback simples)
// ==============================
const contactForm = document.querySelector(".contact__form");
const feedbackEl = document.getElementById("form-feedback");

if (contactForm && feedbackEl) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    feedbackEl.textContent =
      "Mensagem enviada! Em breve entraremos em contato.";
    contactForm.reset();

    setTimeout(() => {
      feedbackEl.textContent = "";
    }, 4000);
  });
}
