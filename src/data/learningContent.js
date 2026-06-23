export const learningContent = {
  topics: [
    {
      id: 'wadenwickel',
      title: 'Wadenwickel',
      subtitle: 'Fiebersenkende Massnahme sicher vorbereiten, durchfuehren und dokumentieren.',
      tags: ['Fieber', 'Massnahme', 'Beobachtung'],
      safetyNote: 'Lernhinweis: Wadenwickel nur nach Schul-/Einrichtungsstandard anwenden. Nicht anwenden bei Schuettelfrost, kalten Fuessen/Beinen oder Unwohlsein.',
      sections: [
        {
          heading: 'Ziel',
          bullets: [
            'Wärmeabgabe über Verdunstung unterstützen.',
            'Fieber senken oder Wohlbefinden verbessern.',
            'Kreislauf, Haut und Befinden während der Massnahme beobachten.'
          ]
        },
        {
          heading: 'Material',
          bullets: [
            'Nässeschutz, zum Beispiel Unterlage für das Bett.',
            'Zwei Tücher, zum Beispiel Geschirrtücher oder Baumwolltücher.',
            'Lauwarmes Wasser, nicht eiskalt; als Faustregel nicht mehr als etwa 10 °C kälter als die Körpertemperatur.',
            'Optional: leichte Decke zum Zudecken, aber keinen Hitzestau erzeugen.'
          ]
        },
        {
          heading: 'Durchführung',
          bullets: [
            'Nässeschutz unter die Beine legen.',
            'Zwei Tücher mit lauwarmem Wasser anfeuchten.',
            'Tücher gut auswringen, damit sie feucht sind, aber nicht tropfen.',
            'Tücher locker und faltenfrei um die Waden wickeln.',
            'Beine nicht zu fest einwickeln, damit Feuchtigkeit verdunsten kann.',
            'Nach etwa 5 bis 10 Minuten kontrollieren: Wenn die Tücher warm geworden sind, wechseln.',
            'Je nach Zustand und Standard 2 bis 3 Wiederholungen möglich.',
            'Temperatur und Befinden weiter kontrollieren.'
          ]
        },
        {
          heading: 'Nicht anwenden / Vorsicht',
          bullets: [
            'Nicht bei Schüttelfrost.',
            'Nicht bei kalten Füssen oder kalten Beinen.',
            'Nicht bei starkem Unwohlsein oder wenn die Person die Massnahme ablehnt.',
            'Keinen Nässeschutz direkt luftdicht um die Beine wickeln, sonst kann Hitzestau entstehen.',
            'Bei auffälligem Zustand, sehr hohem oder anhaltendem Fieber Fachkraft/Arzt nach Standard informieren.'
          ]
        },
        {
          heading: 'Dokumentation',
          bullets: [
            'Datum und Uhrzeit.',
            'Temperaturwert vor der Massnahme und ggf. danach.',
            'Beobachtung: Haut warm/kalt, Schüttelfrost ja/nein, Befinden.',
            'Massnahme: Wadenwickel, Dauer, Wechsel der Tücher.',
            'Reaktion der Person und weiteres Vorgehen.',
            'Kürzel/Unterschrift nach Vorgabe.'
          ]
        }
      ],
      flashcards: [
        { id: 'ww-material', question: 'Welches Material brauchst du für Wadenwickel?', answer: 'Nässeschutz, zwei Tücher, lauwarmes Wasser und optional eine leichte Decke.' },
        { id: 'ww-wasser', question: 'Warum darf das Wasser nicht eiskalt sein?', answer: 'Zu kaltes Wasser kann unangenehm sein, den Kreislauf belasten und Kältereize auslösen. Es soll lauwarm sein.' },
        { id: 'ww-auswringen', question: 'Warum werden die Tücher gut ausgewrungen?', answer: 'Sie sollen feucht sein, aber nicht tropfen. So bleibt die Massnahme kontrolliert und das Bett wird nicht durchnässt.' },
        { id: 'ww-kontrolle', question: 'Wann kontrollierst du die Wadenwickel?', answer: 'Nach etwa 5 bis 10 Minuten oder früher, wenn die Person sich unwohl fühlt.' },
        { id: 'ww-warm', question: 'Was machst du, wenn die Tücher warm geworden sind?', answer: 'Tücher entfernen oder wechseln, je nach Zustand, Fieber und Standard.' },
        { id: 'ww-nicht', question: 'Wann darfst du Wadenwickel nicht anwenden?', answer: 'Bei Schüttelfrost, kalten Füssen/Beinen, Unwohlsein, Ablehnung oder Gefahr eines Hitzestaus.' },
        { id: 'ww-doku', question: 'Was gehört zur Dokumentation eines Wadenwickels?', answer: 'Datum, Uhrzeit, Temperatur, Beobachtung, Massnahme, Dauer, Reaktion und weiteres Vorgehen.' }
      ],
      quiz: [
        {
          id: 'ww-q1',
          question: 'Welche Aussage ist richtig?',
          options: ['Wadenwickel werden möglichst fest gewickelt.', 'Wadenwickel sollen locker und faltenfrei liegen.', 'Wadenwickel brauchen immer eiskaltes Wasser.'],
          correctIndex: 1,
          explanation: 'Die Tücher sollen locker und ohne Falten anliegen, damit Verdunstung möglich ist und kein Druck entsteht.'
        },
        {
          id: 'ww-q2',
          question: 'Bei welcher Situation sind Wadenwickel nicht geeignet?',
          options: ['Warme Beine ohne Schüttelfrost', 'Kalte Füsse und Schüttelfrost', 'Person wünscht eine leichte Decke'],
          correctIndex: 1,
          explanation: 'Bei Schüttelfrost oder kalten Beinen/Füssen keine fiebersenkenden Wadenwickel anwenden.'
        },
        {
          id: 'ww-q3',
          question: 'Was muss nach 5 bis 10 Minuten geprüft werden?',
          options: ['Ob die Tücher warm geworden sind und wie es der Person geht', 'Ob die Tücher trocken gebügelt sind', 'Ob die Beine luftdicht abgedeckt sind'],
          correctIndex: 0,
          explanation: 'Du prüfst Tücher, Haut, Befinden und entscheidest nach Standard über Entfernen oder Wechseln.'
        }
      ]
    },
    {
      id: 'fieber',
      title: 'Fieber',
      subtitle: 'Temperatur einordnen, Fieberphasen erkennen und passende Massnahmen ableiten.',
      tags: ['Temperatur', 'Phasen', 'Massnahmen'],
      safetyNote: 'Richtwerte können je nach Alter, Messort und Standard abweichen. Bei kritischem Zustand immer Fachkraft/Arzt informieren.',
      sections: [
        {
          heading: 'Einordnung',
          bullets: [
            'Normale Körpertemperatur liegt grob im Bereich 36,5 bis 37,4 °C, abhängig vom Messort.',
            'Erhöhte Temperatur: ungefähr 37,5 bis 38,0 °C.',
            'Fieber: ungefähr ab 38,1 °C bei Erwachsenen.',
            'Hohes Fieber: häufig ab etwa 39,0 °C.',
            'Immer Messort, Uhrzeit und Zustand mitdenken.'
          ]
        },
        {
          heading: 'Fieberanstieg',
          bullets: [
            'Person friert, hat Gänsehaut oder Schüttelfrost.',
            'Haut kann blass und kalt wirken.',
            'Massnahmen: warm halten, Ruhe, Vitalzeichen kontrollieren, Flüssigkeit anbieten, keine Wadenwickel bei Schüttelfrost.'
          ]
        },
        {
          heading: 'Fieberhöhe',
          bullets: [
            'Haut ist häufig warm/heiss, Gesicht gerötet, Durst möglich.',
            'Puls und Atemfrequenz können erhöht sein.',
            'Massnahmen: Flüssigkeit anbieten, leichte Kleidung/Bettdecke, Temperaturkontrolle, fiebersenkende Massnahmen nach Standard.'
          ]
        },
        {
          heading: 'Fieberabfall',
          bullets: [
            'Person schwitzt, Temperatur sinkt.',
            'Kreislauf kann belastet sein.',
            'Massnahmen: trockene Kleidung/Bettwäsche, Flüssigkeit, Hautpflege, Kreislauf beobachten.'
          ]
        }
      ],
      flashcards: [
        { id: 'fi-abwann', question: 'Ab wann spricht man bei Erwachsenen grob von Fieber?', answer: 'Ungefähr ab 38,1 °C, abhängig von Messort und Standard.' },
        { id: 'fi-erhoeht', question: 'Was bedeutet erhöhte Temperatur?', answer: 'Eine Temperatur über normal, aber noch nicht sicher Fieber, grob etwa 37,5 bis 38,0 °C.' },
        { id: 'fi-anstieg', question: 'Welche Zeichen passen zum Fieberanstieg?', answer: 'Frieren, Gänsehaut, Schüttelfrost, blasse oder kühle Haut.' },
        { id: 'fi-hoehe', question: 'Welche Massnahmen passen zur Fieberhöhe?', answer: 'Flüssigkeit, leichte Kleidung, Temperaturkontrolle, Beobachtung und Massnahmen nach Standard.' },
        { id: 'fi-abfall', question: 'Was beobachtest du beim Fieberabfall?', answer: 'Schwitzen, sinkende Temperatur, Kreislauf und Flüssigkeitsbedarf.' }
      ],
      quiz: [
        {
          id: 'fi-q1',
          question: 'Eine Person friert stark und hat Schüttelfrost. Welche Phase passt am besten?',
          options: ['Fieberanstieg', 'Fieberabfall', 'Normale Temperaturphase'],
          correctIndex: 0,
          explanation: 'Frieren und Schüttelfrost passen typischerweise zum Fieberanstieg.'
        },
        {
          id: 'fi-q2',
          question: 'Welche Massnahme passt beim Fieberabfall besonders?',
          options: ['Nasse Kleidung anlassen', 'Verschwitzte Kleidung/Bettwäsche wechseln', 'Person zusätzlich stark zudecken'],
          correctIndex: 1,
          explanation: 'Beim Schwitzen sollte trockene Kleidung/Bettwäsche angeboten und der Kreislauf beobachtet werden.'
        },
        {
          id: 'fi-q3',
          question: 'Was muss bei jedem Temperaturwert mit dokumentiert werden?',
          options: ['Lieblingsgetränk', 'Messort und Uhrzeit', 'Zimmernummer des Thermometers'],
          correctIndex: 1,
          explanation: 'Messort und Uhrzeit sind wichtig, weil Temperaturwerte je nach Messort und Tageszeit variieren.'
        }
      ]
    },
    {
      id: 'vitalwerte',
      title: 'Vitalwerte',
      subtitle: 'Puls, Blutdruck und Temperatur beobachten, messen und mit Fachbegriffen beschreiben.',
      tags: ['Puls', 'Blutdruck', 'Temperatur'],
      safetyNote: 'Vitalwerte sind immer zusammen mit Zustand, Beschwerden, Alter, Diagnosen und ärztlichen Vorgaben zu bewerten.',
      sections: [
        {
          heading: 'Puls',
          bullets: [
            'Pulsfrequenz: Anzahl der Pulsschläge pro Minute.',
            'Richtwert Erwachsene in Ruhe: ungefähr 60 bis 100/min.',
            'Tachykardie: zu schneller Puls.',
            'Bradykardie: zu langsamer Puls.',
            'Pulsqualität: kräftig, schwach, regelmässig, unregelmässig.'
          ]
        },
        {
          heading: 'Blutdruck',
          bullets: [
            'Systolischer Wert: Druck beim Zusammenziehen des Herzens.',
            'Diastolischer Wert: Druck in der Erschlaffungsphase.',
            'Beispiel: 120/80 mmHg.',
            'Hypertonie: zu hoher Blutdruck.',
            'Hypotonie: zu niedriger Blutdruck.'
          ]
        },
        {
          heading: 'Temperatur',
          bullets: [
            'Messorte: oral, rektal, axillär, tympanal je nach Standard.',
            'Dokumentation: Wert, Messort, Uhrzeit, Beschwerden und Massnahmen.',
            'Fachbegriffe: subfebril/erhöht, Fieber, Hyperthermie, Hypothermie.'
          ]
        }
      ],
      flashcards: [
        { id: 'vw-pulsfrequenz', question: 'Was bedeutet Pulsfrequenz?', answer: 'Anzahl der Pulsschläge pro Minute.' },
        { id: 'vw-tachy', question: 'Was bedeutet Tachykardie?', answer: 'Zu schneller Puls.' },
        { id: 'vw-brady', question: 'Was bedeutet Bradykardie?', answer: 'Zu langsamer Puls.' },
        { id: 'vw-systole', question: 'Was ist der systolische Blutdruckwert?', answer: 'Der obere Wert: Druck beim Zusammenziehen des Herzens.' },
        { id: 'vw-diastole', question: 'Was ist der diastolische Blutdruckwert?', answer: 'Der untere Wert: Druck in der Erschlaffungsphase des Herzens.' },
        { id: 'vw-hypertonie', question: 'Was bedeutet Hypertonie?', answer: 'Zu hoher Blutdruck.' },
        { id: 'vw-doku', question: 'Was gehört bei Vitalwerten in die Dokumentation?', answer: 'Datum, Uhrzeit, Wert, Messort/Methode, Beobachtung, Massnahme und ggf. Information an Fachkraft/Arzt.' }
      ],
      quiz: [
        {
          id: 'vw-q1',
          question: 'Was bedeutet Bradykardie?',
          options: ['Zu schneller Puls', 'Zu langsamer Puls', 'Zu hoher Blutdruck'],
          correctIndex: 1,
          explanation: 'Bradykardie bedeutet zu langsamer Puls.'
        },
        {
          id: 'vw-q2',
          question: 'Was ist bei 120/80 mmHg der systolische Wert?',
          options: ['120', '80', 'Beide Werte zusammen'],
          correctIndex: 0,
          explanation: 'Der systolische Blutdruck ist der obere Wert.'
        },
        {
          id: 'vw-q3',
          question: 'Warum ist der Messort bei Temperatur wichtig?',
          options: ['Weil Werte je nach Messort unterschiedlich sein können', 'Weil nur axilläre Werte zählen', 'Weil der Messort nie dokumentiert wird'],
          correctIndex: 0,
          explanation: 'Temperaturwerte können je nach Messort abweichen, deshalb wird der Messort dokumentiert.'
        }
      ]
    },
    {
      id: 'mundpflege',
      title: 'Mundpflege und Zahnprothesenpflege',
      subtitle: 'Mundraum beobachten, reinigen, Prothese sicher pflegen und dokumentieren.',
      tags: ['Grundpflege', 'Mundraum', 'Prothese'],
      safetyNote: 'Bei Schmerzen, Blutungen, Druckstellen, Soorverdacht oder Schluckstörungen Fachkraft informieren.',
      sections: [
        {
          heading: 'Mundpflege',
          bullets: [
            'Hände desinfizieren, Material vorbereiten, Intimsphäre und Ressourcen beachten.',
            'Mundschleimhaut, Lippen, Zunge, Zähne und Geruch beobachten.',
            'Zähne nach Möglichkeit mit Zahnbürste und Zahnpasta reinigen.',
            'Bei eingeschränkter Selbstpflege anleiten, unterstützen oder übernehmen.',
            'Lippen bei Bedarf pflegen, Flüssigkeit anbieten, wenn erlaubt.'
          ]
        },
        {
          heading: 'Zahnprothesenpflege',
          bullets: [
            'Prothese vorsichtig herausnehmen oder Person dabei unterstützen.',
            'Waschbecken sichern, zum Beispiel mit Wasser füllen oder Tuch einlegen, damit die Prothese nicht zerbricht.',
            'Prothese mit Bürste reinigen, Mundraum und Zahnfleisch kontrollieren.',
            'Prothese nach Wunsch/Standard wieder einsetzen oder sicher aufbewahren.',
            'Druckstellen, Risse oder schlechten Sitz dokumentieren und melden.'
          ]
        }
      ],
      flashcards: [
        { id: 'mp-beobachten', question: 'Was beobachtest du bei der Mundpflege?', answer: 'Schleimhaut, Lippen, Zunge, Zähne, Beläge, Blutungen, Geruch, Schmerzen und Prothese.' },
        { id: 'mp-prothese-sichern', question: 'Warum wird das Waschbecken bei Prothesenpflege gesichert?', answer: 'Damit die Prothese beim Herunterfallen nicht zerbricht.' },
        { id: 'mp-druckstelle', question: 'Was machst du bei Druckstellen durch eine Prothese?', answer: 'Beobachten, dokumentieren und Fachkraft informieren.' },
        { id: 'mp-ressource', question: 'Warum ist Ressourcenförderung wichtig?', answer: 'Die Person soll so viel wie möglich selbst tun, damit Selbstständigkeit erhalten bleibt.' }
      ],
      quiz: [
        {
          id: 'mp-q1',
          question: 'Was ist bei Zahnprothesenpflege wichtig?',
          options: ['Prothese über hartem Waschbecken trocken reinigen', 'Waschbecken sichern und Prothese vorsichtig reinigen', 'Prothese immer heimlich entfernen'],
          correctIndex: 1,
          explanation: 'Die Prothese wird vorsichtig gereinigt und gegen Herunterfallen gesichert.'
        },
        {
          id: 'mp-q2',
          question: 'Was meldest du der Fachkraft?',
          options: ['Druckstellen, Blutungen oder Schmerzen', 'Dass Zahnpasta gut riecht', 'Dass die Bürste blau ist'],
          correctIndex: 0,
          explanation: 'Auffälligkeiten im Mundraum müssen weitergegeben und dokumentiert werden.'
        }
      ]
    },
    {
      id: 'intimpflege',
      title: 'Intimpflege',
      subtitle: 'Intimsphäre schützen, hygienisch arbeiten und Hautzustand beobachten.',
      tags: ['Spezielle Pflege', 'Hygiene', 'Haut'],
      safetyNote: 'Intimpflege erfordert besondere Wahrung von Würde, Zustimmung, Diskretion und professioneller Nähe/Distanz.',
      sections: [
        {
          heading: 'Grundprinzipien',
          bullets: [
            'Intimsphäre schützen: Tür schliessen, Sichtschutz, nur nötige Körperbereiche entkleiden.',
            'Einverständnis einholen und jeden Schritt ankündigen.',
            'Handschuhe tragen, wenn Kontakt mit Ausscheidungen oder Schleimhäuten möglich ist.',
            'Von sauber nach weniger sauber arbeiten.',
            'Waschlappen/Einmalmaterial wechseln, wenn es verschmutzt ist.'
          ]
        },
        {
          heading: 'Durchführung Frauen',
          bullets: [
            'Von vorne nach hinten reinigen, damit Darmkeime nicht in Richtung Harnröhre gelangen.',
            'Hautfalten vorsichtig reinigen und gut trocknen.',
            'Rötungen, Ausfluss, Geruch, Schmerzen oder Hautschäden beobachten.'
          ]
        },
        {
          heading: 'Durchführung Männer',
          bullets: [
            'Penis, Hodensack und Leistenbereich reinigen und trocknen.',
            'Wenn Vorhaut vorhanden und beweglich: vorsichtig zurückziehen, Eichel reinigen, danach Vorhaut wieder vorschieben.',
            'Rötungen, Beläge, Schwellungen, Schmerzen oder Hautschäden beobachten.'
          ]
        }
      ],
      flashcards: [
        { id: 'ip-intimsphaere', question: 'Was ist bei Intimpflege besonders wichtig?', answer: 'Intimsphäre, Zustimmung, Würde, Hygiene, Ressourcen und Beobachtung.' },
        { id: 'ip-richtung', question: 'Warum wird bei Frauen von vorne nach hinten gereinigt?', answer: 'Damit Darmkeime nicht in Richtung Harnröhre oder Genitalbereich verschleppt werden.' },
        { id: 'ip-vorhaut', question: 'Was ist nach dem Reinigen der Eichel wichtig?', answer: 'Die Vorhaut wieder vorschieben, wenn sie zuvor zurückgezogen wurde.' },
        { id: 'ip-beobachtung', question: 'Welche Auffälligkeiten beobachtest du?', answer: 'Rötungen, Geruch, Ausfluss, Schmerzen, Hautschäden, Schwellungen oder Blutungen.' }
      ],
      quiz: [
        {
          id: 'ip-q1',
          question: 'Welche Aussage ist richtig?',
          options: ['Bei Frauen von hinten nach vorne reinigen', 'Bei Frauen von vorne nach hinten reinigen', 'Richtung ist egal'],
          correctIndex: 1,
          explanation: 'Von vorne nach hinten reduziert das Risiko der Keimverschleppung.'
        },
        {
          id: 'ip-q2',
          question: 'Was gehört zur professionellen Intimpflege?',
          options: ['Sichtschutz und Einverständnis', 'Möglichst viele Personen im Zimmer', 'Nicht erklären, was man tut'],
          correctIndex: 0,
          explanation: 'Diskretion, Zustimmung und Erklären der Schritte sind zentral.'
        }
      ]
    },
    {
      id: 'lotionen',
      title: 'Lotionen und Hautpflege',
      subtitle: 'Wann welche Hautpflege sinnvoll ist und wie du die Auswahl begründest.',
      tags: ['Hautpflege', 'Lotion', 'Begründung'],
      safetyNote: 'Hautpflege immer nach Hautzustand, Biografie, Allergien, Standard und ärztlichen Anordnungen auswählen.',
      sections: [
        {
          heading: 'O/W-Lotion: Öl in Wasser',
          bullets: [
            'Eher wasserreich und leicht.',
            'Zieht meist schneller ein.',
            'Geeignet bei normaler bis leicht trockener Haut oder wenn keine starke Rückfettung nötig ist.',
            'Begründung: spendet Feuchtigkeit, ohne stark zu fetten.'
          ]
        },
        {
          heading: 'W/O-Lotion oder fettreiche Pflege: Wasser in Öl',
          bullets: [
            'Eher fettreich und schützend.',
            'Geeignet bei trockener, spröder Haut, wenn Rückfettung gewünscht ist.',
            'Begründung: unterstützt die Hautbarriere und verringert Austrocknung.',
            'Nicht unnötig dick in Hautfalten auftragen, damit kein feuchtes Milieu entsteht.'
          ]
        },
        {
          heading: 'Spezielle Produkte',
          bullets: [
            'Barrierecreme: Schutz vor Feuchtigkeit, zum Beispiel bei Inkontinenz nach Standard.',
            'Zinkhaltige Produkte: bei gereizter Haut nur gezielt und nach Vorgabe.',
            'Keine unbekannten Produkte bei Allergieverdacht verwenden.',
            'Hautzustand vor und nach der Pflege beobachten und dokumentieren.'
          ]
        }
      ],
      flashcards: [
        { id: 'lo-ow', question: 'Wann passt eher eine O/W-Lotion?', answer: 'Bei normaler bis leicht trockener Haut, wenn eine leichte, feuchtigkeitsspendende Pflege gewünscht ist.' },
        { id: 'lo-wo', question: 'Wann passt eher eine W/O-Lotion?', answer: 'Bei trockener, spröder Haut, wenn Rückfettung und Schutz der Hautbarriere gewünscht sind.' },
        { id: 'lo-barriere', question: 'Wann kann eine Barrierecreme sinnvoll sein?', answer: 'Bei Feuchtigkeitsbelastung, zum Beispiel im Inkontinenzbereich, nach Standard.' },
        { id: 'lo-hautfalten', question: 'Warum soll man Hautfalten nicht unnötig dick eincremen?', answer: 'Zu viel Creme kann ein feuchtes Milieu fördern und Hautreizungen begünstigen.' }
      ],
      quiz: [
        {
          id: 'lo-q1',
          question: 'Eine Person hat sehr trockene, spröde Haut. Welche Pflege passt eher?',
          options: ['Eher rückfettende W/O-Pflege', 'Nur Wasser ohne Pflege', 'Immer zinkhaltige Paste grossflächig'],
          correctIndex: 0,
          explanation: 'Bei trockener Haut kann rückfettende Pflege sinnvoll sein, sofern keine Gegenanzeigen bestehen.'
        },
        {
          id: 'lo-q2',
          question: 'Was prüfst du vor neuer Hautpflege?',
          options: ['Allergien, Hautzustand, Standard und Wünsche', 'Nur die Farbe der Verpackung', 'Nichts, Hautpflege ist immer gleich'],
          correctIndex: 0,
          explanation: 'Hautpflege wird individuell ausgewählt und begründet.'
        }
      ]
    },
    {
      id: 'rasur',
      title: 'Rasur',
      subtitle: 'Nassrasur oder Trockenrasur passend begründen und sicher durchführen.',
      tags: ['Grundpflege', 'Biografie', 'Sicherheit'],
      safetyNote: 'Bei Blutungsgefahr, Hautproblemen, Antikoagulation oder Verletzungen nach Standard entscheiden und ggf. Fachkraft fragen.',
      sections: [
        {
          heading: 'Nassrasur',
          bullets: [
            'Geeignet, wenn die Person es gewohnt ist und die Haut intakt ist.',
            'Benötigt Rasierer, Rasierschaum/-gel, warmes Wasser, Handtuch und ggf. Aftershave/Pflege nach Wunsch.',
            'Haut straffen, vorsichtig rasieren, Schnittverletzungen vermeiden.',
            'Begründung: gründlich, biografieorientiert, angenehm bei gewohnter Nassrasur.'
          ]
        },
        {
          heading: 'Trockenrasur',
          bullets: [
            'Geeignet bei empfindlicher Haut, Zeitdruck, Blutungsrisiko oder wenn die Person Trockenrasur gewohnt ist.',
            'Elektrischen Rasierer prüfen und hygienisch verwenden.',
            'Begründung: geringeres Schnittverletzungsrisiko als Klinge, oft schneller und schonender.'
          ]
        },
        {
          heading: 'Beobachtung und Dokumentation',
          bullets: [
            'Hautzustand, Rötungen, Schnittverletzungen, Muttermale oder Irritationen beobachten.',
            'Besonderheiten dokumentieren, zum Beispiel Rasur abgelehnt, Schnittverletzung versorgt, Hautreizung beobachtet.'
          ]
        }
      ],
      flashcards: [
        { id: 'ra-nass', question: 'Wann passt eine Nassrasur?', answer: 'Wenn die Person es gewohnt ist, die Haut intakt ist und kein erhöhtes Blutungsrisiko besteht.' },
        { id: 'ra-trocken', question: 'Wann passt eine Trockenrasur?', answer: 'Bei empfindlicher Haut, Blutungsrisiko oder wenn die Person Trockenrasur gewohnt ist.' },
        { id: 'ra-begruendung', question: 'Was gehört zur Begründung der Rasurart?', answer: 'Biografie/Wunsch, Hautzustand, Sicherheit, Blutungsrisiko und vorhandenes Material.' },
        { id: 'ra-doku', question: 'Was dokumentierst du nach einer auffälligen Rasur?', answer: 'Hautzustand, Verletzungen, Ablehnung, Massnahmen und Information an Fachkraft.' }
      ],
      quiz: [
        {
          id: 'ra-q1',
          question: 'Eine Person nimmt Blutverdünner und hat empfindliche Haut. Welche Rasur ist eher sicher?',
          options: ['Trockenrasur nach Standard', 'Nassrasur mit stumpfer Klinge', 'Keine Beobachtung nötig'],
          correctIndex: 0,
          explanation: 'Bei Blutungsrisiko ist eine Trockenrasur oft sicherer; Standards beachten.'
        },
        {
          id: 'ra-q2',
          question: 'Warum ist Biografie bei Rasur wichtig?',
          options: ['Weil Gewohnheiten und Wünsche berücksichtigt werden', 'Weil Rasur immer gleich ist', 'Weil Hautzustand unwichtig ist'],
          correctIndex: 0,
          explanation: 'Grundpflege soll ressourcen- und biografieorientiert sein.'
        }
      ]
    },
    {
      id: 'pflegebericht',
      title: 'Pflegebericht schreiben',
      subtitle: 'Beobachtungen sachlich, vollständig und nachvollziehbar formulieren.',
      tags: ['Dokumentation', 'Fallbeispiel', 'Fachsprache'],
      safetyNote: 'Dokumentiere sachlich, zeitnah, wertfrei und nach Vorgaben deiner Einrichtung oder Schule.',
      sections: [
        {
          heading: 'Grundregel',
          bullets: [
            'Nicht interpretieren, sondern beobachten und beschreiben.',
            'Keine abwertenden Wörter verwenden.',
            'Messwerte mit Einheit, Uhrzeit und Methode dokumentieren.',
            'Massnahme und Reaktion der Person festhalten.',
            'Auffälligkeiten und Weitergabe an Fachkraft/Arzt dokumentieren.'
          ]
        },
        {
          heading: 'Baustein-Formel',
          bullets: [
            'Datum/Uhrzeit.',
            'Ausgangslage oder Beobachtung.',
            'Messwert oder konkrete Angabe.',
            'Durchgeführte Massnahme.',
            'Reaktion/Ergebnis.',
            'Weiteres Vorgehen.',
            'Kürzel/Unterschrift.'
          ]
        },
        {
          heading: 'Gute Formulierungen',
          bullets: [
            '„Bewohnerin gibt Schmerzen im rechten Knie mit 6/10 an.“',
            '„Temperatur axillär 39,1 °C gemessen.“',
            '„Massnahme nach Standard durchgeführt, gut toleriert.“',
            '„Fachkraft informiert.“'
          ]
        }
      ],
      flashcards: [
        { id: 'pb-sachlich', question: 'Wie soll ein Pflegebericht formuliert sein?', answer: 'Sachlich, wertfrei, zeitnah, vollständig und nachvollziehbar.' },
        { id: 'pb-bausteine', question: 'Welche Bausteine gehören oft in einen Pflegebericht?', answer: 'Datum/Uhrzeit, Beobachtung, Messwert, Massnahme, Reaktion, weiteres Vorgehen und Kürzel.' },
        { id: 'pb-messwert', question: 'Was gehört zu einem Messwert?', answer: 'Wert, Einheit, Uhrzeit, Messort/Methode und ggf. Reaktion/Massnahme.' },
        { id: 'pb-wertfrei', question: 'Warum keine Bewertungen wie „nervig“ dokumentieren?', answer: 'Dokumentation soll professionell, beobachtbar und wertfrei sein.' }
      ],
      quiz: [
        {
          id: 'pb-q1',
          question: 'Welche Formulierung ist am besten?',
          options: ['Bewohner war nervig.', 'Bewohner klingelte zwischen 08:00 und 08:30 Uhr dreimal und gab Durst an.', 'Bewohner wollte einfach Aufmerksamkeit.'],
          correctIndex: 1,
          explanation: 'Diese Formulierung ist konkret, beobachtbar und wertfrei.'
        },
        {
          id: 'pb-q2',
          question: 'Was gehört bei Fieber in den Pflegebericht?',
          options: ['Nur „hat Fieber“', 'Temperaturwert, Messort, Uhrzeit, Beobachtung, Massnahme und Reaktion', 'Nur die Farbe des Thermometers'],
          correctIndex: 1,
          explanation: 'Messwerte und Massnahmen müssen nachvollziehbar dokumentiert werden.'
        }
      ]
    }
  ],
  reportTasks: [
    {
      id: 'bericht-wadenwickel',
      topicId: 'wadenwickel',
      title: 'Pflegebericht: Wadenwickel bei Fieber',
      caseText: 'Fall: Bewohnerin Frau K. hat um 08:15 Uhr axillär 39,1 °C. Haut warm, keine kalten Beine, kein Schüttelfrost. Nach Rücksprache/Standard wird ein Wadenwickel durchgeführt. Nach 10 Minuten sind die Tücher warm. Frau K. toleriert die Massnahme gut und sagt, dass sie sich etwas wohler fühlt. Flüssigkeit wurde angeboten.',
      checklist: [
        { label: 'Datum oder Uhrzeit genannt', keywords: ['uhr', 'datum', '08:15', '08.15'] },
        { label: 'Temperaturwert dokumentiert', keywords: ['39,1', '39.1', 'temperatur', '°c'] },
        { label: 'Messort genannt', keywords: ['axillär', 'axillar', 'messort'] },
        { label: 'Beobachtung beschrieben', keywords: ['haut', 'warm', 'schüttelfrost', 'kalte beine', 'kalte füße', 'kalte füsse'] },
        { label: 'Massnahme genannt', keywords: ['wadenwickel', 'tücher', 'tuecher'] },
        { label: 'Dauer oder Kontrolle genannt', keywords: ['10 minuten', '5', '10', 'kontroll', 'warm geworden'] },
        { label: 'Reaktion der Bewohnerin genannt', keywords: ['toleriert', 'wohler', 'reaktion', 'befinden'] },
        { label: 'Weiteres Vorgehen/Flüssigkeit genannt', keywords: ['flüssigkeit', 'fluessigkeit', 'angeboten', 'weiter', 'kontrolle'] }
      ],
      sample: '23.06.2026, 08:15 Uhr: Temperatur axillär 39,1 °C gemessen. Frau K. wirkt erschöpft, Haut warm, keine kalten Beine, kein Schüttelfrost. Wadenwickel nach Standard durchgeführt, Tücher lauwarm angelegt, Nässeschutz verwendet. 08:25 Uhr: Tücher körperwarm, Massnahme beendet/gewechselt. Frau K. toleriert die Massnahme gut und gibt an, sich etwas wohler zu fühlen. Flüssigkeit angeboten, weitere Temperaturkontrolle geplant. Kürzel.'
    },
    {
      id: 'bericht-vitalwerte',
      topicId: 'vitalwerte',
      title: 'Pflegebericht: Vitalwerte auffällig',
      caseText: 'Fall: Herr M. wirkt beim Aufstehen schwindelig. Um 07:40 Uhr misst du Blutdruck 95/60 mmHg und Puls 104/min, regelmässig. Herr M. wird hingesetzt, Beine hochgelagert, Flüssigkeit angeboten. Fachkraft wird informiert. Nach 10 Minuten gibt Herr M. an, dass der Schwindel nachlässt.',
      checklist: [
        { label: 'Uhrzeit genannt', keywords: ['07:40', '07.40', 'uhr'] },
        { label: 'Beobachtung Schwindel genannt', keywords: ['schwindel', 'schwindelig'] },
        { label: 'Blutdruck mit Einheit genannt', keywords: ['95/60', 'mmhg', 'blutdruck'] },
        { label: 'Puls mit Einheit genannt', keywords: ['104', 'puls', '/min'] },
        { label: 'Massnahmen genannt', keywords: ['hingesetzt', 'beine', 'hochgelagert', 'flüssigkeit', 'fluessigkeit'] },
        { label: 'Fachkraft informiert', keywords: ['fachkraft', 'informiert'] },
        { label: 'Reaktion/Verlauf genannt', keywords: ['10 minuten', 'nachlässt', 'nachlaesst', 'besser'] }
      ],
      sample: '23.06.2026, 07:40 Uhr: Herr M. wirkt beim Aufstehen schwindelig. Blutdruck 95/60 mmHg, Puls 104/min regelmässig gemessen. Herr M. hingesetzt, Beine hochgelagert, Flüssigkeit angeboten. Fachkraft informiert. 07:50 Uhr: Herr M. gibt an, dass der Schwindel nachlässt. Weitere Beobachtung nach Standard. Kürzel.'
    },
    {
      id: 'bericht-mundpflege',
      topicId: 'mundpflege',
      title: 'Pflegebericht: Prothesendruckstelle',
      caseText: 'Fall: Bei der Zahnprothesenpflege berichtet Frau S. über Schmerzen am Zahnfleisch. Du siehst eine gerötete Druckstelle im Oberkieferbereich. Die Prothese wird gereinigt und Frau S. setzt sie vorerst nicht wieder ein. Fachkraft wird informiert.',
      checklist: [
        { label: 'Schmerzen genannt', keywords: ['schmerz', 'schmerzen'] },
        { label: 'Druckstelle/Rötung genannt', keywords: ['druckstelle', 'gerötet', 'geroetet', 'rötung', 'roetung'] },
        { label: 'Ort beschrieben', keywords: ['oberkiefer', 'zahnfleisch'] },
        { label: 'Prothesenpflege/Massnahme genannt', keywords: ['prothese', 'gereinigt', 'nicht wieder ein'] },
        { label: 'Fachkraft informiert', keywords: ['fachkraft', 'informiert'] }
      ],
      sample: '23.06.2026, 09:20 Uhr: Frau S. berichtet während der Zahnprothesenpflege über Schmerzen am Zahnfleisch. Im Oberkieferbereich gerötete Druckstelle sichtbar. Prothese gereinigt, Frau S. setzt Prothese vorerst nicht wieder ein. Fachkraft informiert. Weitere Beobachtung nach Standard. Kürzel.'
    }
  ]
  
};
/* =========================================================
   Schwierigkeit + pruefungsnahe Zusatzfragen
   Diesen Block ganz unten in learningContent.js einfuegen.
   Bestehende Fragen bleiben erhalten.
   ========================================================= */

