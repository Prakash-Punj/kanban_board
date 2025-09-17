
export function createElement(tag, className, text) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (text) e.textContent = text;
  return e;
}

export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

