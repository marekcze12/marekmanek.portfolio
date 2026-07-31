# Portfolio Marka Maňka

Zdrojový kód osobního portfolia juniorního webového vývojáře. Web obsahuje českou a anglickou verzi, projekty, dovednosti, portrét a kontaktní odkazy.

## Spuštění projektu

Požadavky:

- Node.js 22.13 nebo novější
- npm

V kořenové složce projektu spusťte:

```bash
npm install
npm run dev
```

Vývojový server následně vypíše lokální adresu webu.

## Důležité příkazy

```bash
npm run dev       # lokální vývoj
npm run build     # produkční sestavení
npm run lint      # kontrola kódu
```

## Struktura

- `app/page.tsx` – obsah české i anglické verze portfolia
- `app/en/page.tsx` – anglická cesta `/en`
- `app/globals.css` – kompletní vzhled a responzivní chování
- `public/` – portrét, náhledy projektů a favicon
- `.openai/hosting.json` – nastavení nasazení přes Sites

Objemné složky se závislostmi a sestavením nejsou v balíčku. Vytvoří se lokálně po instalaci a sestavení.
