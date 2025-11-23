// ====== Translations ======
const translations = {
  en: {
    "nav-home": "Home",
    "nav-strategy": "Strategy",
    "nav-tokenization": "Tokenization",
    "nav-team": "About",
    "nav-whitepaper": "Whitepaper",
    "nav-contact": "Contact",

    "hero-title": "Electrum Fund – The Future of Tokenized Investment",
    "hero-subtitle":
      "A Swiss tokenized investment fund combining institutional-grade strategies with the transparency and efficiency of blockchain infrastructure.",
    "btn-whitepaper": "Download Whitepaper",
    "btn-contact": "Contact Investor Relations",
    "hero-disclaimer":
      "Electrum Fund is an investment product with risk of capital loss. This website does not constitute investment advice or an offer to the public.",

    "strategy-title": "Strategy & Backtested Performance",
    "strategy-intro":
      "Electrum Fund implements a systematic strategy focused on risk-controlled exposure to digital assets and traditional markets. The chart below illustrates an example of backtested net asset value over time.",
    "chart-title": "Fund Value (Backtest)",
    "benchmark-label": "S&P 500 total return",
    "nav-label": "Electrum",
    "metrics-yearly-title": "Annual Returns",
    "axis-nav": "Performance (without fees)",
    "axis-years": "Years",
    "legend-returns": "Returns (%)",
    "chart-caption":
      "Illustrative backtest based on historical data and assumptions. Backtested performance is not indicative of future results.",
    "metrics-title": "Key Risk & Performance Metrics",
    "metric-cagr": "Annualized return (CAGR) :",
    "metric-vol": "Volatility :",
    "metric-sharpe": "Sharpe ratio (net) :",
    "metric-dd": "Max drawdown :",
    "metric-calmar": "Calmar ratio (net) :",
    "metrics-note":
      "Figures are for illustration only. Final statistics will depend on the live implementation, fees and market conditions.",

    "token-title": "Tokenization & Investor Access",
    "token-intro":
      "By issuing fund shares as tokens on a regulated infrastructure, Electrum aims to improve investor access, liquidity, and transparency while maintaining robust governance and compliance.",
    "token-1-title": "Fractional access",
    "token-1-text":
      "Tokenized shares allow minimum tickets to be significantly reduced compared to traditional fund structures, while keeping a professional-level framework.",
    "token-2-title": "Improved liquidity",
    "token-2-text":
      "Under the chosen setup, investors can benefit from more frequent liquidity windows and streamlined subscription / redemption processes.",
    "token-3-title": "On-chain transparency",
    "token-3-text":
      "Holdings and flows can be audited on-chain, providing an additional layer of transparency versus traditional off-chain registries.",

    "team-title": "Origin & Governance",
    "team-intro":
      "Electrum Fund is being structured in Switzerland with a strong focus on risk management, regulatory alignment and institutional partnerships.",
    "story-title": "Our story",
    "story-text-1":
      "Electrum was created to bridge the gap between traditional finance and digital assets. The objective is to offer a disciplined, research-driven strategy packaged in an accessible, tokenized vehicle.",
    "story-text-2":
      "The investment process combines systematic models, macro scenarios and risk overlays to seek asymmetric return profiles while prioritizing capital preservation.",
    "governance-title": "Swiss governance framework",
    "governance-text-1":
      "The fund is intended to operate within a Swiss legal framework, working with regulated providers for custody, administration and audit.",
    "governance-text-2":
      "Compliance and investor protection are central pillars of the project, including KYC/AML procedures and clear risk disclosures.",

    "wp-title": "Whitepaper & Documentation",
    "wp-intro":
      "For a detailed description of the strategy, tokenization model and governance, request access to the Electrum Fund whitepaper.",
    "wp-download-title": "Request the whitepaper (PDF)",
    "wp-download-text":
      "Leave your professional email below to receive a secure link to download the latest version of the whitepaper once it is available.",
    "label-email": "Email address",
    "btn-request-wp": "Request access",
    "wp-privacy":
      "Your email will only be used to share information relating to Electrum Fund and will not be sold to third parties.",
    "wp-form-note":
      "Note: this demo form does not send real emails yet. A backend or email service (e.g. Formspree, Netlify Forms) needs to be connected.",
    "wp-content-title": "In the whitepaper",
    "wp-point-1": "Strategy overview and risk framework",
    "wp-point-2": "Tokenization architecture and legal setup",
    "wp-point-3": "Service providers, fees and operational flows",
    "wp-point-4": "Risk factors and important investor information",

    "contact-title": "Contact",
    "contact-intro":
      "For professional or institutional enquiries, please use the form below or reach out directly by email.",
    "label-name": "Name",
    "label-message": "Message",
    "btn-send": "Send message",
    "contact-note":
      "This is a demo contact form. In production, it should be connected to a secure email or CRM solution.",
    "contact-direct-title": "Direct contact",
    "contact-email-label": "Email: ",
    "contact-linkedin-label": "LinkedIn: ",
    "contact-location": "Planned domicile: Switzerland (details to be confirmed).",

    "footer-disclaimer-1":
      "No information on this website constitutes investment advice, an offer, or a solicitation to subscribe to any financial product.",
    "footer-disclaimer-2":
      "Any investment in Electrum Fund would be subject to specific documentation, risk factors and regulatory eligibility criteria.",

    "tooltip-cagr": "Compound annual growth rate of the strategy over the full backtest period.",
    "tooltip-vol": "Annualized volatility, standard deviation of the daily returns serie.",
    "tooltip-sharpe": "Net Sharpe ratio: excess return per unit of risk, before fees.",
    "tooltip-dd": "Maximum peak-to-trough drawdown of the strategy over the backtest period.",
    "tooltip-calmar": "Net Calmar ratio: excess return per maximum drawdown, before fees."
  },

  fr: {
    "nav-home": "Accueil",
    "nav-strategy": "Stratégie",
    "nav-tokenization": "Tokenisation",
    "nav-team": "À propos",
    "nav-whitepaper": "Livre blanc",
    "nav-contact": "Contact",

    "hero-title": "Electrum Fund – Le futur de l’investissement tokenisé",
    "hero-subtitle":
      "Un fonds d’investissement tokenisé basé en Suisse, qui combine des stratégies de type institutionnel avec la transparence et l’efficacité de l’infrastructure blockchain.",
    "btn-whitepaper": "Télécharger le white paper",
    "btn-contact": "Contacter l’équipe",
    "hero-disclaimer":
      "Electrum Fund est un produit d’investissement comportant un risque de perte en capital. Ce site ne constitue ni un conseil en investissement ni une offre au public.",

    "strategy-title": "Stratégie & performance backtestée",
    "strategy-intro":
      "Electrum Fund met en œuvre une stratégie systématique avec un contrôle strict du risque et une exposition maîtrisée aux actifs numériques et traditionnels. Le graphique ci-dessous illustre une valeur liquidative théorique sur la base d’un backtest.",
    "chart-title": "Valeur du fonds (backtest)",
    "benchmark-label": "S&P 500 dividendes réinvestis",
    "nav-label": "Electrum",
    "metrics-yearly-title": "Rendements annuels",
    "axis-nav": "Performance (sans frais)",
    "axis-years": "Années",
    "legend-returns": "Rendement (%)",
    "chart-caption":
      "Backtest illustratif fondé sur des données historiques et des hypothèses. Les performances passées, réelles ou simulées, ne préjugent pas des performances futures.",
    "metrics-title": "Indicateurs de risque & performance",
    "metric-cagr": "Performance annualisée (CAGR) :",
    "metric-vol": "Volatilité :",
    "metric-sharpe": "Ratio de Sharpe (net) :",
    "metric-dd": "Baisse maximale :",
    "metric-calmar": "Ratio de Calmar (net) :",
    "metrics-note":
      "Les chiffres ci-dessus sont donnés à titre purement indicatif. Les statistiques finales dépendront de la mise en œuvre réelle, des frais et des conditions de marché.",

    "token-title": "Tokenisation & accès investisseur",
    "token-intro":
      "En émettant les parts du fonds sous forme de tokens sur une infrastructure réglementée, Electrum vise à améliorer l’accès, la liquidité et la transparence pour les investisseurs, tout en maintenant un cadre de gouvernance robuste.",
    "token-1-title": "Accès fractionné",
    "token-1-text":
      "La tokenisation permet de réduire significativement le ticket d’entrée par rapport à un fonds traditionnel, tout en conservant un cadre de type professionnel.",
    "token-2-title": "Liquidité améliorée",
    "token-2-text":
      "Selon la structure retenue, les investisseurs peuvent bénéficier de fenêtres de liquidité plus fréquentes et de processus de souscription / rachat simplifiés.",
    "token-3-title": "Transparence on-chain",
    "token-3-text":
      "Une partie des flux et des positions peut être auditée on-chain, offrant un niveau supplémentaire de transparence par rapport aux registres purement off-chain.",

    "team-title": "Origine & gouvernance",
    "team-intro":
      "Electrum Fund est structuré en Suisse avec un fort accent sur la gestion du risque, l’alignement réglementaire et les partenariats institutionnels.",
    "story-title": "Notre histoire",
    "story-text-1":
      "Electrum est né de la volonté de créer un pont crédible entre la finance traditionnelle et les actifs numériques, via une stratégie disciplinée et fondée sur la recherche.",
    "story-text-2":
      "Le processus d’investissement combine modèles systématiques, scénarios macro et gestion des risques afin de rechercher des profils de rendement asymétriques tout en plaçant la préservation du capital au centre.",
    "governance-title": "Cadre de gouvernance suisse",
    "governance-text-1":
      "Le fonds a vocation à opérer dans un cadre juridique suisse, en s’appuyant sur des prestataires réglementés pour la conservation, l’administration et l’audit.",
    "governance-text-2":
      "La conformité et la protection des investisseurs sont au cœur du projet, incluant des procédures KYC/AML et une présentation claire des risques.",

    "wp-title": "White paper & documentation",
    "wp-intro":
      "Pour une description détaillée de la stratégie, du modèle de tokenisation et de la gouvernance, vous pouvez demander l’accès au white paper d’Electrum Fund.",
    "wp-download-title": "Recevoir le white paper (PDF)",
    "wp-download-text":
      "Laissez votre email professionnel pour recevoir un lien sécurisé vers la dernière version du white paper lorsqu’elle sera disponible.",
    "label-email": "Adresse email",
    "btn-request-wp": "Demander l’accès",
    "wp-privacy":
      "Votre adresse ne sera utilisée que pour vous transmettre des informations relatives à Electrum Fund. Elle ne sera pas vendue à des tiers.",
    "wp-form-note":
      "Important : ce formulaire est une démonstration. Pour l’utiliser réellement, il faudra le connecter à un service d’email ou à un backend.",
    "wp-content-title": "Contenu du white paper",
    "wp-point-1": "Présentation de la stratégie et du cadre de risque",
    "wp-point-2": "Architecture de tokenisation et cadre juridique",
    "wp-point-3": "Prestataires, frais et flux opérationnels",
    "wp-point-4": "Facteurs de risque et informations clés pour l’investisseur",

    "contact-title": "Contact",
    "contact-intro":
      "Pour toute demande professionnelle ou institutionnelle, utilisez le formulaire ci-dessous ou contactez-nous directement par email.",
    "label-name": "Nom",
    "label-message": "Message",
    "btn-send": "Envoyer",
    "contact-note":
      "Ce formulaire est une maquette. En production, il devra être relié à un système d’email ou à un CRM sécurisé.",
    "contact-direct-title": "Contact direct",
    "contact-email-label": "Email : ",
    "contact-linkedin-label": "LinkedIn : ",
    "contact-location": "Domiciliation prévue : Suisse (détails à confirmer).",

    "footer-disclaimer-1":
      "Les informations présentées sur ce site ne constituent ni un conseil en investissement, ni une offre, ni une sollicitation au public.",
    "footer-disclaimer-2":
      "Tout investissement dans Electrum Fund serait soumis à une documentation spécifique, à des facteurs de risque détaillés et à des critères d’éligibilité réglementaire.",
    
    "tooltip-cagr": "Taux de croissance annualisé de la stratégie sur l’ensemble de la période de backtest.",
    "tooltip-vol": "Volatilité annualisée, écart-type de la série des rendements journaliers",
    "tooltip-sharpe": "Ratio de Sharpe net : rendements corrigés du taux sans risque, divisés par la volatilité, avant frais.",
    "tooltip-dd": "Perte maximale observée entre un plus haut et un plus bas sur la période de backtest.",
    "tooltip-calmar": "Ratio de Calmar net: rendements corrigés du taux sans risque, divisés par la baisse maximale, avant frais."
  }
};

