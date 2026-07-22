const projects = [
  {
    number: "01",
    title: "Jessica Egypt",
    description:
      "Webová prezentace výletů v Egyptě vytvořená pro skutečnou klientku. Přehledná nabídka zážitků, responzivní rozhraní a důraz na snadnou orientaci.",
    stack: ["React", "TypeScript", "Responsive UI"],
    href: "https://jessicaegypt.netlify.app",
    kind: "egypt",
    image: null,
    alt: "Stylizovaný náhled webu Jessica Egypt",
  },
  {
    number: "02",
    title: "Školní časopis",
    description:
      "Webová aplikace, která digitalizuje redakční workflow. Pracuje s pěti uživatelskými rolemi, recenzním procesem, PDF prohlížečem a veřejným archivem.",
    stack: ["React", "Tailwind CSS", "Vite"],
    href: "https://skolni-casopis.netlify.app",
    kind: "image",
    image: "/projects/skolni-casopis.png",
    alt: "Ukázka webové aplikace Školní časopis",
  },
  {
    number: "03",
    title: "Krypto Dashboard",
    description:
      "Dashboard pro sledování kryptoměn v reálném čase. Načítá data z CoinGecko API, umožňuje vyhledávání i řazení a ukládá čas poslední aktualizace.",
    stack: ["JavaScript", "REST API", "CSS Grid"],
    href: "https://manek-krypto.netlify.app",
    kind: "image",
    image: "/projects/crypto-dashboard.png",
    alt: "Ukázka aplikace Krypto Dashboard",
  },
];

