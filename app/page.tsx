type Lang = "cs" | "en";

const projects = [
  {
    number: "01",
    title: "Jessica Egypt",
    description: {
      cs: "Webová prezentace výletů v Egyptě vytvořená pro skutečnou klientku. Přehledná nabídka zážitků, responzivní rozhraní a jednoduchá cesta ke kontaktu.",
      en: "A travel website for a real client offering personalised trips in Egypt. It combines clear service presentation, responsive UI and a simple path to enquiry.",
    },
    learning: {
      cs: "React Router, vícestránková navigace a převod reálné potřeby klientky do funkčního webu.",
      en: "React Router, multi-page navigation and turning a real client need into a working website.",
    },
    stack: ["React", "JavaScript", "React Router"],
    href: "https://jessicaegypt.netlify.app",
    repo: "https://github.com/marekcze12/projekt_jessica",
    kind: "egypt",
    image: null,
    alt: { cs: "Stylizovaný náhled webu Jessica Egypt", en: "Stylised preview of the Jessica Egypt website" },
  },
  {
    number: "02",
    title: "School Journal",
    titleCs: "Školní časopis",
    description: {
      cs: "Webová aplikace, která digitalizuje redakční workflow. Pracuje s pěti uživatelskými rolemi, recenzním procesem, PDF prohlížečem a veřejným archivem.",
      en: "A web app that digitises the editorial workflow with five user roles, a review process, an integrated PDF viewer and a public archive.",
    },
    learning: {
      cs: "Návrh komplexnějšího workflow, role-based access a spolupráce na týmovém školním projektu.",
      en: "Designing a more complex workflow, role-based access and collaborating on a university team project.",
    },
    stack: ["React", "Tailwind CSS", "Vite"],
    href: "https://skolni-casopis.netlify.app",
    repo: "https://github.com/zemano60/Nam_staci_Ecko",
    kind: "image",
    image: "/projects/skolni-casopis.png",
    alt: { cs: "Ukázka webové aplikace Školní časopis", en: "Preview of the School Journal web application" },
  },
  {
    number: "03",
    title: "Crypto Dashboard",
    titleCs: "Krypto Dashboard",
    description: {
      cs: "Dashboard pro sledování kryptoměn v reálném čase. Načítá data z CoinGecko API, umožňuje vyhledávání i řazení a ukládá čas poslední aktualizace.",
      en: "A real-time cryptocurrency dashboard using the CoinGecko API, with search, advanced sorting and persisted last-update information.",
    },
    learning: {
      cs: "Fetch API, asynchronní JavaScript, ošetření chyb, skeleton loading a efektivní práce s DOMem.",
      en: "Fetch API, asynchronous JavaScript, error handling, skeleton loading and efficient DOM updates.",
    },
    stack: ["JavaScript", "REST API", "CSS Grid"],
    href: "https://manek-krypto.netlify.app",
    repo: "https://github.com/marekcze12/Krypto-Dashboard",
    kind: "image",
    image: "/projects/crypto-dashboard.png",
    alt: { cs: "Ukázka aplikace Krypto Dashboard", en: "Preview of the Crypto Dashboard application" },
  },
];

const skills = [
  { name: "React", detail: { cs: "Komponenty a moderní UI", en: "Components and modern UI" }, level: { cs: "Používám", en: "Working with" } },
  { name: "JavaScript", detail: { cs: "ES6+, API a práce s DOM", en: "ES6+, APIs and the DOM" }, level: { cs: "Používám", en: "Working with" } },
  { name: "TypeScript", detail: { cs: "Typově bezpečný frontend", en: "Type-safe frontend" }, level: { cs: "Rozvíjím", en: "Developing" } },
  { name: "HTML & CSS", detail: { cs: "Sémantika a responzivita", en: "Semantics and responsiveness" }, level: { cs: "Používám", en: "Working with" } },
  { name: "Python", detail: { cs: "Základy a automatizace", en: "Fundamentals and automation" }, level: { cs: "Právě se učím", en: "Currently learning" } },
  { name: "AI development", detail: { cs: "První praktické projekty", en: "First practical projects" }, level: { cs: "Další krok", en: "Next step" } },
];

