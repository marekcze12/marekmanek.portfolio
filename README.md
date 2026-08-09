# Portfolio Marka Maňka

Jednostránkové osobní portfolio začínajícího webového vývojáře a UX/UI designéra Marka Maňka. Projekt je postavený bez frontendového frameworku, s důrazem na rychlost, přístupnost, responzivitu a snadnou údržbu.

## Hlavní funkce

- responzivní dark-mode design od 320 px,
- přístupná desktopová a mobilní navigace,
- dynamicky generované projektové karty,
- modulární JavaScript,
- animace respektující `prefers-reduced-motion`,
- klientská validace v češtině,
- formulář připravený pro Netlify Forms,
- SEO, Open Graph a JSON-LD metadata,
- optimalizované WebP náhledy projektů.

## Technologie

HTML5, Tailwind CSS, vlastní CSS, Vanilla JavaScript ES6+, Vite, Node.js, npm a Netlify Forms.

## Lokální spuštění

Požadován je Node.js 20.19+ nebo 22.12+ a npm.

```bash
git clone URL_REPOZITARE
cd portfolio
npm install
npm run dev
```

Vite vypíše lokální adresu, obvykle `http://localhost:5173`.

## Produkční build

```bash
npm run build
```

Výstup vznikne ve složce `dist/`. Lokální kontrolu buildu spustíte pomocí `npm run preview`.

## Nasazení na Netlify

1. Nahrajte repozitář na GitHub.
2. V Netlify zvolte **Add new site → Import an existing project** a propojte GitHub.
3. Build command ponechte `npm run build` a publish directory `dist` (hodnoty jsou také v `netlify.toml`).
4. Po prvním nasazení Netlify automaticky rozpozná formulář `contact`.
5. V nastavení Forms lze zapnout e-mailová upozornění na nové zprávy.

Formulář používá atribut `data-netlify="true"`, skryté pole `form-name` a honeypot `bot-field`. Na lokálním Vite serveru se zprávy do Netlify neukládají; plně funguje až na nasazené doméně Netlify.

## Kde co upravit

- osobní texty, služby, kontakty a metadata: `index.html`,
- seznam a údaje projektů: `src/data/projects.js`,
- projektové screenshoty: `public/images/projects/`,
- barvy a vizuální styl: `src/style.css` a `tailwind.config.js`,
- navigace, animace a formulář: `src/modules/`,
- canonical URL a Open Graph URL: horní část `index.html` (nahraďte `https://www.vase-domena.cz/`).

Screenshoty nahrazujte při zachování názvů `jessica-egypt.webp`, `krypto-dashboard.webp` a `vspj-editorial-system.webp`. Doporučený rozměr je 1200 × 750 px.

## Struktura

```text
public/               statické soubory a obrázky
src/data/             upravitelná data projektů
src/modules/          samostatné JS moduly
src/main.js           vstupní bod aplikace
src/style.css         Tailwind vrstvy a vlastní styly
index.html            obsah a struktura stránky
netlify.toml          build a bezpečnostní hlavičky
```
