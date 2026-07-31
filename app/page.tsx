import Image from "next/image";

type Lang = "cs" | "en";

const projects = [
  {
    title: { cs: "Jessica Egypt", en: "Jessica Egypt" },
    type: { cs: "Web pro klientku", en: "Client website" },
    description: {
      cs: "Prezentační web pro nabídku výletů v Egyptě. Řešil jsem strukturu obsahu, responzivní zobrazení i to, aby se návštěvník rychle dostal ke kontaktu.",
      en: "A presentation website for trips in Egypt. I worked on the content structure, responsive layout and a clear route from browsing to making an enquiry.",
    },
    note: {
      cs: "První projekt, u kterého jsem převáděl reálné zadání klientky do hotového webu.",
      en: "My first project based on a real client brief.",
    },
    stack: ["React", "JavaScript", "React Router"],
    live: "https://jessicaegypt.netlify.app",
    repo: "https://github.com/marekcze12/projekt_jessica",
    image: null,
  },
  {
    title: { cs: "Školní časopis", en: "School Journal" },
    type: { cs: "Týmový školní projekt", en: "University team project" },
    description: {
      cs: "Aplikace pro správu školního časopisu s pěti uživatelskými rolemi, recenzním procesem, PDF prohlížečem a veřejným archivem.",
      en: "An application for managing a school journal, with five user roles, a review process, PDF viewer and public archive.",
    },
    note: {
      cs: "Nejvíc práce bylo v pochopení workflow a domluvě v týmu.",
      en: "The hardest part was understanding the workflow and coordinating within the team.",
    },
    stack: ["React", "Tailwind CSS", "Vite"],
    live: "https://skolni-casopis.netlify.app",
    repo: "https://github.com/zemano60/Nam_staci_Ecko",
    image: "/projects/skolni-casopis.png",
  },
  {
    title: { cs: "Krypto dashboard", en: "Crypto dashboard" },
    type: { cs: "Vlastní cvičný projekt", en: "Personal learning project" },
    description: {
      cs: "Dashboard načítající aktuální data z CoinGecko API. Obsahuje vyhledávání, řazení, stavy načítání a ošetření chyb.",
      en: "A dashboard using live data from the CoinGecko API, with search, sorting, loading states and error handling.",
    },
    note: {
      cs: "Tady jsem si poprvé pořádně vyzkoušel asynchronní JavaScript a práci s externím API.",
      en: "This is where I first got comfortable with asynchronous JavaScript and an external API.",
    },
    stack: ["JavaScript", "REST API", "CSS"],
    live: "https://manek-krypto.netlify.app",
    repo: "https://github.com/marekcze12/Krypto-Dashboard",
    image: "/projects/crypto-dashboard.png",
  },
];

