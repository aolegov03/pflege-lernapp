# PflegeLernen - kostenlose iPhone/iPad-PWA

Diese App ist eine kostenlose Progressive Web App fuer Pflege-Lerninhalte. Sie laeuft ueber Safari auf iPhone und iPad, kann zum Home-Bildschirm hinzugefuegt werden und speichert den Lernfortschritt lokal auf dem jeweiligen Geraet.

## Wichtig

- Keine echten Patientendaten speichern.
- Die App ist eine Lernhilfe und ersetzt keine Vorgaben deiner Schule, Praxisanleitung oder Einrichtung.
- Fortschritt wird lokal gespeichert. iPhone und iPad synchronisieren nicht automatisch. Nutze dafuer Export/Import unter `Fortschritt`.

## Ordnerstruktur

```text
pflege-lernapp/
├── index.html                  # Startdatei der App
├── manifest.webmanifest        # App-Name, Icon, Anzeige als Web-App
├── sw.js                       # Service Worker fuer Offline-Funktion
├── README.md                   # Diese Anleitung
├── .nojekyll                   # Wichtig fuer GitHub Pages ohne Jekyll-Verarbeitung
├── package.json                # Optional fuer lokalen Test
├── assets/
│   ├── icon-192.png            # App-Icon klein
│   └── icon-512.png            # App-Icon gross
└── src/
    ├── app.js                  # Startet die App
    ├── styles/main.css         # Design, iPhone/iPad-Layout
    ├── data/learningContent.js # Alle Lerninhalte, Fragen, Karten, Bericht-Aufgaben
    ├── core/
    │   ├── App.js              # Hauptklasse, verbindet alles
    │   ├── Router.js           # Navigation ueber #/routen
    │   ├── EventBus.js         # Kleine Ereignis-Verteilung
    │   └── ContentRepository.js# Zugriff auf Lerninhalte
    ├── services/
    │   ├── StorageService.js   # Speichert Daten in IndexedDB, fallback localStorage
    │   ├── ProgressService.js  # Lernstand, Quiz-Ergebnisse, Karteikarten
    │   ├── SpacedRepetitionService.js # Wiederholungsplanung
    │   └── BackupService.js    # Fortschritt exportieren/importieren
    ├── views/
    │   ├── BaseView.js
    │   ├── HomeView.js
    │   ├── TopicsView.js
    │   ├── TopicDetailView.js
    │   ├── FlashcardsView.js
    │   ├── QuizView.js
    │   ├── ReportTrainerView.js
    │   └── ProgressView.js
    └── utils/
        ├── date.js
        └── dom.js
```

## Was die wichtigsten Klassen machen

### App
`src/core/App.js`

Startet die App, erstellt Repository, Speicher, Fortschritt-Service, Backup-Service und Router.

### Router
`src/core/Router.js`

Sorgt fuer Navigation, zum Beispiel:

```text
#/                 Startseite
#/topics           Themenliste
#/topic/wadenwickel Lernseite Wadenwickel
#/quiz/fieber      Quiz Fieber
#/flashcards       Faellige Karteikarten
#/report           Pflegebericht-Trainer
#/progress         Fortschritt und Backup
```

### ContentRepository
`src/core/ContentRepository.js`

Liest die Lerninhalte aus `src/data/learningContent.js`.

### StorageService
`src/services/StorageService.js`

Speichert Daten lokal im Browser. Standard ist IndexedDB. Falls das nicht klappt, wird localStorage verwendet.

### ProgressService
`src/services/ProgressService.js`

Speichert:

- gelesene Themen
- Quiz-Ergebnisse
- Karteikarten-Wiederholungen
- Pflegebericht-Versuche
- Gesamtfortschritt

### SpacedRepetitionService
`src/services/SpacedRepetitionService.js`

Plant, wann Karteikarten wieder fällig sind. Schwer = frueher, leicht = spaeter.