let currentLang = "en";

function applyTranslations(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  currentLang = lang;
  // Tooltips pour les icônes info
  document.querySelectorAll("[data-tooltip-i18n]").forEach((el) => {
    const key = el.getAttribute("data-tooltip-i18n");
    if (dict[key]) {
      el.setAttribute("data-tooltip", dict[key]);
    }
  });

}

// Language buttons
document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  applyTranslations(currentLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang === currentLang) return;
      document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyTranslations(lang);
      updateChartsLanguage();
      updateMetricsLanguage();
    });
  });

  // Dummy handlers for forms
  document.getElementById("wp-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      currentLang === "en"
        ? "Demo only: connect this form to a real email service before going live."
        : "Démonstration uniquement : connectez ce formulaire à un service d’email avant la mise en production."
    );
  });

  document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      currentLang === "en"
        ? "Demo contact form: in production, this should send an email or create a ticket."
        : "Formulaire de contact de démonstration : en production, il devra envoyer un email ou créer un ticket."
    );
  });

  // Init chart
  initPerformanceChart();
  loadMetrics();
});

let performanceChart;
let yearlyBarChart;

async function initPerformanceChart() {
  const ctx = document.getElementById("performanceChart");
  const barCtx = document.getElementById("yearlyBarChart");

  const response = await fetch("./performance_data.json");
  const data = await response.json();

  const labels = data.dates.map(d => new Date(d).getFullYear());

  const nav = data.nav;
  const benchmark = data.benchmark;
  const years = data.annual_years;
  const annualReturns = data.annual_returns;

  // === Chart NAV logarithmique ===
  performanceChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: translations[currentLang]["nav-label"],
          data: nav,
          borderColor: "#D6A84E",
          borderWidth: 1,
          tension: 0.2,
          pointRadius: 0
        },
        {
          label: translations[currentLang]["benchmark-label"],
          data: benchmark,
          borderColor: "#C8C9CF",
          borderWidth: 1,
          tension: 0.2,
          pointRadius: 0
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          type: "logarithmic",
          title: {
            display: true,
            text: translations[currentLang]["axis-nav"],
            color: "#e6e2d6"
          },
          ticks: { color: "#a0a7b8" },
          grid: { color: "rgba(255,255,255,0.05)" }
        },
        x: {
          title: {
            display: false,
            text: translations[currentLang]["axis-years"],
            color: "#e6e2d6"
          },
          ticks: { color: "#a0a7b8" }
        }
      },
      plugins: {
        legend: {
          labels: { color: "#e6e2d6" }
        }
      }
    }
  });

  // === Barplot rendements annuels ===
  yearlyBarChart = new Chart(barCtx, {
    type: "bar",
    data: {
      labels: years,
      datasets: [
        {
          label: translations[currentLang]["legend-returns"],
          data: annualReturns,
          backgroundColor: annualReturns.map(v =>
            v >= 0 ? "#D6A84E" : "#FF4D4D"
          )
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          title: {
            display: true,
            text: translations[currentLang]["axis-returns"],
            color: "#e6e2d6"
          },
          ticks: {
            color: "#a0a7b8",
            callback: val => val + "%"
          },
          grid: { color: "rgba(255,255,255,0.05)" }
        },
        x: {
          ticks: { color: "#a0a7b8" }
        }
      },
      plugins: {
        legend: { labels: { color: "#e6e2d6" } }
      }
    }
  });
}

