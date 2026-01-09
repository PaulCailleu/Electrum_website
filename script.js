// ====== Translations ======
const translations = {
  en: {
    "nav-home": "Home",
    "nav-solutions": "Solutions",
    "nav-business": "Business model",
    "nav-roadmap": "Roadmap",
    "nav-tokenization": "Tokenization",
    "nav-pipeline": "Architecture",
    "nav-team": "About",
    "nav-whitepaper": "Whitepaper",
    "nav-contact": "Contact",
    "nav-partners": "Partners",

    "hero-title": "Electrum Fund – The Future of Tokenized Investment",
    "hero-subtitle":
      "A Swiss tokenized investment fund that combines institutional rigor and perfomance with the transparency of the blockchain.",
    "btn-whitepaper": "Download Whitepaper",
    "btn-contact": "Contact Investor Relations",
    "hero-disclaimer":
      "Electrum Fund is an investment product with risk of capital loss. This website does not constitute investment advice or an offer to the public.",

    "solutions-title": "Our Two Solutions",
    "solutions-intro":
      "Choose between two complementary vehicles depending on your objectives. Growth focuses on opportunistic upside with risk overlays, while Yield prioritizes stable carry and capital protection.",
    "solution-growth-pill": "Dynamic Upside",
    "solution-growth-title": "Electrum Growth",
    "solution-growth-desc": "Diversified multi-asset portfolio with macro filters and rigorous risk controls, embracing volatility to compound long-term growth.",
    "solution-yield-pill": "Yield",
    "solution-yield-title": "Electrum Yield",
    "solution-yield-desc": "Yield product designed to preserve value against inflation while avoiding market volatility; built to remunerate short-term cash at rates above the risk-free benchmark.",
    "solution-cta": "View details",
    "solution-coming-soon": "Coming soon",

    "bm-title": "Business model snapshot",
    "bm-intro": "Overview of how Electrum earns, the cost base, and how token rails contribute.",
    "bm-revenues-pill": "Revenues",
    "bm-revenues-title": "Revenue breakdown",
    "bm-revenues-item-1": "Management fee aligned with institutional standards (1.5–2% AUM).",
    "bm-revenues-item-2": "Liquidity window spreads on secondary trading and additional spread via the liquidity pool.",
    "bm-revenues-item-3": "Ancillary services: onboarding support and, later, token-backed lending for clients who opt in.",
    "bm-costs-pill": "Costs",
    "bm-costs-title": "Cost breakdown",
    "bm-costs-item-1": "Core team (investment, risk, tech), compliance/legal, audit, admin/custody retainers.",
    "bm-costs-item-2": "Data, cloud, security stack sized for institutional reporting and monitoring.",
    "bm-costs-item-3": "Variable costs: on-chain gas, distribution commissions, investor success/support as AUM scales.",
    "bm-deepdive-pill": "Detail",
    "bm-deepdive-title": "Detailed business model",
    "bm-deepdive-desc": "See fee structure, cost buckets, and breakeven scenarios.",
    "bm-deepdive-cta": "View details",

    "bm-chart-title": "Visuals (illustrative data)",
    "bm-chart-intro": "Quick views to explain the economics: revenues vs costs, mix, and margin sensitivity.",
    "bm-chart-rev-cost-title": "Revenues vs costs per quarter",
    "bm-chart-rev-cost-note": "Placeholder values in kUSD; adjust to your pipeline and provider quotes.",
    "bm-chart-mix-title": "Revenue mix (example)",
    "bm-chart-mix-note": "Sample split between management, performance, and token rails.",
    "bm-chart-breakeven-title": "Margin sensitivity vs AUM",
    "bm-chart-breakeven-note": "Break-even for the base case is around 30–35m AUM.",
    "bm-chart-rev-mgmt": "Mgmt fees",
    "bm-chart-rev-services": "Services",
    "bm-chart-rev-token": "Token rails",
    "bm-chart-cost-fixed": "Fixed costs",
    "bm-chart-cost-var": "Variable costs",
    "bm-chart-net": "Net",
    "bm-chart-axis-k": "kUSD per quarter (illustrative)",
    "bm-chart-axis-aum": "AUM (USD millions)",
    "bm-chart-axis-margin": "Net margin (kUSD)",
    "bm-chart-scenario-low": "Scenario: low AUM",
    "bm-chart-scenario-base": "Scenario: base",
    "bm-chart-scenario-high": "Scenario: high",

    "growth-radar-title": "Strategy vs benchmark (radar)",
    "growth-radar-note": "Normalized vs benchmark = 1 using live metrics; compare CAGR, risk, and drawdown at a glance.",
    "growth-radar-strategy": "Electrum Growth",
    "growth-radar-benchmark": "Benchmark",
    "growth-radar-target": "Target",

    "partners-hero-title": "Partners & associates",
    "partners-hero-subtitle": "Access the roadmap, business model, key metrics and team for your due diligence.",
    "partners-hero-note":
      "Electrum Fund is an investment product with risk of capital loss. This website does not constitute investment advice or an offer to the public.",
    "partners-cta-contact": "Contact the team",
    "partners-cta-docs": "View documentation",
    "partners-cta-title": "Ready to collaborate?",
    "partners-cta-desc": "Let’s discuss integration, roles, and joint milestones.",
    "partners-bm-charts-title": "Business visuals (demo)",
    "partners-bm-charts-intro": "Illustrative charts for review: revenues vs costs, mix, and sensitivity.",

    "strategy-title": "Strategy & Backtested Performance",
    "strategy-intro":
      "Electrum Fund implements a systematic strategy focused on risk-controlled exposure to digital assets and traditional markets. The chart below illustrates an example of backtested net asset value over time.",
    "chart-title": "Fund Value (Backtest)",
    "benchmark-label": "S&P 500 total return",
    "nav-label": "Electrum",
    "metrics-yearly-title": "Annual Returns",
    "axis-nav": "Performance (without fees)",
    "axis-years": "Years",
    "axis-returns": "Returns",
    "legend-returns": "Returns (%)",
    "chart-caption":
      "Illustrative backtest based on historical data and assumptions. Backtested performance is not indicative of future results.",
    "metrics-title": "Key Risk & Performance Metrics",
    "metric-cagr": "Annualized return (CAGR):",
    "metric-vol": "Volatility:",
    "metric-sharpe": "Sharpe ratio (net):",
    "metric-dd": "Max drawdown:",
    "metric-calmar": "Calmar ratio (net):",
    "metrics-note":
      "Figures are for illustration only. Final statistics will depend on the live implementation, fees and market conditions.",

    "growth-hero-title": "Electrum Growth",
    "growth-hero-subtitle":
      "Dynamic strategy seeking asymmetric upside from digital assets with disciplined risk overlays.",
    "growth-hero-note": "Access detailed backtests, risk metrics, and portfolio construction below.",
    "growth-performance-title": "Growth – Performance & Metrics",
    "growth-performance-intro":
      "Illustrative simulation combining systematic signals, macro filters, and drawdown protection rules.",

    "yield-hero-title": "Electrum Yield",
    "yield-hero-subtitle":
      "Income-focused allocation aiming for resilient carry and capital preservation.",
    "yield-hero-note": "Below you will find sample performance, stress tests, and risk statistics.",
    "yield-performance-title": "Yield – Performance & Metrics",
    "yield-performance-intro":
      "Illustrative simulation of a diversified yield sleeve with conservative hedging and liquidity controls.",
    "solution-back": "Back to solutions",
    "solution-contact": "Discuss with the team",

    "bm-page-hero-title": "Business model & unit economics",
    "bm-page-hero-subtitle": "Economics combining fund fees, token rails, and a scalable cost base.",
    "bm-page-hero-note": "Detailed view for partners and institutional discussions.",
    "bm-page-revenue-title": "Revenue mix",
    "bm-page-revenue-intro": "Fee structure plus liquidity-window spreads and token-native services.",
    "bm-page-revenue-1-title": "Fund fees (core)",
    "bm-page-revenue-1-item-1": "Management fee 1.5–2% AUM depending on share class and custody setup.",
    "bm-page-revenue-1-item-2": "No performance fee.",
    "bm-page-revenue-1-item-3": "Share class flexibility: differentiated terms by liquidity windows or investor profile.",
    "bm-page-revenue-2-title": "Token rails",
    "bm-page-revenue-2-item-1": "Spread on secondary liquidity windows during structured liquidity events.",
    "bm-page-revenue-2-item-2": "Additional spread captured via the liquidity pool.",
    "bm-page-revenue-2-item-3": "Token-native rails aligned with compliance and custody constraints.",
    "bm-page-revenue-3-title": "Distribution & services",
    "bm-page-revenue-3-item-1": "Onboarding support and eligibility checks for professional investors.",
    "bm-page-revenue-3-item-2": "Token-backed lending service for clients who opt in (phase 2).",
    "bm-page-revenue-3-item-3": "Data/API or reporting services for partners needing transparency feeds.",
    "bm-page-costs-title": "Cost structure & breakeven",
    "bm-page-costs-intro": "Illustrative cost base combining fixed provider retainers with variable growth levers.",
    "bm-page-costs-1-title": "Fixed base",
    "bm-page-costs-1-item-1": "Team: portfolio management, risk/ops, tech & data engineering (lean, cross-functional).",
    "bm-page-costs-1-item-2": "Providers: admin + custody, legal/compliance, audit, insurance; mostly fixed retainers.",
    "bm-page-costs-1-item-3": "Infrastructure: data vendors, cloud, monitoring, security/testing budget.",
    "bm-page-costs-2-title": "Variable & scaling",
    "bm-page-costs-2-item-1": "On-chain gas, bridging, and oracle updates proportional to activity.",
    "bm-page-costs-2-item-2": "Distribution: platform fees, referral/placement commissions within regulated limits.",
    "bm-page-costs-2-item-3": "Investor success & reporting: support hours, custom exports, translations as jurisdictions expand.",
    "bm-page-breakeven-note": "Example: breakeven around $50–70m AUM at 1% mgmt + modest token fees; sensitivity depends on headcount and provider terms.",
    "bm-page-alignment-title": "Alignment & incentives",
    "bm-page-alignment-intro": "Align economics between the fund, token holders, and service providers.",
    "bm-page-alignment-item-1": "Fee flows and on-chain reporting are transparent, with clear governance and disclosure.",
    "bm-page-alignment-item-2": "Treasury/retained earnings earmarked for audits, security reviews, and liquidity support.",
    "bm-page-alignment-item-3": "Roadmap: migrate more reporting on-chain, automate proofs of reserves/exposure, and offer fee rebates for verified long-term holders.",
    "bm-page-cta-title": "Want to adapt this model?",
    "bm-page-cta-desc": "We can tailor the ladders, currencies, and liquidity windows to your distribution plan.",
    "bm-page-back": "Back to homepage",

    "roadmap-title": "Roadmap",
    "roadmap-intro": "Illustrative milestones you can adjust later. Replace with your own quarters, deliverables, and owners.",
    "roadmap-1-pill": "Q1",
    "roadmap-1-title": "Strategy pilots & data",
    "roadmap-1-desc": "Finalize data pipelines, stress tests, and governance docs for Growth/Yield hypotheses.",
    "roadmap-2-pill": "Q2",
    "roadmap-2-title": "Provider onboarding",
    "roadmap-2-desc": "Select custody/admin partners, complete KYC/AML framework, dry-run token issuance.",
    "roadmap-3-pill": "Q3",
    "roadmap-3-title": "Launch & reporting",
    "roadmap-3-desc": "Go live with initial investors, publish monthly factsheets and on-chain transparency dashboard.",
    "roadmap-4-pill": "Q4",
    "roadmap-4-title": "Scale & iterate",
    "roadmap-4-desc": "Expand allocations, add hedging overlays, and broaden distribution with compliant channels.",

    "map-title": "Where crypto is authorized",
    "map-intro": "Hover to see country status.",
    "map-legend-full": "Allowed (full)",
    "map-legend-partial": "Allowed (partial)",
    "map-legend-none": "Not allowed",
    "map-view-map": "Map",
    "map-view-list": "List",
    "map-list-country": "Country",
    "map-list-status": "Status",
    "map-note": "Status as of end-2025; local crypto rules can shift rapidly.",

    "pipeline-title": "Tokenization architecture",
    "pipeline-intro": "Technical tokenization pipeline: users simply swap their stablecoins for tokenized fund shares and we handle the rest.",
    "pipeline-1-pill": "Onboarding",
    "pipeline-1-title": "KYC/AML & eligibility",
    "pipeline-1-desc": "Investors onboard via compliant KYC/AML, suitability checks, and wallet whitelisting.",
    "pipeline-2-pill": "Issuance",
    "pipeline-2-title": "Token creation & registry",
    "pipeline-2-desc": "Smart contract deploys fund tokens, whitelisted addresses receive units, and registry syncs with the admin.",
    "pipeline-3-pill": "Lifecycle",
    "pipeline-3-title": "Subscriptions, redemptions, liquidity",
    "pipeline-3-desc": "Cut-off rules, price feeds, and automated mint/burn flows aligned with the fund’s NAV and liquidity windows.",
    "pipeline-4-pill": "Controls & reporting",
    "pipeline-4-title": "Risk, compliance, audit trail",
    "pipeline-4-desc": "Role-based controls, custody segregation, on-chain proofs, and investor reporting (factsheet + dashboard).",
    "pipeline-pdf-note": "Architecture scheme (click to open the full-resolution PDF in a new tab).",

    "token-title": "Tokenization & Investor Access",
    "token-intro":
      "By issuing fund shares as tokens on a regulated infrastructure, Electrum aims to improve investor access, liquidity, and transparency while maintaining robust governance and compliance.",
    "token-what-title": "What is tokenization?",
    "token-what-text":
      "Tokenization is the process of transforming a real-world asset (financial or otherwise) into a digital “token” recorded on a blockchain. This token represents ownership, a right, or a share of that asset, and can be exchanged, transferred, or held in a secure and transparent way.",
    "token-1-title": "On-chain transparency",
    "token-1-text":
      "Holdings, flows, and collateral are fully visible and auditable on-chain, providing an extra layer of trust versus traditional registries—ideal for security and risk management. You don’t need to take our word for it: you can verify live what we’re doing.",
    "token-2-title": "Improved liquidity",
    "token-2-text":
      "Tokens can be exchanged 24/7 as long as the liquidity pool absorbs the volume; swaps and transfers settle instantly.",
    "token-3-title": "Fractional access",
    "token-3-text":
      "Tokenized shares allow minimum tickets to be significantly reduced compared to traditional fund structures, while keeping a professional-level framework.",

    "team-title": "Origin & Governance",
    "team-intro":
      "Electrum Fund is being structured in Switzerland with a strong focus on risk management, regulatory alignment and institutional partnerships.",
    "story-title": "Our story",
    "story-text-1":
      "Electrum was created to bridge the gap between traditional finance and digital assets. The objective is to offer a disciplined, research-driven strategy packaged in an accessible and fluid, tokenized vehicle.",
    "story-text-2":
      "The investment process combines systematic models, macro scenarios and risk overlays to seek asymmetric return profiles while prioritizing capital preservation.",
    "governance-title": "Swiss governance framework",
    "governance-text-1":
      "The fund operates under a Swiss legal framework with regulated providers for custody, administration and audit, leveraging a dynamic, innovation-friendly ecosystem for crypto, tokenization and broader financial innovation.",
    "governance-text-2":
      "Switzerland pairs a flexible yet robust rulebook with strong international trust: compliance, KYC/AML and clear risk disclosures sit alongside a jurisdiction known for reliability and investor confidence.",
    "name-title": "Why “Electrum”?",
    "name-text-1":
      "Electrum is a natural alloy of gold and silver that formed some of the earliest coins—a nod to monetary innovation and enduring stores of value.",
    "name-text-2":
      "The name signals long-term value preservation and diversification: durable metals combined to build a resilient, balanced investment approach.",

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
      "For personal introductions, use the links below to reach the team directly.",
    "label-name": "Name",
    "label-message": "Message",
    "btn-send": "Send message",
    "contact-note": "",
    "contact-direct-title": "Team",
    "contact-email-label": "",
    "contact-linkedin-label": "Company LinkedIn: ",
    "contact-location": "",
    "contact-person-role": "Founder & CEO",
    "contact-person-role-2": "Head of Investment Strategy",
    "contact-person-email-label": "Email: ",
    "contact-person-linkedin-label": "LinkedIn: ",
    "contact-person-bio": "Physicist by training, I apply a scientific approach to markets, anchored in real economic mechanisms and risk transfers. I came to finance through crypto, developed a broader passion for capital markets, and I’m interested in how blockchain can enhance the financial system, transparency, and capital efficiency.",

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
    "nav-solutions": "Solutions",
    "nav-business": "Modèle économique",
    "nav-roadmap": "Feuille de route",
    "nav-tokenization": "Tokenisation",
    "nav-pipeline": "Architecture",
    "nav-team": "À propos",
    "nav-whitepaper": "Livre blanc",
    "nav-contact": "Contact",
    "nav-partners": "Partenaires",

    "hero-title": "Electrum Fund – Le futur de l’investissement tokenisé",
    "hero-subtitle":
      "Un fonds d’investissement tokenisé basé en Suisse, qui combine la performance et la rigueur institutionnelle avec la transparence de la blockchain.",
    "btn-whitepaper": "Télécharger le white paper",
    "btn-contact": "Contacter l’équipe",
    "hero-disclaimer":
      "Electrum Fund est un produit d’investissement comportant un risque de perte en capital. Ce site ne constitue ni un conseil en investissement ni une offre au public.",

    "solutions-title": "Nos deux solutions",
    "solutions-intro":
      "Deux véhicules complémentaires selon vos objectifs. Growth vise une performance opportuniste avec contrôle du risque, Yield privilégie la génération de revenus et la protection du capital.",
    "solution-growth-pill": "Dynamique",
    "solution-growth-title": "Electrum Growth",
    "solution-growth-desc": "Portefeuille multi-actifs diversifié avec filtres macro et contrôle du risque rigoureux, assumant de la volatilité pour viser la croissance long terme.",
    "solution-yield-pill": "Rendement",
    "solution-yield-title": "Electrum Yield",
    "solution-yield-desc": "Produit de rendement conçu pour préserver la valeur face à l’inflation tout en évitant la volatilité des marchés. Electrum Yield est destiné à la rémunération du cash à plus court terme à un taux supérieur au taux sans risque.",
    "solution-cta": "Voir le détail",
    "solution-coming-soon": "Bientôt disponible",

    "bm-title": "Modèle économique en bref",
    "bm-intro": "Vue d’ensemble des revenus, de la base de coûts et du rôle des briques on-chain.",
    "bm-revenues-pill": "Revenus",
    "bm-revenues-title": "Décomposition du chiffre d’affaires",
    "bm-revenues-item-1": "Frais de gestion alignés sur les standards institutionnels (1,5–2% de l’AUM).",
    "bm-revenues-item-2": "Spreads sur les fenêtres de liquidité secondaires et spread via la pool de liquidité.",
    "bm-revenues-item-3": "Services additionnels : accompagnement onboarding et, à terme, prêt collatéralisé par tokens pour les clients qui le souhaitent.",
    "bm-costs-pill": "Coûts",
    "bm-costs-title": "Décomposition des coûts",
    "bm-costs-item-1": "Équipe cœur (investissement, risque, tech), conformité/juridique, audit, administrateur/conservation (retainers).",
    "bm-costs-item-2": "Stack data, cloud et sécurité dimensionnée pour du reporting institutionnel.",
    "bm-costs-item-3": "Variable : gas on-chain, commissions de distribution, support investisseurs à mesure que l’AUM croît.",
    "bm-deepdive-pill": "Détail",
    "bm-deepdive-title": "Modèle économique détaillé",
    "bm-deepdive-desc": "Structure des frais, poches de coûts et scénarios de break-even.",
    "bm-deepdive-cta": "Voir le détail",

    "bm-chart-title": "Visuels (données illustratives)",
    "bm-chart-intro": "Vues rapides pour expliquer l’économie : revenus vs coûts, mix et sensibilité de marge.",
    "bm-chart-rev-cost-title": "Revenus vs coûts par trimestre",
    "bm-chart-rev-cost-note": "Valeurs fictives en kUSD ; à adapter selon votre pipeline et vos devis.",
    "bm-chart-mix-title": "Mix de revenus (exemple)",
    "bm-chart-mix-note": "Répartition indicative entre gestion, performance et rails tokenisés.",
    "bm-chart-breakeven-title": "Sensibilité de marge vs AUM",
    "bm-chart-breakeven-note": "Break-even du scénario central autour de 30–35 M$ d’AUM.",
    "bm-chart-rev-mgmt": "Frais de gestion",
    "bm-chart-rev-services": "Services",
    "bm-chart-rev-token": "Rails token",
    "bm-chart-cost-fixed": "Coûts fixes",
    "bm-chart-cost-var": "Coûts variables",
    "bm-chart-net": "Net",
    "bm-chart-axis-k": "kUSD par trimestre (indicatif)",
    "bm-chart-axis-aum": "AUM (millions USD)",
    "bm-chart-axis-margin": "Marge nette (kUSD)",
    "bm-chart-scenario-low": "Scénario : bas",
    "bm-chart-scenario-base": "Scénario : central",
    "bm-chart-scenario-high": "Scénario : haut",

    "growth-radar-title": "Stratégie vs benchmark (radar)",
    "growth-radar-note": "Normalisé vs benchmark = 1 avec les métriques réelles ; comparez CAGR, risque et drawdown en un coup d’œil.",
    "growth-radar-strategy": "Electrum Growth",
    "growth-radar-benchmark": "Benchmark",
    "growth-radar-target": "Cible",

    "partners-hero-title": "Partenaires & associés",
    "partners-hero-subtitle": "Accédez à la feuille de route, au modèle économique, aux métriques clés et à l’équipe pour vos due diligences.",
    "partners-hero-note":
      "Electrum Fund est un produit d’investissement comportant un risque de perte en capital. Ce site ne constitue ni un conseil en investissement ni une offre au public.",
    "partners-cta-contact": "Contacter l’équipe",
    "partners-cta-docs": "Voir la documentation",
    "partners-cta-title": "Prêt à collaborer ?",
    "partners-cta-desc": "Discutons intégration, répartition des rôles et jalons communs.",
    "partners-bm-charts-title": "Visuels business (démo)",
    "partners-bm-charts-intro": "Illustrations pour vos revues : revenus vs coûts, mix, sensibilité.",

    "strategy-title": "Stratégie & performance backtestée",
    "strategy-intro":
      "Electrum Fund met en œuvre une stratégie systématique avec un contrôle strict du risque et une exposition maîtrisée aux actifs numériques et traditionnels. Le graphique ci-dessous illustre une valeur liquidative théorique sur la base d’un backtest.",
    "chart-title": "Valeur du fonds (backtest)",
    "benchmark-label": "S&P 500 dividendes réinvestis",
    "nav-label": "Electrum",
    "metrics-yearly-title": "Rendements annuels",
    "axis-nav": "Performance (sans frais)",
    "axis-years": "Années",
    "axis-returns": "Rendements",
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

    "growth-hero-title": "Electrum Growth",
    "growth-hero-subtitle":
      "Stratégie dynamique cherchant une performance asymétrique sur les actifs digitaux avec des garde-fous stricts.",
    "growth-hero-note": "Retrouvez ci-dessous les backtests, métriques de risque et principes d’allocation.",
    "growth-performance-title": "Growth – Performance & indicateurs",
    "growth-performance-intro":
      "Simulation indicative combinant signaux systématiques, filtres macro et règles de protection contre les drawdowns.",

    "yield-hero-title": "Electrum Yield",
    "yield-hero-subtitle":
      "Allocation orientée revenus visant une portance résiliente et la préservation du capital.",
    "yield-hero-note": "Visualisez ci-dessous la performance simulée, les stress tests et les statistiques de risque.",
    "yield-performance-title": "Yield – Performance & indicateurs",
    "yield-performance-intro":
      "Simulation indicative d’un panier de rendement diversifié avec couvertures prudentes et contrôles de liquidité.",
    "solution-back": "Retour aux solutions",
    "solution-contact": "Echanger avec l’équipe",

    "bm-page-hero-title": "Modèle économique & unit economics",
    "bm-page-hero-subtitle": "Économie combinant frais du fonds, rails tokenisés et base de coûts scalable.",
    "bm-page-hero-note": "Vue détaillée pour partenaires et échanges institutionnels.",
    "bm-page-revenue-title": "Mix de revenus",
    "bm-page-revenue-intro": "Structure de frais, spreads sur fenêtres de liquidité et services token-native.",
    "bm-page-revenue-1-title": "Frais du fonds (core)",
    "bm-page-revenue-1-item-1": "Frais de gestion 1,5–2% de l’AUM selon la classe de parts et la conservation.",
    "bm-page-revenue-1-item-2": "Pas de frais de performance.",
    "bm-page-revenue-1-item-3": "Flexibilité par classe : conditions différenciées selon liquidité ou profil investisseur.",
    "bm-page-revenue-2-title": "Rails tokenisés",
    "bm-page-revenue-2-item-1": "Spread lors des fenêtres de liquidité secondaire.",
    "bm-page-revenue-2-item-2": "Spread additionnel capté via la pool de liquidité.",
    "bm-page-revenue-2-item-3": "Rails tokenisés alignés avec la conformité et la conservation.",
    "bm-page-revenue-3-title": "Distribution & services",
    "bm-page-revenue-3-item-1": "Accompagnement onboarding et vérifications d’éligibilité des investisseurs professionnels.",
    "bm-page-revenue-3-item-2": "Service de prêt collatéralisé par tokens pour les clients qui le souhaitent (phase 2).",
    "bm-page-revenue-3-item-3": "Services data/API ou reporting pour les partenaires ayant besoin de transparence.",
    "bm-page-costs-title": "Structure de coûts & break-even",
    "bm-page-costs-intro": "Base de coûts indicative mêlant retainers fixes prestataires et leviers variables de croissance.",
    "bm-page-costs-1-title": "Base fixe",
    "bm-page-costs-1-item-1": "Équipe : gestion de portefeuille, risque/ops, ingénierie tech & data (organisation légère et transverse).",
    "bm-page-costs-1-item-2": "Prestataires : admin + custodie, juridique/conformité, audit, assurance ; majoritairement en retainers.",
    "bm-page-costs-1-item-3": "Infrastructure : fournisseurs data, cloud, monitoring, budget sécurité/tests.",
    "bm-page-costs-2-title": "Variable & scale",
    "bm-page-costs-2-item-1": "Gas on-chain, bridging et mises à jour d’oracle proportionnels à l’activité.",
    "bm-page-costs-2-item-2": "Distribution : frais plateformes, commissions de placement ou de recommandation dans les limites réglementaires.",
    "bm-page-costs-2-item-3": "Success & reporting : support, exports custom, traductions à mesure que les juridictions s’élargissent.",
    "bm-page-breakeven-note": "Exemple : break-even autour de 50–70 M$ d’AUM avec 1% de gestion + faibles frais token ; sensibilité selon staffing et termes fournisseurs.",
    "bm-page-alignment-title": "Alignement & incitations",
    "bm-page-alignment-intro": "Aligner les intérêts entre le fonds, les porteurs de tokens et les prestataires.",
    "bm-page-alignment-item-1": "Flux de frais et reporting on-chain transparents, avec une gouvernance et des disclosures clairs.",
    "bm-page-alignment-item-2": "Trésorerie/résultat réinvesti prioritairement dans les audits, revues de sécurité et soutien de la liquidité.",
    "bm-page-alignment-item-3": "Feuille de route : plus de reporting on-chain, preuves automatisées de réserves/exposition et remises de frais pour les détenteurs long terme vérifiés.",
    "bm-page-cta-title": "Envie d’adapter le modèle ?",
    "bm-page-cta-desc": "Nous pouvons ajuster les grilles, devises et fenêtres de liquidité selon votre plan de distribution.",
    "bm-page-back": "Retour à l’accueil",

    "roadmap-title": "Feuille de route",
    "roadmap-intro": "Jalons indicatifs à compléter. Remplacez par vos trimestres, livrables et responsables.",
    "roadmap-1-pill": "T1",
    "roadmap-1-title": "Pilotes stratégiques & données",
    "roadmap-1-desc": "Finaliser les pipelines de données, stress tests et documents de gouvernance pour Growth/Yield.",
    "roadmap-2-pill": "T2",
    "roadmap-2-title": "Onboarding prestataires",
    "roadmap-2-desc": "Choisir les partenaires (custody/admin), valider le cadre KYC/AML, simuler l’émission tokenisée.",
    "roadmap-3-pill": "T3",
    "roadmap-3-title": "Lancement & reporting",
    "roadmap-3-desc": "Go-live avec les premiers investisseurs, publication de factsheets mensuelles et dashboard on-chain.",
    "roadmap-4-pill": "T4",
    "roadmap-4-title": "Montée en puissance",
    "roadmap-4-desc": "Augmenter les allocations, ajouter des overlays de couverture, élargir la distribution en conformité.",

    "map-title": "Pays où la crypto est autorisée",
    "map-intro": "Survolez pour voir le statut par pays.",
    "map-legend-full": "Autorisé (complet)",
    "map-legend-partial": "Autorisé (partiel)",
    "map-legend-none": "Non autorisé",
    "map-view-map": "Carte",
    "map-view-list": "Liste",
    "map-list-country": "Pays",
    "map-list-status": "Statut",
    "map-note": "Statut fin 2025 ; les règles crypto peuvent évoluer rapidement.",

    "pipeline-title": "Architecture de la tokenisation",
    "pipeline-intro": "Schéma du pipeline technique de la tokenisation : les utilisateurs échangent simplement leurs stablecoins contre des parts tokenisées du fonds et nous gérons le reste.",
    "pipeline-1-pill": "Onboarding",
    "pipeline-1-title": "KYC/AML & éligibilité",
    "pipeline-1-desc": "Les investisseurs passent le KYC/AML, tests d’adéquation et whitelistage de portefeuille.",
    "pipeline-2-pill": "Emission",
    "pipeline-2-title": "Création de tokens & registre",
    "pipeline-2-desc": "Le smart contract émet les parts tokenisées, les adresses whitelistes reçoivent les unités, le registre est synchronisé avec l’admin.",
    "pipeline-3-pill": "Cycle de vie",
    "pipeline-3-title": "Souscriptions, rachats, liquidité",
    "pipeline-3-desc": "Règles de cut-off, valorisation et mint/burn automatisés alignés sur la VL et les fenêtres de liquidité.",
    "pipeline-4-pill": "Contrôles & reporting",
    "pipeline-4-title": "Risque, conformité, audit",
    "pipeline-4-desc": "Contrôles par rôles, ségrégation en conservation, preuves on-chain, reporting investisseur (factsheet + dashboard).",
    "pipeline-pdf-note": "Schéma d’architecture (cliquez pour ouvrir le PDF en pleine résolution dans un nouvel onglet).",

    "token-title": "Tokenisation & accès investisseur",
    "token-intro":
      "En émettant les parts du fonds sous forme de tokens sur une infrastructure réglementée, Electrum vise à améliorer l’accès, la liquidité et la transparence pour les investisseurs, tout en maintenant un cadre de gouvernance robuste.",
    "token-what-title": "Qu’est-ce que la tokenisation ?",
    "token-what-text":
      "La tokenisation est le processus qui consiste à transformer un actif réel (financier ou non) en un “token” numérique inscrit sur une blockchain. Ce token représente une propriété, un droit, ou une part de cet actif, et peut être échangé, transféré ou détenu de manière sécurisée et transparente.",
    "token-1-title": "Transparence on-chain",
    "token-1-text":
      "Flux, positions et collatéral sont intégralement visibles et auditables on-chain, ajoutant une couche de confiance par rapport aux registres off-chain—idéal pour la sécurité et la gestion du risque. Vous n’avez pas à nous faire confiance : vous pouvez vérifier directement ce que nous faisons.",
    "token-2-title": "Liquidité améliorée",
    "token-2-text":
      "Le token peut être échangé 24/7 tant que la pool de liquidité absorbe le volume ; les échanges et transferts sont instantanés.",
    "token-3-title": "Accès fractionné",
    "token-3-text":
      "La tokenisation permet de réduire significativement le ticket d’entrée par rapport à un fonds traditionnel, tout en conservant un cadre de type professionnel.",

    "team-title": "Origine & gouvernance",
    "team-intro":
      "Electrum Fund est structuré en Suisse avec un fort accent sur la gestion du risque, l’alignement réglementaire et les partenariats institutionnels.",
    "story-title": "Notre histoire",
    "story-text-1":
      "Electrum est né de la volonté de créer un pont crédible entre la finance traditionnelle et les actifs numériques. L'objectif est d'offrir une stratégie disciplinée et fondée sur la recherche, concentrée en un véhicule tokénisé fluide et accessible.",
    "story-text-2":
      "Le processus d’investissement combine modèles systématiques, scénarios macro et gestion des risques afin de rechercher des profils de rendement asymétriques tout en plaçant la préservation du capital au centre.",
    "governance-title": "Cadre de gouvernance suisse",
    "governance-text-1":
      "Le fonds opère dans un cadre juridique suisse avec des prestataires réglementés pour la conservation, l’administration et l’audit, en s’appuyant sur un écosystème très dynamique et innovant en matière de crypto, de tokenisation et d’innovation financière.",
    "governance-text-2":
      "La Suisse combine un cadre réglementaire souple et solide avec une réputation internationale de fiabilité : conformité, KYC/AML et transparence des risques vont de pair avec une juridiction qui inspire confiance aux investisseurs.",
    "name-title": "Pourquoi “Electrum” ?",
    "name-text-1":
      "L’électrum est un alliage naturel d’or et d’argent qui a servi aux premières pièces, symbole d’innovation monétaire et de réserve de valeur historique.",
    "name-text-2":
      "Le nom évoque la préservation de la valeur dans le temps et la diversification : des métaux durables combinés pour bâtir une approche d’investissement résiliente et équilibrée.",

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
      "Pour une mise en relation personnelle, utilisez les liens ci-dessous pour contacter directement l’équipe.",
    "label-name": "Nom",
    "label-message": "Message",
    "btn-send": "Envoyer",
    "contact-note": "",
    "contact-direct-title": "L’équipe",
    "contact-email-label": "",
    "contact-linkedin-label": "LinkedIn entreprise : ",
    "contact-location": "",
    "contact-person-role": "Fondateur & CEO",
    "contact-person-role-2": "Head of Investment Strategy",
    "contact-person-email-label": "Email : ",
    "contact-person-linkedin-label": "LinkedIn : ",
    "contact-person-bio": "Physicien de formation, j’aborde les marchés avec une méthode scientifique, ancrée dans les mécanismes économiques réels et les transferts de risque. Arrivé à la finance par les marchés crypto, j’ai élargi ma passion aux marchés de capitaux et à la manière dont la blockchain peut améliorer le système financier, la transparence et l’efficience du capital.",

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

let currentLang = (() => {
  try {
    return localStorage.getItem("lang") || "en";
  } catch (e) {
    return "en";
  }
})();

function applyTranslations(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
  currentLang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    // ignore persistence issues
  }
  // Tooltips pour les icônes info
  document.querySelectorAll("[data-tooltip-i18n]").forEach((el) => {
    const key = el.getAttribute("data-tooltip-i18n");
    if (dict[key]) {
      el.setAttribute("data-tooltip", dict[key]);
    }
  });
}

function updateBusinessChartsLanguage() {
  if (!document.getElementById("bmRevCostChart")) return;
  if (bmRevCostChart) bmRevCostChart.destroy();
  if (bmMixChart) bmMixChart.destroy();
  if (bmBreakevenChart) bmBreakevenChart.destroy();
  initBusinessCharts();
}

function updateGrowthRadarLanguage() {
  if (!document.getElementById("growthRadarChart")) return;
  if (growthRadarChart) growthRadarChart.destroy();
  initGrowthRadar();
}

function updatePipelineDiagram() {
  const img = document.getElementById("pipeline-diagram-img");
  const link = document.getElementById("pipeline-diagram-link");
  if (!img || !link) return;
  const isFr = currentLang === "fr";
  const suffix = isFr ? "fr" : "en";
  img.src = `assets/pipeline_tech_${suffix}.png`;
  link.href = `diagrams/pipeline/Pipeline_tech_${suffix}.pdf`;
}

// Language buttons
document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  applyTranslations(currentLang);
  document.querySelectorAll(".lang-btn").forEach((b) => {
    const lang = b.getAttribute("data-lang");
    b.classList.toggle("active", lang === currentLang);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang === currentLang) return;
      document.querySelectorAll(".lang-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyTranslations(lang);
      updateChartsLanguage();
      updateMetricsLanguage();
      updateBusinessChartsLanguage();
      updateGrowthRadarLanguage();
      updatePipelineDiagram();
      if (document.getElementById("world-map")) {
        initMap();
        renderCountryList();
      }
    });
  });

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = encodeURIComponent(contactForm.querySelector("#name")?.value || "");
      const email = encodeURIComponent(contactForm.querySelector("#email")?.value || "");
      const message = encodeURIComponent(contactForm.querySelector("#message")?.value || "");
      const subject =
        currentLang === "en"
          ? "Electrum Fund – contact request"
          : "Electrum Fund – demande de contact";
      const body =
        currentLang === "en"
          ? `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
          : `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      window.location.href = `mailto:paul.cailleu@electrum-fund.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }

  const hasPerformanceSection = document.getElementById("performanceChart");
  const hasMetrics = document.getElementById("metric-cagr");
  const hasMap = document.getElementById("world-map");
  const hasList = document.getElementById("world-list");

  if (hasPerformanceSection) {
    initPerformanceChart();
  }

  if (hasMetrics) {
    loadMetrics();
  }

  if (hasMap) {
    initMap();
    renderCountryList();
  }

  if (document.getElementById("bmRevCostChart")) {
    initBusinessCharts();
  }

  if (document.getElementById("growthRadarChart")) {
    initGrowthRadar();
  }

  updatePipelineDiagram();

  setupMapToggle();

  document.querySelectorAll(".logo-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `${window.location.origin}/`;
    });
  });
});

const wpForm = document.getElementById("wp-form");
if (wpForm) {
  wpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(
      currentLang === "en"
        ? "Demo only: connect this form to a real email service before going live."
        : "Démonstration uniquement : connectez ce formulaire à un service d’email avant la mise en production."
    );
  });
}

let performanceChart;
let yearlyBarChart;
let mapTooltip;
let bmRevCostChart;
let bmMixChart;
let bmBreakevenChart;
let growthRadarChart;

function initBusinessCharts() {
  const labels = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"];
  const aumStart = 30_000_000;
  const aumGrowthQ = 0.08;
  const mgmtFeeQ = 0.015 / 4;
  const spreadLiquidityBpsQ = 2;
  const spreadPoolBpsQ = 2;
  const servicesBpsQ = 2;
  const servicesStartIdx = 4;
  const fixedCostQ = 125_000;
  const variableCostBpsQ = 4;

  const aum = labels.map((_, idx) => aumStart * Math.pow(1 + aumGrowthQ, idx));
  const revenueMgmt = aum.map((v) => v * mgmtFeeQ);
  const revenueToken = aum.map((v) => v * ((spreadLiquidityBpsQ + spreadPoolBpsQ) / 10_000));
  const revenueServices = aum.map((v, idx) => (idx >= servicesStartIdx ? v * (servicesBpsQ / 10_000) : 0));
  const costsFixed = labels.map(() => fixedCostQ);
  const costsVariable = aum.map((v) => v * (variableCostBpsQ / 10_000));

  const dict = translations[currentLang];

  const revCostCtx = document.getElementById("bmRevCostChart");
  if (revCostCtx) {
    const netLine = labels.map((_, idx) => {
      const revenue = revenueMgmt[idx] + revenueServices[idx] + revenueToken[idx];
      const costs = costsFixed[idx] + costsVariable[idx];
      return revenue - costs;
    });

    bmRevCostChart = new Chart(revCostCtx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: dict["bm-chart-rev-mgmt"],
            data: revenueMgmt,
            backgroundColor: "#d6a84e",
            borderColor: "rgba(15, 27, 43, 0.9)",
            borderWidth: 1,
            order: 1,
            stack: "revenue"
          },
          {
            label: dict["bm-chart-rev-services"],
            data: revenueServices,
            backgroundColor: "#c8c9cf",
            borderColor: "rgba(15, 27, 43, 0.9)",
            borderWidth: 1,
            order: 1,
            stack: "revenue"
          },
          {
            label: dict["bm-chart-rev-token"],
            data: revenueToken,
            backgroundColor: "#8fb7ff",
            borderColor: "rgba(15, 27, 43, 0.9)",
            borderWidth: 1,
            order: 1,
            stack: "revenue"
          },
          {
            label: dict["bm-chart-cost-fixed"],
            data: costsFixed.map((v) => -v),
            backgroundColor: "#1f2937",
            borderColor: "rgba(15, 27, 43, 0.9)",
            borderWidth: 1,
            order: 1,
            stack: "costs"
          },
          {
            label: dict["bm-chart-cost-var"],
            data: costsVariable.map((v) => -v),
            backgroundColor: "#4b5563",
            borderColor: "rgba(15, 27, 43, 0.9)",
            borderWidth: 1,
            order: 1,
            stack: "costs"
          },
          {
            type: "line",
            label: dict["bm-chart-net"],
            data: netLine,
            borderColor: "#38d996",
            backgroundColor: "rgba(56,217,150,0.15)",
            pointRadius: 3,
            pointHoverRadius: 4,
            tension: 0.25,
            order: 2,
            yAxisID: "y"
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "bottom" } },
        scales: {
          x: { stacked: true },
          y: {
            stacked: true,
            title: { display: true, text: dict["bm-chart-axis-k"] },
            ticks: {
              callback: (val) => Math.abs(val)
            }
          }
        }
      }
    });
  }

  const mixCtx = document.getElementById("bmMixChart");
  if (mixCtx) {
    bmMixChart = new Chart(mixCtx, {
      type: "doughnut",
      data: {
        labels: [dict["bm-chart-rev-mgmt"], dict["bm-chart-rev-services"], dict["bm-chart-rev-token"]],
        datasets: [
          {
            data: [
              revenueMgmt.reduce((acc, v) => acc + v, 0),
              revenueServices.reduce((acc, v) => acc + v, 0),
              revenueToken.reduce((acc, v) => acc + v, 0)
            ],
            backgroundColor: ["#d6a84e", "#c8c9cf", "#8fb7ff"],
            borderColor: "rgba(15, 27, 43, 0.9)",
            borderWidth: 1.5
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "72%",
        plugins: {
          legend: { position: "bottom" },
          tooltip: { callbacks: { label: (ctx) => `${ctx.label}: ${ctx.parsed}%` } }
        }
      }
    });
  }

  const beCtx = document.getElementById("bmBreakevenChart");
  if (beCtx) {
    const aumBuckets = [0, 20, 40, 60, 80, 100]; // USD millions
    const toK = (val) => Math.round((val / 1000) * 10) / 10;
    const baseRevenue = (aumM, mgmtAnnual, spreadBpsQ, servicesBpsQ) => {
      const aum = aumM * 1_000_000;
      const mgmtQ = mgmtAnnual / 4;
      const spreads = aum * (spreadBpsQ / 10_000);
      const services = aum * (servicesBpsQ / 10_000);
      return aum * mgmtQ + spreads + services;
    };
    const baseCosts = (aumM, fixedQ, variableBpsQ) => {
      const aum = aumM * 1_000_000;
      return fixedQ + aum * (variableBpsQ / 10_000);
    };
    const netSeries = (mgmtAnnual, fixedQ, variableBpsQ) =>
      aumBuckets.map((aumM) => {
        const revenue = baseRevenue(aumM, mgmtAnnual, 4, 2);
        const costs = baseCosts(aumM, fixedQ, variableBpsQ);
        return toK(revenue - costs);
      });

    const scenarioLow = netSeries(0.015, 150_000, 10);
    const scenarioBase = netSeries(0.015, 125_000, 4);
    const scenarioHigh = netSeries(0.02, 125_000, 4);
    const breakEvenIndex = (() => {
      for (let i = 0; i < scenarioBase.length - 1; i += 1) {
        const v0 = scenarioBase[i];
        const v1 = scenarioBase[i + 1];
        if ((v0 <= 0 && v1 >= 0) || (v0 >= 0 && v1 <= 0)) {
          const t = (0 - v0) / (v1 - v0);
          return i + t;
        }
      }
      return null;
    })();

    bmBreakevenChart = new Chart(beCtx, {
      type: "line",
      data: {
        labels: ["0", "20", "40", "60", "80", "100"],
        datasets: [
          {
            label: dict["bm-chart-scenario-low"],
            data: scenarioLow,
            borderColor: "#8fb7ff",
            tension: 0.2
          },
          {
            label: dict["bm-chart-scenario-base"],
            data: scenarioBase,
            borderColor: "#d6a84e",
            tension: 0.2
          },
          {
            label: dict["bm-chart-scenario-high"],
            data: scenarioHigh,
            borderColor: "#4ade80",
            tension: 0.2
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom" },
          breakevenLine: {
            index: breakEvenIndex
          }
        },
        scales: {
          x: { title: { display: true, text: dict["bm-chart-axis-aum"] } },
          y: { title: { display: true, text: dict["bm-chart-axis-margin"] } }
        }
      },
      plugins: [
        {
          id: "breakevenLine",
          afterDatasetsDraw(chart, _args, options) {
            const idx = options.index;
            if (idx === null || idx === undefined) return;
            const xScale = chart.scales.x;
            const yScale = chart.scales.y;
            const leftIdx = Math.floor(idx);
            const rightIdx = Math.min(leftIdx + 1, xScale.ticks.length - 1);
            const x0 = xScale.getPixelForTick(leftIdx);
            const x1 = xScale.getPixelForTick(rightIdx);
            const t = idx - leftIdx;
            const x = x0 + (x1 - x0) * t;
            const ctx = chart.ctx;
            ctx.save();
            ctx.strokeStyle = "rgba(214, 168, 78, 0.45)";
            ctx.setLineDash([6, 6]);
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x, yScale.top);
            ctx.lineTo(x, yScale.bottom);
            ctx.stroke();
            ctx.restore();
          }
        }
      ]
    });
  }
}

async function initGrowthRadar() {
  const el = document.getElementById("growthRadarChart");
  if (!el) return;

  const response = await fetch("./metrics.json");
  const metrics = await response.json();
  const strategyMetrics = metrics.nav || metrics;
  const benchmarkMetrics = metrics.benchmark || {
    Return: 0.075,
    Volatility: 0.15,
    Sharpe: 0.65,
    Max_dd: 0.22,
    Calmar: 0.35
  };

  const dict = translations[currentLang];
  const ascendingMetrics = ["Return", "Sharpe", "Calmar"];
  const descendingMetrics = ["Volatility", "Max_dd"];
  const metricsToPlot = Object.keys(benchmarkMetrics);

  const normalizeVsBenchmark = (value, metric) => {
    const base = benchmarkMetrics[metric];
    if (ascendingMetrics.includes(metric)) return value / base;
    if (descendingMetrics.includes(metric)) return base / value;
    return value / base;
  };

  const labels = metricsToPlot.map((key) => {
    switch (key) {
      case "Return":
        return dict["metric-cagr"];
      case "Volatility":
        return dict["metric-vol"];
      case "Sharpe":
        return dict["metric-sharpe"];
      case "Max_dd":
        return dict["metric-dd"];
      case "Calmar":
        return dict["metric-calmar"];
      default:
        return key;
    }
  });

  const strategyData = metricsToPlot.map((key) => normalizeVsBenchmark(strategyMetrics[key], key));
  const benchmarkData = metricsToPlot.map(() => 1);

  growthRadarChart = new Chart(el, {
    type: "radar",
    data: {
      labels,
      datasets: [
        {
          label: dict["growth-radar-strategy"],
          data: strategyData,
          borderColor: "#D6A84E",
          backgroundColor: "rgba(214, 168, 78, 0.15)",
          borderWidth: 1.5,
          pointRadius: 2,
          pointBackgroundColor: "#D6A84E",
          customData: metricsToPlot.map((key) => ({ raw: strategyMetrics[key], base: benchmarkMetrics[key], metric: key }))
        },
        {
          label: dict["growth-radar-benchmark"],
          data: benchmarkData,
          borderColor: "#C8C9CF",
          backgroundColor: "rgba(200, 201, 207, 0.15)",
          borderWidth: 1.5,
          pointRadius: 2,
          pointBackgroundColor: "#C8C9CF",
          customData: metricsToPlot.map((key) => ({ raw: benchmarkMetrics[key], base: benchmarkMetrics[key], metric: key }))
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom" },
        tooltip: {
          callbacks: {
            label: (ctx) => {
              const cd = ctx.dataset.customData && ctx.dataset.customData[ctx.dataIndex];
              if (!cd) return `${ctx.dataset.label}: ${ctx.formattedValue}`;
              const percentMetric = ["Return", "Volatility", "Max_dd"];
              const rawFormatted = percentMetric.includes(cd.metric)
                ? `${(cd.raw * 100).toFixed(1)}%`
                : cd.raw.toFixed(2);
              const benchmarkFormatted = percentMetric.includes(cd.metric)
                ? `${(cd.base * 100).toFixed(1)}%`
                  : cd.base.toFixed(2);
              const labelText = currentLang === "fr" ? "Valeur" : "Value";
              const benchText = currentLang === "fr" ? "Benchmark" : "Benchmark";
              return `${ctx.dataset.label}: ${rawFormatted} (${benchText} ${benchmarkFormatted})`;
            }
          }
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          suggestedMax: 1.2,
          angleLines: { color: "rgba(255,255,255,0.1)" },
          grid: { color: "rgba(255,255,255,0.1)" },
          ticks: {
            display: false
          },
          pointLabels: { font: { size: 12 } }
        }
      }
    }
  });
}

const countryMatrix = [
  // Europe (UE)
  ["DE", "Germany", "Allemagne", "Oui", "Oui"],
  ["AT", "Austria", "Autriche", "Oui", "Oui"],
  ["BE", "Belgium", "Belgique", "Oui", "Oui"],
  ["BG", "Bulgaria", "Bulgarie", "Oui", "Oui"],
  ["CY", "Cyprus", "Chypre", "Oui", "Oui"],
  ["HR", "Croatia", "Croatie", "Oui", "Oui"],
  ["DK", "Denmark", "Danemark", "Oui", "Oui"],
  ["ES", "Spain", "Espagne", "Oui", "Oui"],
  ["EE", "Estonia", "Estonie", "Oui", "Oui"],
  ["FI", "Finland", "Finlande", "Oui", "Oui"],
  ["FR", "France", "France", "Oui", "Oui"],
  ["GR", "Greece", "Grèce", "Oui", "Oui"],
  ["HU", "Hungary", "Hongrie", "Oui", "Oui"],
  ["IE", "Ireland", "Irlande", "Oui", "Oui"],
  ["IT", "Italy", "Italie", "Oui", "Oui"],
  ["LV", "Latvia", "Lettonie", "Oui", "Oui"],
  ["LT", "Lithuania", "Lituanie", "Oui", "Oui"],
  ["LU", "Luxembourg", "Luxembourg", "Oui", "Oui"],
  ["MT", "Malta", "Malte", "Oui", "Oui"],
  ["NL", "Netherlands", "Pays-Bas", "Oui", "Oui"],
  ["PL", "Poland", "Pologne", "Oui", "Oui"],
  ["PT", "Portugal", "Portugal", "Oui", "Oui"],
  ["CZ", "Czech Republic", "République Tchèque", "Oui", "Oui"],
  ["RO", "Romania", "Roumanie", "Oui", "Oui"],
  ["SK", "Slovakia", "Slovaquie", "Oui", "Oui"],
  ["SI", "Slovenia", "Slovénie", "Oui", "Oui"],
  ["SE", "Sweden", "Suède", "Oui", "Oui"],

  // Europe (hors UE)
  ["GB", "United Kingdom", "Royaume-Uni", "Oui", "Oui"],
  ["CH", "Switzerland", "Suisse", "Oui", "Oui"],
  ["NO", "Norway", "Norvège", "Oui", "Oui"],
  ["IS", "Iceland", "Islande", "Oui", "Oui"],
  ["LI", "Liechtenstein", "Liechtenstein", "Oui", "Oui"],
  ["AL", "Albania", "Albanie", "Oui", "Oui"],
  ["RS", "Serbia", "Serbie", "Oui", "Oui"],
  ["BA", "Bosnia and Herzegovina", "Bosnie-Herzégovine", "Oui", "Oui"],
  ["ME", "Montenegro", "Monténégro", "Oui", "Oui"],
  ["XK", "Kosovo", "Kosovo", "Oui", "Oui"],
  ["MK", "North Macedonia", "Macédoine du Nord", "Non", "Non"],
  ["MD", "Moldova", "Moldavie", "Oui", "Oui"],
  ["UA", "Ukraine", "Ukraine", "Oui", "Oui"],
  ["TR", "Turkey", "Turquie", "Oui", "Oui"],
  ["GE", "Georgia", "Géorgie", "Oui", "Oui"],
  ["AM", "Armenia", "Arménie", "Oui", "Oui"],

  // Amériques
  ["US", "United States", "États-Unis", "Oui", "Oui"],
  ["CA", "Canada", "Canada", "Oui", "Oui"],
  ["MX", "Mexico", "Mexique", "Oui", "Oui"],
  ["PA", "Panama", "Panama", "Oui", "Oui"],
  ["CR", "Costa Rica", "Costa Rica", "Oui", "Oui"],
  ["GT", "Guatemala", "Guatemala", "Oui", "Oui"],
  ["HN", "Honduras", "Honduras", "Oui", "Oui"],
  ["NI", "Nicaragua", "Nicaragua", "Oui", "Oui"],
  ["SV", "El Salvador", "El Salvador", "Oui", "Oui"],
  ["BZ", "Belize", "Belize", "Oui", "Oui"],
  ["BS", "Bahamas", "Bahamas", "Oui", "Oui"],
  ["BB", "Barbados", "Barbade", "Oui", "Oui"],
  ["JM", "Jamaica", "Jamaïque", "Oui", "Oui"],
  ["TT", "Trinidad and Tobago", "Trinité-et-Tobago", "Oui", "Oui"],
  ["DO", "Dominican Republic", "République dominicaine", "Oui", "Oui"],
  ["GD", "Grenada", "Grenade", "Oui", "Oui"],
  ["LC", "Saint Lucia", "Sainte-Lucie", "Oui", "Oui"],
  ["VC", "Saint Vincent and the Grenadines", "Saint-Vincent-et-les-Grenadines", "Oui", "Oui"],
  ["AG", "Antigua and Barbuda", "Antigua-et-Barbuda", "Oui", "Oui"],
  ["BR", "Brazil", "Brésil", "Oui", "Oui"],
  ["AR", "Argentina", "Argentine", "Oui", "Oui"],
  ["CL", "Chile", "Chili", "Oui", "Oui"],
  ["CO", "Colombia", "Colombie", "Oui", "Oui"],
  ["PE", "Peru", "Pérou", "Oui", "Oui"],
  ["PY", "Paraguay", "Paraguay", "Oui", "Oui"],
  ["UY", "Uruguay", "Uruguay", "Oui", "Oui"],
  ["EC", "Ecuador", "Équateur", "Oui", "Oui"],
  ["GY", "Guyana", "Guyana", "Oui", "Oui"],
  ["SR", "Suriname", "Suriname", "Oui", "Oui"],
  ["BO", "Bolivia", "Bolivie", "Oui", "Oui"],

  // Asie / Moyen-Orient
  ["AE", "United Arab Emirates", "Émirats Arabes Unis", "Oui", "Oui"],
  ["BH", "Bahrain", "Bahreïn", "Oui", "Oui"],
  ["SA", "Saudi Arabia", "Arabie Saoudite", "Oui", "Oui"],
  ["QA", "Qatar", "Qatar", "Oui", "Oui"],
  ["IL", "Israel", "Israël", "Oui", "Oui"],
  ["JO", "Jordan", "Jordanie", "Oui", "Oui"],
  ["LB", "Lebanon", "Liban", "Oui", "Oui"],
  ["IQ", "Iraq", "Irak", "Oui", "Oui"],
  ["KZ", "Kazakhstan", "Kazakhstan", "Oui", "Oui"],
  ["UZ", "Uzbekistan", "Ouzbékistan", "Oui", "Oui"],
  ["TJ", "Tajikistan", "Tadjikistan", "Oui", "Oui"],
  ["KG", "Kyrgyzstan", "Kirghizistan", "Oui", "Oui"],
  ["JP", "Japan", "Japon", "Oui", "Oui"],
  ["KR", "South Korea", "Corée du Sud", "Oui", "Oui"],
  ["TW", "Taiwan", "Taïwan", "Oui", "Oui"],
  ["HK", "Hong Kong", "Hong Kong", "Oui", "Oui"],
  ["IN", "India", "Inde", "Oui", "Oui"],
  ["PK", "Pakistan", "Pakistan", "Oui", "Oui"],
  ["LK", "Sri Lanka", "Sri Lanka", "Oui", "Oui"],
  ["SG", "Singapore", "Singapour", "Oui", "Oui"],
  ["MY", "Malaysia", "Malaisie", "Oui", "Oui"],
  ["ID", "Indonesia", "Indonésie", "Oui", "Oui"],
  ["VN", "Vietnam", "Vietnam", "Oui", "Oui"],
  ["PH", "Philippines", "Philippines", "Oui", "Oui"],
  ["TH", "Thailand", "Thaïlande", "Oui", "Oui"],
  ["MM", "Myanmar", "Myanmar", "Oui", "Oui"],
  ["KH", "Cambodia", "Cambodge", "Oui", "Oui"],
  ["LA", "Laos", "Laos", "Oui", "Oui"],
  ["CN", "China", "Chine", "Non", "Non"],
  ["NP", "Nepal", "Népal", "Non", "Non"],
  ["BD", "Bangladesh", "Bangladesh", "Non", "Non"],

  // Afrique
  ["ZA", "South Africa", "Afrique du Sud", "Oui", "Oui"],
  ["NG", "Nigeria", "Nigéria", "Oui", "Oui"],
  ["KE", "Kenya", "Kenya", "Oui", "Oui"],
  ["GH", "Ghana", "Ghana", "Oui", "Oui"],
  ["UG", "Uganda", "Ouganda", "Oui", "Oui"],
  ["TZ", "Tanzania", "Tanzanie", "Oui", "Oui"],
  ["ET", "Ethiopia", "Éthiopie", "Oui", "Oui"],
  ["MA", "Morocco", "Maroc", "Oui", "Oui"],
  ["DZ", "Algeria", "Algérie", "Non", "Non"],
  ["TN", "Tunisia", "Tunisie", "Non", "Non"],
  ["EG", "Egypt", "Égypte", "Non", "Non"],
  ["CI", "Côte d’Ivoire", "Côte d’Ivoire", "Oui", "Oui"],
  ["SN", "Senegal", "Sénégal", "Oui", "Oui"],
  ["CM", "Cameroon", "Cameroun", "Oui", "Oui"],
  ["GA", "Gabon", "Gabon", "Oui", "Oui"],
  ["ER", "Eritrea", "Érythrée", "Oui", "Oui"],
  ["ZM", "Zambia", "Zambie", "Oui", "Oui"],
  ["ZW", "Zimbabwe", "Zimbabwe", "Oui", "Oui"],
  ["MW", "Malawi", "Malawi", "Oui", "Oui"],
  ["RW", "Rwanda", "Rwanda", "Oui", "Oui"],
  ["BW", "Botswana", "Botswana", "Oui", "Oui"],
  ["NA", "Namibia", "Namibie", "Oui", "Oui"],
  ["MZ", "Mozambique", "Mozambique", "Oui", "Oui"],
  ["AO", "Angola", "Angola", "Oui", "Oui"],

  // Océanie
  ["AU", "Australia", "Australie", "Oui", "Oui"],
  ["NZ", "New Zealand", "Nouvelle-Zélande", "Oui", "Oui"],
  ["FJ", "Fiji", "Fidji", "Oui", "Oui"],
  ["PG", "Papua New Guinea", "Papouasie-Nouvelle-Guinée", "Oui", "Oui"],
  ["WS", "Samoa", "Samoa", "Oui", "Oui"],
  ["TO", "Tonga", "Tonga", "Oui", "Oui"]
];

async function initPerformanceChart() {
  const ctx = document.getElementById("performanceChart");
  const barCtx = document.getElementById("yearlyBarChart");
  if (!ctx || !barCtx) return;

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
  const navMetrics = metrics.nav || metrics;

  const cagrEl = document.getElementById("metric-cagr");
  const volEl = document.getElementById("metric-vol");
  const sharpeEl = document.getElementById("metric-sharpe");
  const ddEl = document.getElementById("metric-dd");
  const calmarEl = document.getElementById("metric-calmar");

  if (!cagrEl || !volEl || !sharpeEl || !ddEl || !calmarEl) return;

  cagrEl.textContent = formatPercent(navMetrics.Return);
  volEl.textContent = formatPercent(navMetrics.Volatility);
  sharpeEl.textContent = formatNumber(navMetrics.Sharpe);
  ddEl.textContent = formatPercent(navMetrics.Max_dd);
  calmarEl.textContent = formatNumber(navMetrics.Calmar);
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

function initMap() {
  const container = document.getElementById("world-map");
  if (!container) return;

  const statusColors = {
    full: "#38d996",
    partial: "#d6a84e",
    none: "#ff6b6b"
  };

  const labels = {
    full: translations[currentLang]["map-legend-full"],
    partial: translations[currentLang]["map-legend-partial"],
    none: translations[currentLang]["map-legend-none"]
  };

  if (mapTooltip && mapTooltip.parentElement) {
    mapTooltip.remove();
  }
  mapTooltip = document.createElement("div");
  mapTooltip.className = "worldmap-tooltip";
  document.body.appendChild(mapTooltip);

  let regionNames;
  try {
    regionNames = new Intl.DisplayNames(
      [currentLang === "fr" ? "fr" : "en"],
      { type: "region" }
    );
  } catch (e) {
    regionNames = null;
  }

  fetch("worldmap_adp/assets/world-map.svg")
    .then((res) => res.text())
    .then((svgText) => {
      container.innerHTML = svgText;
      const paths = container.querySelectorAll("path[data-id]");

      paths.forEach((path) => {
        const code = path.getAttribute("data-id");
        const entry = countryMatrix.find((c) => c[0] === code);
        const banned = ["MK", "CN", "NP", "BD", "EG", "DZ", "TN", "MA"];
        const restricted = ["PK", "IQ", "JO", "MM", "NG"];
        const status = banned.includes(code) ? "none" : restricted.includes(code) ? "partial" : "full";

        const fill = statusColors[status];
        if (fill) path.style.fill = fill;
        path.dataset.status = status;

        path.addEventListener("mouseenter", () => {
          const localizedName =
            (entry && currentLang === "fr" ? entry[2] : entry ? entry[1] : null) ||
            (regionNames && regionNames.of(code)) ||
            path.getAttribute("data-name") ||
            path.getAttribute("data-country") ||
            code;
          mapTooltip.innerHTML = `${localizedName}<br>${labels[status] || status}`;
          mapTooltip.style.display = "block";
        });

        path.addEventListener("mousemove", (event) => {
          mapTooltip.style.left = `${event.pageX + 10}px`;
          mapTooltip.style.top = `${event.pageY + 10}px`;
        });

        path.addEventListener("mouseleave", () => {
          mapTooltip.style.display = "none";
        });
      });
    })
    .catch((err) => {
      console.error("Map loading error:", err);
    });
}

function renderCountryList() {
  const body = document.getElementById("country-table-body");
  if (!body) return;

  let regionNames;
  try {
    regionNames = new Intl.DisplayNames(
      [currentLang === "fr" ? "fr" : "en"],
      { type: "region" }
    );
  } catch (e) {
    regionNames = null;
  }

  const rows = countryMatrix.map(([code, nameEn, nameFr, allow, extra]) => {
    const banned = ["MK", "CN", "NP", "BD", "EG", "DZ", "TN", "MA"];
    const restricted = ["PK", "IQ", "JO", "MM", "NG"];
    const status = banned.includes(code) ? "none" : restricted.includes(code) ? "partial" : "full";
    const name =
      currentLang === "fr"
        ? nameFr || (regionNames && regionNames.of(code)) || code
        : nameEn || (regionNames && regionNames.of(code)) || code;
    return { code, name, status };
  });

  rows.sort((a, b) => a.name.localeCompare(b.name, currentLang === "fr" ? "fr" : "en"));

  body.innerHTML = rows
    .map(
      ({ name, status }) => `
        <div class="country-row">
          <span>${name}</span>
          <span class="status-pill status-${status}">${translations[currentLang][`map-legend-${status}`]}</span>
        </div>
      `
    )
    .join("");
}

function setupMapToggle() {
  const toggles = document.querySelectorAll(".view-toggle");
  const mapEl = document.getElementById("world-map");
  const listEl = document.getElementById("world-list");
  if (!toggles.length || !mapEl || !listEl) return;

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const view = btn.getAttribute("data-view");
      toggles.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      if (view === "list") {
        mapEl.classList.add("hidden");
        listEl.classList.remove("hidden");
        renderCountryList();
      } else {
        listEl.classList.add("hidden");
        mapEl.classList.remove("hidden");
        initMap();
      }
    });
  });
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
