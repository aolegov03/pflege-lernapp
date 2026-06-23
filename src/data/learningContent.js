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