function formatPercent(value) {
  const val = value * 100;
  return currentLang === "fr"
    ? val.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + " %"
    : val.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + "%";
}

function formatNumber(value) {
  return currentLang === "fr"
    ? value.toLocaleString("fr-FR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    : value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}



async function loadMetrics() {
  const response = await fetch("./metrics.json");
  const metrics = await response.json();


  document.getElementById("metric-cagr").textContent = formatPercent(metrics.Return);
  document.getElementById("metric-vol").textContent = formatPercent(metrics.Volatility);
  document.getElementById("metric-sharpe").textContent = formatNumber(metrics.Sharpe);
  document.getElementById("metric-dd").textContent = formatPercent(metrics.Max_dd);
  document.getElementById("metric-calmar").textContent = formatNumber(metrics.Calmar);
}

function updateMetricsLanguage() {
  loadMetrics();
}


function updateChartsLanguage() {
  if (!performanceChart || !yearlyBarChart) return;

  performanceChart.options.scales.y.title.text = translations[currentLang]["axis-nav"];
  performanceChart.options.scales.x.title.text = translations[currentLang]["axis-years"];
  performanceChart.data.datasets[0].label = translations[currentLang]["nav-label"];
  performanceChart.data.datasets[1].label = translations[currentLang]["benchmark-label"];
  performanceChart.update();

  yearlyBarChart.options.scales.y.title.text = translations[currentLang]["axis-returns"];
  yearlyBarChart.options.scales.x.title.text = translations[currentLang]["axis-years"];
  yearlyBarChart.data.datasets[0].label = translations[currentLang]["legend-returns"];
  yearlyBarChart.update();
}


const menuBtn = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".main-nav");

// Fonction d'ouverture/fermeture
function toggleMenu() {
  const isOpen = navMenu.classList.toggle("open");
  menuBtn.classList.toggle("active", isOpen);
}

// Clic sur le bouton menu
menuBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Empêche la fermeture directe à cause du document listener
  toggleMenu();
});

// Fermer le menu si clic en dehors
document.addEventListener("click", (e) => {
  const isClickInsideMenu = navMenu.contains(e.target);
  const isClickOnButton = menuBtn.contains(e.target);

  if (!isClickInsideMenu && !isClickOnButton) {
    navMenu.classList.remove("open");
    menuBtn.classList.remove("active");
  }
});

// Fermer le menu lorsqu'on clique sur un lien du menu
document.querySelectorAll(".main-nav a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuBtn.classList.remove("active");
  });
});
