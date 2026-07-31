import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function fetchRoute(pathname) {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the Czech portfolio", async () => {
  const response = await fetchRoute("/");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  assert.match(html, /<title>Marek Maněk — junior frontend vývojář<\/title>/);
  assert.match(html, /Ahoj, jsem Marek\./);
  assert.match(html, /Jessica Egypt/);
  assert.match(html, /Hledám první příležitost/);
  assert.doesNotMatch(html, /name=["']codex-preview["']/i);
});

test("renders the English portfolio", async () => {
  const response = await fetchRoute("/en");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /<title>Marek Maněk — Junior Web Developer<\/title>/);
  assert.match(html, /Hi, I’m Marek\./);
  assert.match(html, /I’m looking for my first opportunity/);
});