### BackupService
`src/services/BackupService.js`

Exportiert und importiert den Fortschritt als JSON-Datei.

## Lerninhalte bearbeiten

Alle Inhalte liegen in:

```text
src/data/learningContent.js
```

Ein Thema sieht vereinfacht so aus:

```js
{
  id: 'wadenwickel',
  title: 'Wadenwickel',
  subtitle: '...',
  tags: ['Fieber'],
  sections: [
    { heading: 'Material', bullets: ['Nässeschutz', '2 Tücher'] }
  ],
  flashcards: [
    { id: 'ww-material', question: '...', answer: '...' }
  ],
  quiz: [
    {
      id: 'ww-q1',
      question: '...',
      options: ['A', 'B', 'C'],
      correctIndex: 1,
      explanation: '...'
    }
  ]
}
```

Wichtig:

- Jede `id` muss eindeutig sein.
- Bei Quizfragen beginnt `correctIndex` bei 0.
- Beispiel: `correctIndex: 1` bedeutet, dass Antwort 2 richtig ist.

## Lokal testen

Optional am Computer:

```bash
cd pflege-lernapp
python3 -m http.server 8080
```

Dann im Browser oeffnen:

```text
http://localhost:8080
```

Direkt per Doppelklick auf `index.html` ist fuer eine PWA nicht ideal, weil Service Worker/Offline-Funktion normalerweise einen Webserver brauchen.

## GitHub Pages Schritt fuer Schritt

### 1. GitHub-Konto erstellen oder anmelden

Gehe zu GitHub und melde dich an.

### 2. Neues Repository erstellen

Klicke auf `New repository` und nenne es zum Beispiel:

```text
pflege-lernapp
```

Empfehlung fuer den Anfang:

```text
Public
```

### 3. Dateien hochladen

Entpacke die ZIP-Datei. Oeffne den Ordner `pflege-lernapp`.

Wichtig: Lade den Inhalt des Ordners hoch, nicht den ganzen Ordner als Unterordner. Im Repository muss `index.html` direkt sichtbar sein.

Auf GitHub:

```text
Add file -> Upload files -> alle Dateien/Ordner hineinziehen -> Commit changes
```

### 4. GitHub Pages aktivieren

Im Repository:

```text
Settings -> Pages
```

Dann:

```text
Build and deployment
Source: Deploy from a branch
Branch: main
Folder: /root
Save
```

### 5. Link oeffnen

Nach kurzer Zeit zeigt GitHub Pages einen Link an, ungefaehr so:

```text
https://DEINNAME.github.io/pflege-lernapp/
```

Diesen Link auf iPhone oder iPad in Safari oeffnen.

### 6. Auf iPhone/iPad zum Home-Bildschirm hinzufuegen

In Safari:

```text
Teilen-Symbol -> Zum Home-Bildschirm -> Hinzufügen
```

Danach erscheint die App wie ein normales App-Symbol.

## Fortschritt zwischen iPhone und iPad uebertragen

Da die App kostenlos und ohne Benutzerkonto funktioniert, speichert jedes Geraet seinen eigenen Stand.

So uebertraegst du den Fortschritt:

1. Auf dem ersten Geraet App oeffnen.
2. `Fortschritt` oeffnen.
3. `Fortschritt exportieren` tippen.
4. JSON-Datei in iCloud Drive speichern.
5. Auf dem zweiten Geraet App oeffnen.
6. `Fortschritt` oeffnen.
7. Backup-Datei importieren.

## App aktualisieren

Wenn du Inhalte aenderst:

1. Datei `src/data/learningContent.js` bearbeiten.
2. Auf GitHub speichern/committen.
3. GitHub Pages aktualisiert die App.
4. Falls dein iPhone noch die alte Version zeigt: App komplett schliessen und neu oeffnen.

Wenn du Dateien hinzufuegst, muss auch `sw.js` angepasst werden, damit die neue Datei offline gecacht wird.