const text = {
  cs: {
    nav: ["projekty", "o mně", "kontakt"],
    role: "Junior frontend vývojář · Břeclav",
    intro: "Ahoj, jsem Marek.",
    headline: "Učím se dělat weby, které dávají smysl.",
    lead: "Studuji aplikovanou informatiku a hledám první práci nebo praxi ve vývoji. Nejvíc zkušeností mám s Reactem a JavaScriptem. Teď k nim přidávám TypeScript a Python.",
    seeWork: "Ukázat projekty",
    emailMe: "Napsat mi",
    workTitle: "Co jsem zatím postavil",
    workLead: "Tři projekty, na kterých je nejlépe vidět, co už umím a co jsem se při jejich tvorbě naučil.",
    live: "Otevřít web",
    code: "Kód na GitHubu",
    aboutTitle: "Něco o mně",
    about: [
      "Jsem ve 3. ročníku bakalářského studia aplikované informatiky. K webům jsem se dostal přes školní projekty a postupně mě začalo bavit dotahovat je i po vizuální stránce.",
      "Nemám za sebou roky komerční praxe. Mám ale chuť učit se od zkušenějších lidí, ptát se a převzít odpovědnost za konkrétní úkol. Hledám tým, kde budu moct růst na skutečném produktu.",
    ],
    use: "S čím už pracuji",
    learning: "Co se právě učím",
    useItems: ["React", "JavaScript", "HTML a CSS", "Git", "REST API"],
    learnItems: ["TypeScript", "Python", "základy AI aplikací"],
    currentLabel: "Právě rozpracované",
    currentTitle: "Menší e-shop",
    currentText: "Na vlastním projektu si procházím celý nákupní proces — od práce s produkty po návrh rozhraní. Až bude v použitelném stavu, přidám ho sem.",
    contactTitle: "Hledám první příležitost",
    contactText: "Pokud hledáte juniora na práci, praxi nebo menší projekt, napište mi. Rád pošlu další informace nebo se potkám na krátkém hovoru.",
    footer: "Navrhl a naprogramoval Marek Maněk.",
    top: "nahoru",
  },
  en: {
    nav: ["projects", "about", "contact"],
    role: "Junior frontend developer · Břeclav, Czechia",
    intro: "Hi, I’m Marek.",
    headline: "I’m learning to build websites that make sense.",
    lead: "I study Applied Computer Science and I’m looking for my first developer job or internship. Most of my experience is with React and JavaScript; I’m currently adding TypeScript and Python.",
    seeWork: "See my projects",
    emailMe: "Email me",
    workTitle: "Things I’ve built so far",
    workLead: "Three projects that best show what I can do and what I learned while making them.",
    live: "Open website",
    code: "Code on GitHub",
    aboutTitle: "A bit about me",
    about: [
      "I’m in the third year of my Applied Computer Science bachelor’s degree. I got into web development through university projects and gradually started caring about the visual side too.",
      "I don’t have years of commercial experience yet. What I do have is the willingness to learn from experienced people, ask questions and take responsibility for a concrete task. I’m looking for a team where I can grow on a real product.",
    ],
    use: "What I work with",
    learning: "What I’m learning",
    useItems: ["React", "JavaScript", "HTML & CSS", "Git", "REST APIs"],
    learnItems: ["TypeScript", "Python", "AI application basics"],
    currentLabel: "Work in progress",
    currentTitle: "Small e-commerce project",
    currentText: "I’m using a personal project to work through the complete shopping flow, from products to interface design. I’ll add it here once it is ready to use.",
    contactTitle: "I’m looking for my first opportunity",
    contactText: "If you’re looking for a junior developer for a job, internship or smaller project, send me a message. I’ll be happy to share more or meet for a short call.",
    footer: "Designed and built by Marek Maněk.",
    top: "back to top",
  },
} as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function PortfolioPage({ lang }: { lang: Lang }) {
  const t = text[lang];
  const en = lang === "en";

  return (
    <main id="top" lang={lang}>
      <header className="site-header shell">
        <a className="logo" href="#top">Marek Maněk</a>
        <nav aria-label={en ? "Main navigation" : "Hlavní navigace"}>
          <a href="#projects">{t.nav[0]}</a>
          <a href="#about">{t.nav[1]}</a>
          <a href="#contact">{t.nav[2]}</a>
          <a className="language" href={en ? "/" : "/en"}>{en ? "CZ" : "EN"}</a>
        </nav>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <p className="kicker">{t.role}</p>
          <h1><span>{t.intro}</span>{t.headline}</h1>
          <p className="lead">{t.lead}</p>
          <div className="actions">
            <a className="button primary" href="#projects">{t.seeWork} <span>↓</span></a>
            <a className="text-link" href="mailto:marek.manek.dj@seznam.cz">{t.emailMe} <Arrow /></a>
          </div>
        </div>
        <figure className="portrait">
          <Image src="/marek-manek.jpg" alt="Marek Maněk" width={640} height={853} priority />
          <figcaption>
            <span>03/2026</span>
            <span>Břeclav</span>
          </figcaption>
        </figure>
      </section>

      <section className="section shell" id="projects">
        <div className="section-intro">
          <p className="section-number">01</p>
          <div><h2>{t.workTitle}</h2><p>{t.workLead}</p></div>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project" key={project.title.cs}>
              <div className={`project-preview preview-${index + 1}`}>
                {project.image
                  ? <Image src={project.image} alt={`${project.title[lang]} — ${en ? "website preview" : "náhled webu"}`} fill sizes="(max-width: 900px) 100vw, 58vw" />
                  : <div className="egypt-preview"><span>Jessica Egypt</span><strong>Discover the<br />Red Sea</strong><small>Trips & experiences</small></div>}
              </div>
              <div className="project-copy">
                <p className="project-type">0{index + 1} / {project.type[lang]}</p>
                <h3>{project.title[lang]}</h3>
                <p>{project.description[lang]}</p>
                <p className="project-note">{project.note[lang]}</p>
                <ul>{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">{t.live} <Arrow /></a>
                  <a href={project.repo} target="_blank" rel="noreferrer">{t.code} <Arrow /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about shell" id="about">
        <div className="section-intro">
          <p className="section-number">02</p>
          <div><h2>{t.aboutTitle}</h2>{t.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </div>
        <div className="skills">
          <div><p>{t.use}</p><ul>{t.useItems.map((item) => <li key={item}>{item}</li>)}</ul></div>
          <div><p>{t.learning}</p><ul>{t.learnItems.map((item) => <li key={item}>{item}</li>)}</ul></div>
        </div>
        <div className="now">
          <p>{t.currentLabel}</p>
          <div><h3>{t.currentTitle}</h3><p>{t.currentText}</p></div>
          <span aria-hidden="true">↘</span>
        </div>
      </section>

      <section className="contact shell" id="contact">
        <p className="section-number">03</p>
        <div>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <a className="email" href="mailto:marek.manek.dj@seznam.cz">marek.manek.dj@seznam.cz <Arrow /></a>
          <div className="socials">
            <a href="https://github.com/marekcze12" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a href="https://www.linkedin.com/in/marek-man%C4%9Bk-5a9947339/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <p>© 2026 · {t.footer}</p>
        <a href="#top">{t.top} ↑</a>
      </footer>
    </main>
  );
}

export default function Page() {
  return <PortfolioPage lang="cs" />;
}
