import { createElement } from '../utils/dom.js';

export class BaseView {
  constructor(context) {
    this.context = context;
  }

  async render(root) {
    root.append(this.emptyState('Seite nicht gefunden', 'Diese Ansicht existiert nicht.', this.linkButton('Zur Startseite', '/')));
  }

  stack() {
    return createElement('div', { className: 'view-stack' });
  }

  card(children = [], className = 'card') {
    return createElement('section', { className }, Array.isArray(children) ? children : [children]);
  }

  heading(title, subtitle = '') {
    const wrapper = createElement('div');
    wrapper.append(createElement('h2', { text: title }));
    if (subtitle) wrapper.append(createElement('p', { className: 'lead', text: subtitle }));
    return wrapper;
  }

  actions(items = []) {
    const wrapper = createElement('div', { className: 'actions' });
    items.forEach((item) => wrapper.append(item));
    return wrapper;
  }

  linkButton(label, path, variant = 'button') {
    return createElement('a', { className: variant, href: `#${path}`, text: label });
  }

  button(label, onClick, variant = 'button') {
    return createElement('button', { className: variant, type: 'button', text: label, onClick });
  }

  progressBar(value) {
    const bar = createElement('div', { className: 'progress-bar' });
    const fill = createElement('span');
    fill.style.setProperty('--progress', `${Math.max(0, Math.min(100, value))}%`);
    bar.append(fill);
    return bar;
  }

  tags(tags = []) {
    const wrapper = createElement('div', { className: 'tags' });
    tags.forEach((tag) => wrapper.append(createElement('span', { className: 'tag', text: tag })));
    return wrapper;
  }

  emptyState(title, text, action = null) {
    const children = [
      createElement('strong', { text: title }),
      createElement('p', { text })
    ];
    if (action) children.push(action);
    return this.card(createElement('div', { className: 'empty-state' }, children));
  }
}
