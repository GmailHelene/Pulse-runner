# Pulse Runner

Et musikk-drevet rhythm runner-spill for nettleseren — i samme sjanger som Geometry Dash.

Spillet komponerer **selv** både musikk og bane ut fra en «bane-kode». Hver kode gir en ny, men reproduserbar bane — så to spillere med samme kode, stil og vanskelighetsgrad får nøyaktig samme opplevelse.

## Spille

Åpne `index.html` i en nettleser. Mellomrom / pil opp / klikk / trykk på skjermen = hopp. Hold inne for kjede-hopp og for å fly.

## Funksjoner

- **6 verdener** med hver sin stil og spesielle mekanikk (lav gravitasjon, fallende stein, mørke m.m.)
- **Fly-seksjoner** der figuren blir et fly
- **Hoppekuler og sprettbrett** — noen er feller, noen gir skjold
- **Mynter + garderobe** — lås opp figurer, farger og hale-effekter
- **Øvingsmodus** med sjekkpunkter
- **Bane-deling** ved å sende en kode

## Kjøre lokalt

Enkleste vei: åpne `index.html` direkte.

For testing på telefon (telefon og PC på samme wifi):

```
python serve.py
```

Åpne deretter `http://<PC-ens-IP>:8001` på telefonen.

## Teknisk

Ren HTML/CSS/JavaScript i én fil. Canvas 2D for grafikk, Web Audio API for lyd-syntese og beat-deteksjon. Ingen avhengigheter og ingen byggesteg — fila kjører som den er.

## Status

Under aktiv utvikling.

© Helene Grønberg. Med enerett.