const copy = {
  cs: {
    nav: ["O mně", "Projekty", "Dovednosti", "Kontakt"],
    heroEyebrow: "Junior web developer",
    student: "Student VŠ",
    heroLine1: "Tvořím weby.",
    heroLine2: "Učím se AI.",
    heroText: "Jsem Marek, juniorní vývojář a student aplikované informatiky. Hledám práci nebo praxi, kde budu stavět moderní weby a růst v Pythonu a AI.",
    projectsCta: "Prohlédnout projekty",
    aboutCta: "Více o mně",
    available: "Open to work & internship",
    featured: "✦ Vybraný projekt",
    featuredTitle: "Školní časopis",
    featuredStack: "React · Redakční workflow · UI design",
    journalEyebrow: "OPEN ACCESS JOURNAL",
    journalTitle: "Budoucnost",
    journalTitle2: "vědy.",
    journalText: "Platforma pro sdílení průlomových myšlenek.",
    journalAction: "Prozkoumat články",
    journalCards: ["Redakční workflow", "5 uživatelských rolí", "PDF prohlížeč"],
    learningNow: "Právě se učím",
    developmentDirection: "Další směr mého rozvoje",
    aboutEyebrow: "01 — O mně",
    aboutTitle1: "Vývoj mě baví.",
    aboutTitle2: "Učení ještě víc.",
    aboutText: "Studuji 3. ročník bakalářského oboru aplikovaná informatika a žiji v Břeclavi. Nejvíc mě baví proměnit nápad ve funkční, přehledný web, který může někdo opravdu používat.",
    portraitStatus: "Hledám práci nebo praxi",
    portraitMeta: "Břeclav · aplikovaná informatika",
    aboutCards: [
      ["Stavím prakticky", "Od prezentačního webu pro skutečnou klientku až po aplikaci pro řízení školní redakce. U každého projektu řeším nejen kód, ale i použitelnost."],
      ["Rostu s každým projektem", "Prohlubuji React a TypeScript, učím se Python a postupně mířím k vývoji aplikací využívajících AI."],
      ["Hledám první tým", "Rád se zapojím do práce nebo praxe, kde získám zpětnou vazbu, naučím se dobré postupy a přispěji reálnou prací."],
    ],
    projectsEyebrow: "02 — Vybrané projekty",
    projectsTitle1: "Od nápadu",
    projectsTitle2: "k funkčnímu webu.",
    projectsText: "Každý projekt mě posunul v jiné oblasti — od práce pro klientku přes komplexnější aplikační logiku až po integraci externího API.",
    learned: "Co jsem si procvičil",
    visit: "Navštívit projekt",
    code: "Zdrojový kód",
    skillsEyebrow: "03 — Dovednosti",
    skillsTitle1: "Můj stack.",
    skillsTitle2: "A další směr.",
    skillsText: "Frontend tvoří základ mých současných zkušeností. Python a AI jsou oblast, do které teď cíleně investuji čas a energii.",
    nowEyebrow: "Právě tvořím",
    nowTitle: "Menší e-shop",
    nowText: "Aktuálně pracuji na novém e-shopovém projektu. Postupně na něm rozvíjím návrh uživatelského rozhraní, práci s produkty a celý nákupní proces.",
    inProgress: "Rozpracováno",
    contactEyebrow: "04 — Kontakt",
    contactTitle1: "Hledám místo,",
    contactTitle2: "kde můžu růst.",
    contactText: "Pokud hledáte juniorního vývojáře na práci, stáž nebo zajímavý projekt, rád se představím a ukážu svou práci podrobněji.",
    email: "Napsat e-mail",
    footer: "Navrženo a vytvořeno s chutí učit se.",
    top: "Zpět nahoru",
  },
  en: {
    nav: ["About", "Projects", "Skills", "Contact"],
    heroEyebrow: "Junior web developer",
    student: "University student",
    heroLine1: "I build websites.",
    heroLine2: "I’m learning AI.",
    heroText: "I’m Marek, a junior developer and Applied Computer Science student. I’m looking for a job or internship where I can build modern websites and grow in Python and AI.",
    projectsCta: "View my projects",
    aboutCta: "More about me",
    available: "Open to work & internship",
    featured: "✦ Featured project",
    featuredTitle: "School Journal",
    featuredStack: "React · Editorial workflow · UI design",
    journalEyebrow: "OPEN ACCESS JOURNAL",
    journalTitle: "The future",
    journalTitle2: "of science.",
    journalText: "A platform for sharing breakthrough ideas.",
    journalAction: "Explore articles",
    journalCards: ["Editorial workflow", "5 user roles", "PDF viewer"],
    learningNow: "Currently learning",
    developmentDirection: "The next step in my development",
    aboutEyebrow: "01 — About me",
    aboutTitle1: "I enjoy building.",
    aboutTitle2: "I enjoy learning more.",
    aboutText: "I’m a third-year Applied Computer Science bachelor’s student based in Břeclav, Czech Republic. I enjoy turning an idea into a functional, clear website that people can actually use.",
    portraitStatus: "Looking for a job or internship",
    portraitMeta: "Břeclav · Applied Computer Science",
    aboutCards: [
      ["I build practical things", "From a client website to an app managing a school editorial process, I think about usability as well as code."],
      ["I grow with every project", "I’m deepening my React and TypeScript skills, learning Python and gradually moving towards AI-powered applications."],
      ["I’m looking for my first team", "I’d like to join a job or internship where I can get feedback, learn good practices and contribute real work."],
    ],
    projectsEyebrow: "02 — Selected projects",
    projectsTitle1: "From an idea",
    projectsTitle2: "to a working website.",
    projectsText: "Each project has moved me forward in a different area — from client work to more complex application logic and external API integration.",
    learned: "What I practised",
    visit: "Visit project",
    code: "Source code",
    skillsEyebrow: "03 — Skills",
    skillsTitle1: "My stack.",
    skillsTitle2: "And what’s next.",
    skillsText: "Frontend development is the foundation of my current experience. Python and AI are the areas where I’m now intentionally investing my time and energy.",
    nowEyebrow: "Currently building",
    nowTitle: "A small e-commerce project",
    nowText: "I’m currently working on a new e-commerce project, developing its interface, product experience and the complete shopping flow step by step.",
    inProgress: "In progress",
    contactEyebrow: "04 — Contact",
    contactTitle1: "I’m looking for a place",
    contactTitle2: "where I can grow.",
    contactText: "If you’re looking for a junior developer for a job, internship or an interesting project, I’d be happy to introduce myself and show you my work in more detail.",
    email: "Send me an email",
    footer: "Designed and built with a drive to keep learning.",
    top: "Back to top",
  },
} as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectVisual({ project, lang }: { project: (typeof projects)[number]; lang: Lang }) {
  if (project.kind === "egypt") {
    return (
      <div className="project-visual egypt-visual" role="img" aria-label={project.alt[lang]}>
        <div className="browser-bar"><span /><span /><span /><small>jessicaegypt.netlify.app</small></div>
        <div className="egypt-sun" />
        <div className="egypt-copy">
          <span>DISCOVER EGYPT</span>
          <strong>{lang === "cs" ? "Výlety, na které" : "Trips you will"}<br />{lang === "cs" ? "nezapomeneš." : "never forget."}</strong>
          <i>{lang === "cs" ? "Objev krásy Rudého moře" : "Discover the beauty of the Red Sea"}</i>
        </div>
        <div className="dune dune-one" /><div className="dune dune-two" />
      </div>
    );
  }

  return (
    <div className="project-visual image-visual">
      <div className="browser-bar"><span /><span /><span /><small>{project.href.replace("https://", "")}</small></div>
      <img src={project.image ?? ""} alt={project.alt[lang]} loading="lazy" />
    </div>
  );
}

