import { clear } from '../utils/dom.js';

export class Router {
  constructor(root, options = {}) {
    this.root = root;
    this.routes = [];
    this.onRouteChange = options.onRouteChange ?? (() => {});
    this.notFoundFactory = options.notFoundFactory ?? null;
  }

  add(pathPattern, viewFactory) {
    this.routes.push({ pathPattern, viewFactory });
    return this;
  }

  start() {
    window.addEventListener('hashchange', () => this.resolve());
    this.resolve();
  }

  navigate(path) {
    const normalized = path.startsWith('/') ? path : `/${path}`;
    window.location.hash = `#${normalized}`;
  }

  currentPath() {
    return window.location.hash.replace(/^#/, '') || '/';
  }

  async resolve() {
    const path = this.currentPath();
    const match = this.findMatch(path);
    clear(this.root);

    if (!match) {
      if (this.notFoundFactory) {
        const view = this.notFoundFactory();
        await view.render(this.root, {});
      } else {
        this.root.textContent = 'Seite nicht gefunden.';
      }
      this.onRouteChange(path);
      return;
    }

    const view = match.route.viewFactory();
    await view.render(this.root, match.params);
    this.onRouteChange(path);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  findMatch(path) {
    for (const route of this.routes) {
      const params = this.matchRoute(route.pathPattern, path);
      if (params) return { route, params };
    }
    return null;
  }

  matchRoute(pattern, path) {
    const patternParts = this.splitPath(pattern);
    const pathParts = this.splitPath(path);

    if (patternParts.length !== pathParts.length) {
      return null;
    }

    const params = {};
    for (let index = 0; index < patternParts.length; index += 1) {
      const patternPart = patternParts[index];
      const pathPart = pathParts[index];

      if (patternPart.startsWith(':')) {
        params[patternPart.slice(1)] = decodeURIComponent(pathPart);
        continue;
      }

      if (patternPart !== pathPart) {
        return null;
      }
    }

    return params;
  }

  splitPath(value) {
    return value.replace(/^\//, '').replace(/\/$/, '').split('/').filter(Boolean);
  }
}
