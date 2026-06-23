import { App } from './core/App.js';
import { createElement } from './utils/dom.js';

const root = document.querySelector('#app');
const app = new App(root);

app.init().catch((error) => {
  console.error(error);
  root.replaceChildren(createElement('section', { className: 'card' }, [
    createElement('h2', { text: 'Die App konnte nicht gestartet werden.' }),
    createElement('p', { text: 'Bitte prüfe, ob alle Dateien hochgeladen wurden und ob die App über HTTPS/GitHub Pages geöffnet wird.' }),
    createElement('pre', { text: error.message })
  ]));
});