export function PortfolioPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const isEn = lang === "en";

  return (
    <main lang={lang}>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Marek Maněk – top of page">MM</a>
        <nav aria-label={isEn ? "Main navigation" : "Hlavní navigace"}>
          <a href="#about">{c.nav[0]}</a><a href="#projects">{c.nav[1]}</a><a href="#skills">{c.nav[2]}</a><a href="#contact">{c.nav[3]}</a>
          <a className="lang-switch" href={isEn ? "/" : "/en"} aria-label={isEn ? "Česká verze" : "English version"}>{isEn ? "CS" : "EN"}</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">{c.heroEyebrow} <span>•</span> {c.student}</p>
          <h1>{c.heroLine1}<br /><span>{c.heroLine2}</span></h1>
          <p className="hero-intro">{c.heroText}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">{c.projectsCta} <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href="#about">{c.aboutCta} <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="tech-row" aria-label={isEn ? "Core technologies" : "Hlavní technologie"}>
            <li><b className="react-dot">R</b> React</li><li><b className="ts-dot">TS</b> TypeScript</li><li><b className="js-dot">JS</b> JavaScript</li><li><b className="py-dot">Py</b> Python</li>
          </ul>
          <p className="availability"><span /> {c.available}</p>
        </div>

        <div className="hero-showcase" aria-label={isEn ? "Selected work" : "Výběr z Markových projektů"}>
          <div className="showcase-main glass-panel">
            <div className="showcase-heading">
              <p className="eyebrow">{c.featured}</p>
              <a href="https://skolni-casopis.netlify.app" target="_blank" rel="noreferrer">{c.featuredTitle} <Arrow /></a>
              <span>{c.featuredStack}</span>
            </div>
            <div className="app-window">
              <div className="browser-bar"><span /><span /><span /><small>Journal of Advanced Research</small></div>
              <div className="journal-content">
                <div className="journal-copy"><i>{c.journalEyebrow}</i><strong>{c.journalTitle}<br />{c.journalTitle2}</strong><span>{c.journalText}</span><b>{c.journalAction}</b></div>
                <div className="journal-cards">{c.journalCards.map((item, index) => <div key={item}><small>0{index + 1}</small><strong>{item}</strong></div>)}</div>
              </div>
            </div>
          </div>
          <div className="showcase-subgrid">
            <div className="learning-card glass-panel">
              <div><span className="python-mark">Py</span><p><strong>Python / AI</strong><small>{c.learningNow}</small></p></div>
              <div className="progress"><i /></div><span>{c.developmentDirection}</span>
            </div>
            <div className="code-card glass-panel" aria-label={isEn ? "Code sample" : "Ukázka kódu"}>
              <pre><code><em>1</em> <b>def</b> path(code):{"\n"}<em>2</em>   <b>if</b> code == <i>&quot;AI&quot;</i>:{"\n"}<em>3</em>     <span>return</span> <i>&quot;learning&quot;</i>{"\n"}<em>4</em>   <b>else</b>:{"\n"}<em>5</em>     <span>return</span> <i>&quot;building web&quot;</i></code></pre>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="about">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">{c.aboutEyebrow}</p><h2>{c.aboutTitle1}<br /><span>{c.aboutTitle2}</span></h2></div>
          <p>{c.aboutText}</p>
        </div>
        <div className="about-layout">
          <figure className="portrait-card glass-panel">
            <img src="/marek-manek.jpg" alt={isEn ? "Portrait of Marek Maněk" : "Portrét Marka Maňka"} loading="lazy" />
            <div className="portrait-shade" />
            <figcaption><span className="portrait-status"><i /> {c.portraitStatus}</span><strong>Marek Maněk</strong><small>{c.portraitMeta}</small></figcaption>
          </figure>
          <div className="about-grid">
            {c.aboutCards.map((card, index) => <article className={`glass-panel about-card ${index === 0 ? "about-primary" : ""}`} key={card[0]}><span className="card-index">0{index + 1}</span><h3>{card[0]}</h3><p>{card[1]}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section shell" id="projects">
        <div className="section-heading project-heading">
          <div><p className="eyebrow">{c.projectsEyebrow}</p><h2>{c.projectsTitle1}<br /><span>{c.projectsTitle2}</span></h2></div><p>{c.projectsText}</p>
        </div>
        <div className="project-list">
          {projects.map((project) => {
            const title = lang === "cs" && project.titleCs ? project.titleCs : project.title;
            return <article className="project-card glass-panel" key={project.title}>
              <ProjectVisual project={project} lang={lang} />
              <div className="project-info">
                <span className="project-number">{project.number}</span><h3>{title}</h3><p>{project.description[lang]}</p>
                <p className="project-learning"><span>{c.learned}</span>{project.learning[lang]}</p>
                <ul aria-label={`${isEn ? "Technologies used in" : "Technologie projektu"} ${title}`}>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="project-actions">
                  <a href={project.href} target="_blank" rel="noreferrer">{c.visit} <Arrow /></a>
                  <a href={project.repo} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
                </div>
              </div>
            </article>;
          })}
        </div>
      </section>

      <section className="section shell skills-section" id="skills">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">{c.skillsEyebrow}</p><h2>{c.skillsTitle1}<br /><span>{c.skillsTitle2}</span></h2></div><p>{c.skillsText}</p>
        </div>
        <div className="skills-grid">{skills.map((skill, index) => <article className="skill-card" key={skill.name}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{skill.name}</h3><p>{skill.detail[lang]}</p></div><small>{skill.level[lang]}</small></article>)}</div>
        <article className="now-card glass-panel">
          <div><p className="eyebrow">{c.nowEyebrow}</p><h3>{c.nowTitle}</h3><p>{c.nowText}</p></div><span><i /> {c.inProgress}</span>
        </article>
      </section>

      <section className="contact shell" id="contact">
        <div className="contact-glow" /><p className="eyebrow">{c.contactEyebrow}</p><h2>{c.contactTitle1}<br /><span>{c.contactTitle2}</span></h2><p>{c.contactText}</p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:marek.manek.dj@seznam.cz">{c.email} <span aria-hidden="true">↗</span></a>
          <a className="button button-secondary" href="https://github.com/marekcze12" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a className="button button-secondary" href="https://www.linkedin.com/in/marek-man%C4%9Bk-5a9947339/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        </div>
        <a className="contact-email" href="mailto:marek.manek.dj@seznam.cz">marek.manek.dj@seznam.cz</a>
      </section>

      <footer className="site-footer shell"><a className="monogram" href="#top" aria-label={c.top}>MM</a><p>© 2026 Marek Maněk. {c.footer}</p><a href="#top">{c.top} ↑</a></footer>
    </main>
  );
}

export default function Home() {
  return <PortfolioPage lang="cs" />;
}