const quizQuestionMeta = {
  'ww-q1': { difficulty: 'leicht', type: 'Grundlagenfrage' },
  'ww-q2': { difficulty: 'mittel', type: 'Sicherheitsfrage' },
  'ww-q3': { difficulty: 'mittel', type: 'Durchfuehrung' },

  'fi-q1': { difficulty: 'mittel', type: 'Fieberphase' },
  'fi-q2': { difficulty: 'mittel', type: 'Massnahme' },
  'fi-q3': { difficulty: 'leicht', type: 'Dokumentation' },

  'vw-q1': { difficulty: 'leicht', type: 'Fachbegriff' },
  'vw-q2': { difficulty: 'leicht', type: 'Fachbegriff' },
  'vw-q3': { difficulty: 'mittel', type: 'Messung' },

  'mp-q1': { difficulty: 'leicht', type: 'Grundpflege' },
  'mp-q2': { difficulty: 'mittel', type: 'Beobachtung' },

  'ip-q1': { difficulty: 'mittel', type: 'Hygiene' },
  'ip-q2': { difficulty: 'mittel', type: 'Professionelles Handeln' },

  'lo-q1': { difficulty: 'mittel', type: 'Hautpflege' },
  'lo-q2': { difficulty: 'mittel', type: 'Beobachtung' },

  'ra-q1': { difficulty: 'mittel', type: 'Sicherheit' },
  'ra-q2': { difficulty: 'leicht', type: 'Biografie' },

  'pb-q1': { difficulty: 'mittel', type: 'Dokumentation' },
  'pb-q2': { difficulty: 'mittel', type: 'Dokumentation' }
};

