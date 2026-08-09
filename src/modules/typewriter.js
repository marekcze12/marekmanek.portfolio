const CHARACTER_DELAY = 75;
const DELETE_DELAY = 50;
const LINE_DELAY = 115;
const LINE_DELETE_DELAY = 45;
const START_DELAY = 500;
const FINISHED_DELAY = 1500;
const RESTART_DELAY = 500;

function wait(duration) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
}

async function typeNodes(nodes, target) {
  for (const node of nodes) {
    if (node.nodeType === Node.TEXT_NODE) {
      const typedText = document.createTextNode('');
      target.append(typedText);

      const text = node.textContent ?? '';

      for (const character of text) {
        typedText.textContent += character;

        const delay = character.trim()
          ? CHARACTER_DELAY
          : CHARACTER_DELAY / 2;

        await wait(delay);
      }

      continue;
    }

    if (node.nodeName === 'BR') {
      target.append(node.cloneNode());
      await wait(LINE_DELAY);
      continue;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const clonedElement = node.cloneNode(false);

      target.append(clonedElement);

      await typeNodes(
        [...node.childNodes],
        clonedElement
      );
    }
  }
}

async function deleteNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    while (node.textContent.length > 0) {
      node.textContent = node.textContent.slice(0, -1);
      await wait(DELETE_DELAY);
    }

    node.remove();
    return;
  }

  if (node.nodeName === 'BR') {
    node.remove();
    await wait(LINE_DELETE_DELAY);
    return;
  }

  if (node.nodeType === Node.ELEMENT_NODE) {
    while (node.lastChild) {
      await deleteNode(node.lastChild);
    }

    node.remove();
  }
}

async function deleteContent(target) {
  while (target.lastChild) {
    await deleteNode(target.lastChild);
  }
}

export function initTypewriter() {
  const wrapper = document.querySelector('[data-typewriter]');

  const content = wrapper?.querySelector(
    '[data-typewriter-content]'
  );

  if (!wrapper || !content) return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) return;

  const sourceNodes = [...content.childNodes].map((node) =>
    node.cloneNode(true)
  );

  let hasStarted = false;

  async function startTypewriterLoop() {
    if (hasStarted) return;

    hasStarted = true;
    content.replaceChildren();

    await wait(START_DELAY);

    while (wrapper.isConnected) {
      wrapper.classList.remove(
        'is-typed',
        'is-deleting'
      );

      wrapper.classList.add('is-typing');

      await typeNodes(sourceNodes, content);

      wrapper.classList.remove('is-typing');
      wrapper.classList.add('is-typed');

      await wait(FINISHED_DELAY);

      wrapper.classList.remove('is-typed');
      wrapper.classList.add('is-deleting');

      await deleteContent(content);

      wrapper.classList.remove('is-deleting');

      await wait(RESTART_DELAY);
    }
  }

  if (!('IntersectionObserver' in window)) {
    startTypewriterLoop();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      const isVisible = entries.some(
        (entry) => entry.isIntersecting
      );

      if (!isVisible) return;

      observer.disconnect();
      startTypewriterLoop();
    },
    {
      threshold: 0.4
    }
  );

  observer.observe(wrapper);
}