export function clear(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

export function escapeHTML(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function percent(value) {
  const safeValue = Number.isFinite(value) ? value : 0;
  return `${Math.round(Math.max(0, Math.min(100, safeValue)))}%`;
}

export function createElement(tag, options = {}, children = []) {
  const element = document.createElement(tag);

  Object.entries(options).forEach(([key, value]) => {
    if (value === undefined || value === null) return;

    if (key === 'className') {
      element.className = value;
      return;
    }

    if (key === 'dataset') {
      Object.entries(value).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
      return;
    }

    if (key.startsWith('on') && typeof value === 'function') {
      element.addEventListener(key.slice(2).toLowerCase(), value);
      return;
    }

    if (key === 'text') {
      element.textContent = value;
      return;
    }

    if (key === 'html') {
      element.innerHTML = value;
      return;
    }

    if (key === 'ariaLabel') {
      element.setAttribute('aria-label', value);
      return;
    }

    element.setAttribute(key, value);
  });

  children.forEach((child) => {
    if (child === undefined || child === null) return;
    element.append(child instanceof Node ? child : document.createTextNode(String(child)));
  });

  return element;
}

export function sectionTitle(title, text = '') {
  const wrapper = createElement('div');
  wrapper.append(createElement('h2', { text: title }));
  if (text) wrapper.append(createElement('p', { className: 'lead', text }));
  return wrapper;
}