const pruefungsFragen = {
  wadenwickel: [
    {
      id: 'ww-pruefung-1',
      difficulty: 'pruefung',
      type: 'Fallfrage',
      question: 'Eine Bewohnerin hat 39,2 °C Temperatur. Die Beine sind warm, es besteht kein Schuettelfrost. Sie ist ansprechbar, wirkt aber erschoepft. Welche Aussage ist fachlich am besten?',
      options: [
        'Wadenwickel sind bei Fieber ueber 39 °C grundsaetzlich verboten.',
        'Wadenwickel koennen nach Standard geeignet sein, wenn keine Kontraindikationen bestehen und Zustand, Temperatur und Wohlbefinden weiter beobachtet werden.',
        'Die Tuecher sollten eiskalt und sehr fest angelegt werden, damit die Temperatur schneller sinkt.',
        'Nach dem Anlegen sind keine weiteren Kontrollen notwendig.'
      ],
      correctIndex: 1,
      explanation: 'Pruefungslogik: erst Kontraindikationen pruefen, dann nach Standard durchfuehren, Wirkung und Befinden kontrollieren und die Massnahme dokumentieren.'
    },
    {
      id: 'ww-pruefung-2',
      difficulty: 'pruefung',
      type: 'Pflegeentscheidung',
      question: 'Ein Bewohner hat 38,9 °C Temperatur, kalte Fuesse und Schuettelfrost. Angehoerige bitten darum, sofort Wadenwickel anzulegen. Wie reagieren Sie fachlich korrekt?',
      options: [
        'Wadenwickel sofort anlegen, weil jede Temperatur ueber 38 °C gesenkt werden muss.',
        'Wadenwickel nicht anwenden, da kalte Fuesse und Schuettelfrost dagegen sprechen. Zustand beobachten, Vitalwerte kontrollieren und nach Standard/Fachkraft handeln.',
        'Nur einen Wadenwickel anlegen, damit der Koerper nicht zu stark auskuehlt.',
        'Die Beine luftdicht einwickeln, damit kein Waermeverlust entsteht.'
      ],
      correctIndex: 1,
      explanation: 'Kalte Fuesse und Schuettelfrost sprechen gegen Wadenwickel. In der Pruefung ist die Begruendung wichtig: keine zusaetzliche Kuehlung im Fieberanstieg, Beobachtung und Information nach Standard.'
    },
    {
      id: 'ww-schwer-1',
      difficulty: 'schwer',
      type: 'Reihenfolge/Beobachtung',
      question: 'Nach 8 Minuten sind die Wadenwickel koerperwarm. Die Bewohnerin sagt, dass sie sich wohler fuehlt. Was ist jetzt am sinnvollsten?',
      options: [
        'Tuecher kontrollieren, entfernen oder nach Standard wechseln, Befinden und Temperatur weiter beobachten und dokumentieren.',
        'Tuecher mehrere Stunden liegen lassen, damit die Wirkung laenger anhaelt.',
        'Die Tuecher trocken foehnen und weiter verwenden.',
        'Die Beine fester einwickeln, damit die Tuecher nicht verrutschen.'
      ],
      correctIndex: 0,
      explanation: 'Wenn die Tuecher warm geworden sind, wird die Massnahme kontrolliert beendet oder nach Standard wiederholt. Wichtig sind Beobachtung, Temperaturkontrolle und Dokumentation.'
    },
    {
      id: 'ww-pruefung-3',
      difficulty: 'pruefung',
      type: 'Dokumentation',
      question: 'Welche Dokumentation nach einem Wadenwickel ist am fachlichsten?',
      options: [
        'Bewohner hatte Fieber. Wadenwickel gemacht.',
        '08:15 Uhr Temp. 39,2 °C, Haut warm, keine kalten Beine, kein Schuettelfrost. Wadenwickel nach Standard mit lauwarmen Tuechern angelegt, gut toleriert. 08:25 Uhr Tuecher koerperwarm, Bewohnerin fuehlt sich wohler. Weitere Temperaturkontrolle geplant. Kuerzel.',
        'Fieber behandelt, alles okay.',
        'Wadenwickel waren erfolgreich.'
      ],
      correctIndex: 1,
      explanation: 'Eine gute Dokumentation ist sachlich, zeitnah und nachvollziehbar: Messwert, Beobachtung, Massnahme, Reaktion, Verlauf, weiteres Vorgehen und Kuerzel.'
    }
  ],

  fieber: [
    {
      id: 'fi-pruefung-1',
      difficulty: 'pruefung',
      type: 'Fieberphase',
      question: 'Eine Person liegt im Bett, friert stark, hat Gaensehaut und Schuettelfrost. Die Temperatur steigt. Welche pflegerische Massnahme passt am besten?',
      options: [
        'Person warm halten, Ruhe ermoeglichen, Vitalzeichen kontrollieren und keine kuehlenden Massnahmen wie Wadenwickel anwenden.',
        'Sofort Wadenwickel anlegen, weil Schuettelfrost immer gekuehlt werden muss.',
        'Fenster weit oeffnen und Decke entfernen, auch wenn die Person friert.',
        'Die Temperatur nicht mehr messen, da Schuettelfrost eindeutig ist.'
      ],
      correctIndex: 0,
      explanation: 'Schuettelfrost passt zum Fieberanstieg. In dieser Phase steht Waermeerhalt, Beobachtung, Vitalzeichenkontrolle und Handeln nach Standard im Vordergrund.'
    },
    {
      id: 'fi-schwer-1',
      difficulty: 'schwer',
      type: 'Massnahmenwahl',
      question: 'Eine Bewohnerin schwitzt stark, die Temperatur sinkt, Kleidung und Bettwaesche sind feucht. Was ist pflegerisch besonders wichtig?',
      options: [
        'Feuchte Kleidung belassen, damit die Temperatur weiter sinkt.',
        'Trockene Kleidung/Bettwaesche anbieten, Fluessigkeit anbieten, Haut und Kreislauf beobachten.',
        'Person dick zudecken, damit sie noch staerker schwitzt.',
        'Keine Dokumentation, weil Schwitzen normal ist.'
      ],
      correctIndex: 1,
      explanation: 'Beim Fieberabfall kann starkes Schwitzen auftreten. Wichtig sind trockene Kleidung, Fluessigkeit, Kreislaufbeobachtung und Dokumentation.'
    },
    {
      id: 'fi-pruefung-2',
      difficulty: 'pruefung',
      type: 'Prioritaet',
      question: 'Eine Person hat 39,5 °C Temperatur, heisse Haut, Durst und wirkt erschoepft. Was tun Sie zuerst fachlich sinnvoll?',
      options: [
        'Zustand einschaetzen, Vitalzeichen kontrollieren, Fluessigkeit anbieten falls erlaubt, leichte Kleidung/Decke waehlen und nach Standard/Fachkraft handeln.',
        'Sofort mehrere Decken auflegen, damit die Person ausschwitzt.',
        'Nur den Wert notieren und keine weitere Beobachtung durchfuehren.',
        'Die Person allein lassen, weil Fieber immer harmlos ist.'
      ],
      correctIndex: 0,
      explanation: 'Bei hohem Fieber zaehlt nicht nur der Zahlenwert. Wichtig sind Allgemeinzustand, Vitalzeichen, Fluessigkeit, Hitzestau vermeiden, Standard beachten und ggf. Fachkraft informieren.'
    },
    {
      id: 'fi-mittel-1',
      difficulty: 'mittel',
      type: 'Dokumentation',
      question: 'Welche Angabe macht eine Temperaturdokumentation am aussagekraeftigsten?',
      options: [
        'Bewohner ist warm.',
        'Temperatur 38,7 °C, 14:10 Uhr, tympanal gemessen, Haut warm, trinkt wenig, Fachkraft informiert.',
        'Fieber vorhanden.',
        'Thermometer benutzt.'
      ],
      correctIndex: 1,
      explanation: 'Messwert, Einheit, Uhrzeit, Messort/Methode, Beobachtung und Massnahme machen die Dokumentation nachvollziehbar.'
    }
  ],

  vitalwerte: [
    {
      id: 'vw-schwer-1',
      difficulty: 'schwer',
      type: 'Fachbegriff/Beobachtung',
      question: 'Bei einer Bewohnerin messen Sie Puls 118/min in Ruhe. Sie wirkt unruhig und hat Fieber. Welche Aussage ist fachlich am besten?',
      options: [
        'Der Puls ist langsam, das nennt man Bradykardie.',
        'Der Puls ist erhoeht, das passt zu Tachykardie. Wert, Rhythmus, Qualitaet und Zustand beobachten und nach Standard/Fachkraft handeln.',
        'Der Pulswert hat keine Bedeutung, wenn Fieber besteht.',
        'Nur die Temperatur dokumentieren, der Puls muss nicht notiert werden.'
      ],
      correctIndex: 1,
      explanation: 'Pruefungsrelevant ist nicht nur der Wert: Pulsfrequenz, Rhythmus, Qualitaet, Beschwerden und Zusammenhang mit Fieber werden beobachtet und dokumentiert.'
    },
    {
      id: 'vw-pruefung-1',
      difficulty: 'pruefung',
      type: 'Pflegeentscheidung',
      question: 'Ein Bewohner hat RR 90/60 mmHg, ihm ist schwindelig beim Aufstehen. Welche Reaktion ist fachlich am besten?',
      options: [
        'Weiter mobilisieren, damit der Kreislauf trainiert wird.',
        'Hinsetzen oder hinlegen lassen, Sturzgefahr beachten, Vitalwerte kontrollieren, Beobachtung dokumentieren und Fachkraft informieren.',
        'Nur Wasser anbieten und sonst nichts tun.',
        'Den Blutdruckwert aufrunden, damit er normal aussieht.'
      ],
      correctIndex: 1,
      explanation: 'Bei niedrigem Blutdruck mit Schwindel steht Sicherheit im Vordergrund: Sturzprophylaxe, erneute Kontrolle, Beobachtung, Dokumentation und Information nach Standard.'
    },
    {
      id: 'vw-mittel-1',
      difficulty: 'mittel',
      type: 'Blutdruck',
      question: 'Was bedeutet bei einem Blutdruck von 120/80 mmHg der Wert 120?',
      options: [
        'Diastolischer Wert in der Erschlaffungsphase.',
        'Systolischer Wert beim Zusammenziehen des Herzens.',
        'Pulsfrequenz pro Minute.',
        'Koerpertemperatur.'
      ],
      correctIndex: 1,
      explanation: 'Der obere Wert ist der systolische Wert. Der untere Wert ist der diastolische Wert.'
    },
    {
      id: 'vw-pruefung-2',
      difficulty: 'pruefung',
      type: 'Dokumentation',
      question: 'Welche Vitalwert-Dokumentation ist am fachlichsten?',
      options: [
        'Blutdruck okay, Puls schnell.',
        '10:30 Uhr RR 160/95 mmHg li. Arm sitzend, Puls 104/min unregelmaessig, Temp. 38,3 °C tympanal. Bewohner klagt ueber Unruhe. Fachkraft informiert, weitere Kontrolle nach Standard.',
        'Werte gemessen.',
        'Bewohner war komisch.'
      ],
      correctIndex: 1,
      explanation: 'Gute Dokumentation enthaelt Uhrzeit, Werte, Einheit, Messmethode/Messort, Beobachtung, Beschwerden, Massnahme und Information.'
    },
    {
      id: 'vw-schwer-2',
      difficulty: 'schwer',
      type: 'Messfehler vermeiden',
      question: 'Bei der Pulsmessung wirkt der Rhythmus unregelmaessig. Was ist fachlich sinnvoll?',
      options: [
        'Den Wert schaetzen und nicht weiter beachten.',
        'Sorgfaeltig erneut messen, Rhythmus/Qualitaet beobachten, Beschwerden erfragen, dokumentieren und bei Auffaelligkeit Fachkraft informieren.',
        'Nur 5 Sekunden messen und mit 2 multiplizieren.',
        'Unregelmaessiger Puls ist immer normal.'
      ],
      correctIndex: 1,
      explanation: 'Bei unregelmaessigem Puls sind genaue Messung, Beobachtung, Beschwerden, Dokumentation und Information wichtig.'
    }
  ],

  mundpflege: [
    {
      id: 'mp-schwer-1',
      difficulty: 'schwer',
      type: 'Beobachtung',
      question: 'Bei der Zahnprothesenpflege sehen Sie eine geroetete Druckstelle am Zahnfleisch. Was ist fachlich richtig?',
      options: [
        'Prothese sofort wieder einsetzen und nichts sagen.',
        'Druckstelle beobachten, Person nach Schmerzen fragen, Prothese nach Standard handhaben, dokumentieren und Fachkraft informieren.',
        'Die Druckstelle kraeftig massieren, damit sie schneller verschwindet.',
        'Nur die Prothese reinigen, der Mundraum ist nicht wichtig.'
      ],
      correctIndex: 1,
      explanation: 'Druckstellen koennen Schmerzen und Entzuendungen verursachen. Wichtig sind Beobachtung, Ressourcen/Wunsch, Dokumentation und Information.'
    },
    {
      id: 'mp-pruefung-1',
      difficulty: 'pruefung',
      type: 'Pflegeentscheidung',
      question: 'Eine Bewohnerin lehnt die Mundpflege morgens ab. Wie handeln Sie professionell?',
      options: [
        'Mundpflege gegen den Willen durchfuehren, weil sie wichtig ist.',
        'Ablehnung respektieren, Grund erfragen, spaeter erneut anbieten, ggf. anleiten/unterstuetzen und Ablehnung sachlich dokumentieren.',
        'Mundpflege dauerhaft weglassen und nie wieder anbieten.',
        'Die Ablehnung als unkooperativ bewerten und so dokumentieren.'
      ],
      correctIndex: 1,
      explanation: 'Pruefungsrelevant sind Selbstbestimmung, Kommunikation, Ressourcenfoerderung, erneutes Angebot und sachliche Dokumentation.'
    },
    {
      id: 'mp-mittel-1',
      difficulty: 'mittel',
      type: 'Prothesenpflege',
      question: 'Warum wird das Waschbecken bei der Prothesenpflege gesichert, zum Beispiel mit Wasser oder einem Tuch?',
      options: [
        'Damit die Prothese beim Herunterfallen nicht so leicht zerbricht.',
        'Damit die Prothese schneller trocknet.',
        'Damit keine Mundbeobachtung notwendig ist.',
        'Damit keine Haendehygiene noetig ist.'
      ],
      correctIndex: 0,
      explanation: 'Prothesen koennen beim Herunterfallen brechen. Deshalb wird das Waschbecken gesichert und vorsichtig gearbeitet.'
    }
  ],

  intimpflege: [
    {
      id: 'ip-pruefung-1',
      difficulty: 'pruefung',
      type: 'Hygiene/Fallfrage',
      question: 'Sie unterstuetzen eine Bewohnerin bei der Intimpflege. Welche Vorgehensweise ist fachlich korrekt?',
      options: [
        'Von hinten nach vorne reinigen, damit es schneller geht.',
        'Intimsphaere schuetzen, Zustimmung einholen, von vorne nach hinten reinigen, Handschuhe/Haendehygiene beachten und Haut beobachten.',
        'So viele Personen wie moeglich im Zimmer lassen.',
        'Auffaellige Hautstellen nicht dokumentieren.'
      ],
      correctIndex: 1,
      explanation: 'Wichtig sind Wuerde, Intimsphaere, Zustimmung, hygienische Arbeitsweise, richtige Reinigungsrichtung und Beobachtung.'
    },
    {
      id: 'ip-schwer-1',
      difficulty: 'schwer',
      type: 'Maennliche Intimpflege',
      question: 'Bei einem Bewohner wurde die Vorhaut zur Reinigung vorsichtig zurueckgezogen. Was ist danach wichtig?',
      options: [
        'Die Vorhaut zurueckgezogen lassen.',
        'Die Vorhaut nach der Reinigung wieder vorschieben und auf Schmerzen, Roetung oder Schwellung achten.',
        'Die Eichel trocken und ohne Beobachtung lassen.',
        'Keine Dokumentation bei Auffaelligkeiten.'
      ],
      correctIndex: 1,
      explanation: 'Nach dem Reinigen muss die Vorhaut wieder vorgeschoben werden. Beobachtungen wie Schmerzen, Roetung oder Schwellung werden gemeldet/dokumentiert.'
    },
    {
      id: 'ip-pruefung-2',
      difficulty: 'pruefung',
      type: 'Beobachtung',
      question: 'Bei der Intimpflege bemerken Sie starke Roetung, unangenehmen Geruch und die Person aeussert Schmerzen. Was tun Sie?',
      options: [
        'Ignorieren, weil Intimpflege immer unangenehm ist.',
        'Beobachtung ernst nehmen, schonend reinigen, keine reizenden Produkte verwenden, dokumentieren und Fachkraft informieren.',
        'Mehrfach stark reiben, damit der Geruch verschwindet.',
        'Die Person nicht mehr waschen.'
      ],
      correctIndex: 1,
      explanation: 'Auffaelligkeiten im Intimbereich muessen beobachtet, fachlich weitergegeben und sachlich dokumentiert werden.'
    }
  ],

  lotionen: [
    {
      id: 'lo-schwer-1',
      difficulty: 'schwer',
      type: 'Hautpflegeentscheidung',
      question: 'Eine Person hat trockene, sproede Haut an den Unterschenkeln. Welche Pflege passt eher?',
      options: [
        'Eine rueckfettende W/O-Pflege nach Standard, duenn auftragen und Hautreaktion beobachten.',
        'Gar keine Pflege, weil trockene Haut immer normal ist.',
        'Sehr viel Creme in Hautfalten auftragen.',
        'Eine alkoholhaltige Loesung grossflaechig auftragen.'
      ],
      correctIndex: 0,
      explanation: 'Bei trockener, sproeder Haut ist haeufig eine rueckfettende Pflege sinnvoll. Auswahl immer nach Hautzustand, Standard und Vertraeglichkeit begruenden.'
    },
    {
      id: 'lo-pruefung-1',
      difficulty: 'pruefung',
      type: 'Inkontinenz/Hautschutz',
      question: 'Bei einer inkontinenten Person ist die Haut im Gesaessbereich feuchtigkeitsbelastet, aber intakt. Was ist fachlich am sinnvollsten?',
      options: [
        'Haut schonend reinigen, gut trocknen, geeigneten Hautschutz/Barrierecreme duenn nach Standard anwenden und Haut weiter beobachten.',
        'Die Haut nass lassen, damit sie nicht austrocknet.',
        'Sehr dick Creme auftragen, ohne die Haut vorher zu reinigen.',
        'Nur parfuemierte Koerperlotion verwenden, egal wie die Haut aussieht.'
      ],
      correctIndex: 0,
      explanation: 'Bei Feuchtigkeitsbelastung geht es um Hautschutz, Reinigung, Trocknung, duennes Auftragen nach Standard und Beobachtung.'
    },
    {
      id: 'lo-mittel-1',
      difficulty: 'mittel',
      type: 'Hautfalten',
      question: 'Warum sollten Hautfalten nicht dick eingecremt und feucht belassen werden?',
      options: [
        'Weil ein feuchtes Milieu Hautreizungen beguenstigen kann.',
        'Weil Hautfalten nie gepflegt werden duerfen.',
        'Weil Creme immer verboten ist.',
        'Weil Beobachtung dann nicht mehr noetig ist.'
      ],
      correctIndex: 0,
      explanation: 'In Hautfalten ist ein trockenes, reizarmes Milieu wichtig. Zu viel Creme und Feuchtigkeit koennen Hautprobleme beguenstigen.'
    }
  ],

  rasur: [
    {
      id: 'ra-pruefung-1',
      difficulty: 'pruefung',
      type: 'Sicherheitsentscheidung',
      question: 'Ein Bewohner nimmt Blutverduenner, hat empfindliche Haut und wuenscht eine Rasur. Welche Entscheidung ist fachlich am sichersten?',
      options: [
        'Nassrasur mit scharfer Klinge ohne Ruecksprache, weil sie gruendlicher ist.',
        'Eher Trockenrasur erwaegen, Hautzustand und Wunsch beachten, Blutungsrisiko beruecksichtigen und nach Standard/Fachkraft handeln.',
        'Gar nicht rasieren und den Wunsch ignorieren.',
        'Sehr stark gegen die Wuchsrichtung rasieren.'
      ],
      correctIndex: 1,
      explanation: 'Bei erhoehtem Blutungsrisiko ist Sicherheit wichtig. Trockenrasur kann schonender sein; Wunsch, Hautzustand und Standard werden einbezogen.'
    },
    {
      id: 'ra-schwer-1',
      difficulty: 'schwer',
      type: 'Biografie',
      question: 'Ein Bewohner moechte wie frueher nass rasiert werden. Haut ist intakt, kein bekanntes Blutungsrisiko. Was ist fachlich passend?',
      options: [
        'Wunsch und Biografie beruecksichtigen, Nassrasur sicher vorbereiten, Haut beobachten und nach Standard durchfuehren.',
        'Biografie spielt in der Pflege keine Rolle.',
        'Immer Trockenrasur, auch wenn die Person Nassrasur gewohnt ist.',
        'Ohne Einwilligung rasieren, damit es schneller geht.'
      ],
      correctIndex: 0,
      explanation: 'Ressourcen, Gewohnheiten und Wuensche gehoeren zur personenzentrierten Pflege. Sicherheit und Hautbeobachtung bleiben wichtig.'
    },
    {
      id: 'ra-pruefung-2',
      difficulty: 'pruefung',
      type: 'Komplikation',
      question: 'Bei der Rasur entsteht eine kleine Schnittverletzung. Was tun Sie fachlich korrekt?',
      options: [
        'Ignorieren und weiter rasieren.',
        'Rasur unterbrechen, Blutung versorgen nach Standard, Haut weiter beobachten, Bewohner informieren/beruhigen und Vorfall dokumentieren bzw. Fachkraft informieren.',
        'Die Stelle stark reiben, damit sie schneller heilt.',
        'Die Verletzung verschweigen.'
      ],
      correctIndex: 1,
      explanation: 'Bei Verletzungen sind sichere Versorgung, Beobachtung, Information und Dokumentation wichtig.'
    }
  ],

  pflegebericht: [
    {
      id: 'pb-pruefung-1',
      difficulty: 'pruefung',
      type: 'Dokumentation',
      question: 'Welche Formulierung ist fuer einen Pflegebericht am professionellsten?',
      options: [
        'Bewohner war heute schwierig und nervig.',
        '09:20 Uhr Bewohner lehnt Mundpflege ab, sagt: „Ich moechte spaeter.“ Spaeteres Angebot um 10:30 Uhr geplant. Fachkraft informiert. Kuerzel.',
        'Bewohner hatte keine Lust.',
        'Mundpflege nicht gemacht, egal.'
      ],
      correctIndex: 1,
      explanation: 'Professionelle Dokumentation ist sachlich, beobachtbar, wertfrei, zeitnah und enthaelt Massnahme/weiteres Vorgehen.'
    },
    {
      id: 'pb-schwer-1',
      difficulty: 'schwer',
      type: 'Messwerte',
      question: 'Was ist bei der Dokumentation eines auffaelligen Vitalwerts am wichtigsten?',
      options: [
        'Nur schreiben: Wert war schlecht.',
        'Wert mit Einheit, Uhrzeit, Messort/Methode, Beobachtung, Beschwerden, Massnahme und Information dokumentieren.',
        'Nur den Namen des Messgeraets notieren.',
        'Den Wert weglassen, wenn er auffaellig ist.'
      ],
      correctIndex: 1,
      explanation: 'Auffaellige Werte muessen nachvollziehbar dokumentiert werden. Dazu gehoeren Messdaten, Beobachtung, Massnahmen und Weitergabe.'
    },
    {
      id: 'pb-pruefung-2',
      difficulty: 'pruefung',
      type: 'Pflegebericht Wadenwickel',
      question: 'Welche Angabe darf bei der Dokumentation eines Wadenwickels am ehesten nicht fehlen?',
      options: [
        'Nur die Aussage, dass alles gut war.',
        'Temperaturwert, Uhrzeit, Beobachtung vor der Massnahme, Durchfuehrung, Reaktion, Kontrolle und weiteres Vorgehen.',
        'Die Meinung der Pflegekraft ueber die Person.',
        'Eine ungenaue Angabe wie morgens.'
      ],
      correctIndex: 1,
      explanation: 'Bei Massnahmen wie Wadenwickel muss nachvollziehbar sein, warum, wie und mit welcher Wirkung sie durchgefuehrt wurden.'
    },
    {
      id: 'pb-mittel-1',
      difficulty: 'mittel',
      type: 'Wertfrei formulieren',
      question: 'Welche Formulierung ist wertfrei und beobachtbar?',
      options: [
        'Bewohner stellt sich an.',
        'Bewohner aeussert beim Aufstehen Schwindel und setzt sich wieder auf die Bettkante.',
        'Bewohner ist faul.',
        'Bewohner nervt beim Waschen.'
      ],
      correctIndex: 1,
      explanation: 'Wertfrei bedeutet: Beobachtbares Verhalten, Aussagen und Messwerte dokumentieren, keine abwertenden Bewertungen.'
    }
  ]
};

for (const topic of learningContent.topics) {
  if (!Array.isArray(topic.quiz)) continue;

  topic.quiz = topic.quiz.map((question) => ({
    ...question,
    difficulty: question.difficulty ?? quizQuestionMeta[question.id]?.difficulty ?? 'leicht',
    type: question.type ?? quizQuestionMeta[question.id]?.type ?? 'Grundlagenfrage'
  }));

  const existingIds = new Set(topic.quiz.map((question) => question.id));
  const extraQuestions = pruefungsFragen[topic.id] ?? [];

  for (const question of extraQuestions) {
    if (!existingIds.has(question.id)) {
      topic.quiz.push(question);
      existingIds.add(question.id);
    }
  }
}