const skills = [
  { name: "React", detail: "Komponenty a moderní UI", level: "Používám" },
  { name: "TypeScript", detail: "Typově bezpečný frontend", level: "Rozvíjím" },
  { name: "JavaScript", detail: "ES6+, API a práce s DOM", level: "Používám" },
  { name: "HTML & CSS", detail: "Sémantika a responzivita", level: "Používám" },
  { name: "Python", detail: "Základy a automatizace", level: "Právě se učím" },
  { name: "AI development", detail: "První praktické projekty", level: "Další krok" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  if (project.kind === "egypt") {
    return (
      <div className="project-visual egypt-visual" aria-label={project.alt}>
        <div className="browser-bar">
          <span />
          <span />
          <span />
          <small>jessicaegypt.netlify.app</small>
        </div>
        <div className="egypt-sun" />
        <div className="egypt-copy">
          <span>DISCOVER EGYPT</span>
          <strong>Výlety, na které<br />nezapomeneš.</strong>
          <i>Objev krásy Rudého moře</i>
        </div>
        <div className="dune dune-one" />
        <div className="dune dune-two" />
      </div>
    );
  }

  return (
    <div className="project-visual image-visual">
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <small>{project.href.replace("https://", "")}</small>
      </div>
      <img src={project.image ?? ""} alt={project.alt} loading="lazy" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#nahoru" aria-label="Marek Maněk – začátek stránky">
          MM
        </a>
        <nav aria-label="Hlavní navigace">
          <a href="#o-mne">O mně</a>
          <a href="#projekty">Projekty</a>
          <a href="#dovednosti">Dovednosti</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="hero shell" id="nahoru">
        <div className="hero-copy">
          <p className="eyebrow">Junior web developer <span>•</span> Student VŠ</p>
          <h1>
            Tvořím weby.<br />
            <span>Učím se AI.</span>
          </h1>
          <p className="hero-intro">
            Jsem Marek, juniorní vývojář a student aplikované informatiky.
            Hledám práci nebo praxi, kde budu stavět moderní weby a růst v Pythonu a AI.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projekty">
              Prohlédnout projekty <span aria-hidden="true">→</span>
            </a>
            <a className="button button-secondary" href="#o-mne">
              Více o mně <span aria-hidden="true">↓</span>
            </a>
          </div>
          <ul className="tech-row" aria-label="Hlavní technologie">
            <li><b className="react-dot">R</b> React</li>
            <li><b className="ts-dot">TS</b> TypeScript</li>
            <li><b className="js-dot">JS</b> JavaScript</li>
            <li><b className="py-dot">Py</b> Python</li>
          </ul>
          <p className="availability"><span /> Open to work &amp; internship</p>
        </div>

        <div className="hero-showcase" aria-label="Výběr z Markových projektů">
          <div className="showcase-main glass-panel">
            <div className="showcase-heading">
              <p className="eyebrow">✦ Vybraný projekt</p>
              <a href="https://skolni-casopis.netlify.app" target="_blank" rel="noreferrer">
                Školní časopis <Arrow />
              </a>
              <span>React · Redakční workflow · UI design</span>
            </div>
            <div className="app-window">
              <div className="browser-bar"><span /><span /><span /><small>Journal of Advanced Research</small></div>
              <div className="journal-content">
                <div className="journal-copy">
                  <i>OPEN ACCESS JOURNAL</i>
                  <strong>Budoucnost<br />vědy.</strong>
                  <span>Platforma pro sdílení průlomových myšlenek.</span>
                  <b>Prozkoumat články</b>
                </div>
                <div className="journal-cards">
                  <div><small>01</small><strong>Redakční workflow</strong></div>
                  <div><small>02</small><strong>5 uživatelských rolí</strong></div>
                  <div><small>03</small><strong>PDF prohlížeč</strong></div>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase-subgrid">
            <div className="learning-card glass-panel">
              <div><span className="python-mark">Py</span><p><strong>Python / AI</strong><small>Právě se učím</small></p></div>
              <div className="progress"><i /></div>
              <span>Další směr mého rozvoje</span>
            </div>
            <div className="code-card glass-panel" aria-label="Ukázka kódu">
              <pre><code><em>1</em> <b>def</b> cesta(kod):{"\n"}<em>2</em>   <b>if</b> kod == <i>&quot;AI&quot;</i>:{"\n"}<em>3</em>     <span>return</span> <i>&quot;učím se&quot;</i>{"\n"}<em>4</em>   <b>else</b>:{"\n"}<em>5</em>     <span>return</span> <i>&quot;stavím weby&quot;</i></code></pre>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="o-mne">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">01 — O mně</p>
            <h2>Vývoj mě baví.<br /><span>Učení ještě víc.</span></h2>
          </div>
          <p>
            Studuji 3. ročník bakalářského oboru aplikovaná informatika a žiji v Břeclavi.
            Nejvíc mě baví proměnit nápad ve funkční, přehledný web, který může někdo opravdu používat.
          </p>
        </div>
        <div className="about-layout">
          <figure className="portrait-card glass-panel">
            <img src="/marek-manek.jpg" alt="Portrét Marka Maňka" loading="lazy" />
            <div className="portrait-shade" />
            <figcaption>
              <span className="portrait-status"><i /> Hledám práci nebo praxi</span>
              <strong>Marek Maněk</strong>
              <small>Břeclav · aplikovaná informatika</small>
            </figcaption>
          </figure>
          <div className="about-grid">
            <article className="glass-panel about-card about-primary">
              <span className="card-index">01</span>
              <h3>Stavím prakticky</h3>
              <p>Od prezentačního webu pro skutečnou klientku až po aplikaci pro řízení školní redakce. U každého projektu řeším nejen kód, ale i použitelnost.</p>
            </article>
            <article className="glass-panel about-card">
              <span className="card-index">02</span>
              <h3>Rostu s každým projektem</h3>
              <p>Prohlubuji React a TypeScript, učím se Python a postupně mířím k vývoji aplikací využívajících AI.</p>
            </article>
            <article className="glass-panel about-card">
              <span className="card-index">03</span>
              <h3>Hledám první tým</h3>
              <p>Rád se zapojím do práce nebo praxe, kde získám zpětnou vazbu, naučím se dobré postupy a přispěji reálnou prací.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section shell" id="projekty">
        <div className="section-heading project-heading">
          <div>
            <p className="eyebrow">02 — Vybrané projekty</p>
            <h2>Od nápadu<br /><span>k funkčnímu webu.</span></h2>
          </div>
          <p>Každý projekt mi pomohl posunout se v jiné oblasti — od práce pro klienta přes komplexnější aplikační logiku až po integraci externího API.</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card glass-panel" key={project.title}>
              <ProjectVisual project={project} />
              <div className="project-info">
                <span className="project-number">{project.number}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label={`Technologie projektu ${project.title}`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a href={project.href} target="_blank" rel="noreferrer">
                  Navštívit projekt <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell skills-section" id="dovednosti">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">03 — Dovednosti</p>
            <h2>Můj stack.<br /><span>A další směr.</span></h2>
          </div>
          <p>Frontend tvoří základ mých současných zkušeností. Python a AI jsou oblast, do které teď cíleně investuji čas a energii.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skill-card" key={skill.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{skill.name}</h3><p>{skill.detail}</p></div>
              <small>{skill.level}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="contact shell" id="kontakt">
        <div className="contact-glow" />
        <p className="eyebrow">04 — Kontakt</p>
        <h2>Hledám místo,<br /><span>kde můžu růst.</span></h2>
        <p>Pokud hledáte juniorního vývojáře na práci, stáž nebo zajímavý projekt, rád se představím a ukážu svou práci podrobněji.</p>
        <div className="contact-note">
          <span>Kontaktní e-mail, GitHub a LinkedIn budou doplněny.</span>
          <a href="#projekty">Zatím se podívat na projekty <span aria-hidden="true">↑</span></a>
        </div>
      </section>

      <footer className="site-footer shell">
        <a className="monogram" href="#nahoru" aria-label="Zpět nahoru">MM</a>
        <p>© 2026 Marek Maněk. Navrženo a vytvořeno s chutí učit se.</p>
        <a href="#nahoru">Zpět nahoru ↑</a>
      </footer>
    </main>
  );
}
