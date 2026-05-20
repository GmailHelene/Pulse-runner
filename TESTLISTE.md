# Testliste før innsending til spillportal

Gå gjennom dette systematisk med Abel — gjerne over flere økter. Mål: ingen åpenbare bugs, hver funksjon faktisk gjør det den skal, og spillet føles godt.

Test på **mobil** (telefon, både liggende og snudd til portrett), og gjerne også på **PC**. Bruk live-versjonen: <https://gmailhelene.github.io/Pulse-runner/>.

---

## 1. Oppstart og generelt

- [ ] Spillet åpner på mobil i nettleser uten feil
- [ ] «Snu telefonen»-skjermen vises i portrett, forsvinner i landskap
- [ ] Lyd starter etter første trykk på SPILL (mobiler krever et brukertrykk)
- [ ] Mynter, valgt figur, farge og hale huskes etter omstart av nettleseren
- [ ] «Legg til på startskjermen» gir ekte appikon, åpnes i fullskjerm

## 2. Verdenene — én ekte spilløkt i hver

Sjekk i hver verden at det starter, ser tydelig annerledes ut og at den spesielle mekanikken funker.

- [ ] 🌃 **Neonby** — baseline, ingen spesiell mekanikk
- [ ] 🌴 **Jungel** — merkbart flere plattformer
- [ ] 🚀 **Verdensrom** — lav gravitasjon, store svevende hopp
- [ ] 🐠 **Under vann** — du synker tregere enn vanlig
- [ ] 🌋 **Vulkan** — det faller stein du må hoppe over
- [ ] 👻 **Spøkelsesskog** — det er mørkt, bare en sirkel rundt deg er opplyst

## 3. Vanskelighetsgrader

- [ ] **Lett** — banen er klart enklere å fullføre
- [ ] **Normal** — som forventet
- [ ] **Vanskelig** — merkbart raskere/tettere hindringer
- [ ] Alle tre er **mulige å fullføre** i alle verdener

## 4. Spillmekanikker

- [ ] Hopp (mellomrom / pil opp / klikk / trykk)
- [ ] Kjede-hopp (hold inne)
- [ ] **Sprettbrett** kaster deg høyt når du løper over
- [ ] **Hoppekuler** — trykk når du er borti den gir et hopp i lufta
- [ ] **Felle-kuler** — av og til får du et veldig svakt sprett (forventet, ikke en bug)
- [ ] **Skjold** (grønn ring) — du kan ikke krasje en liten stund
- [ ] **Mynter** — plukkes opp, teller på HUD, lagres i banken
- [ ] **Plattformer** — kan løpes på toppen; sidekant = død
- [ ] **Portaler** — sømløs overgang inn til fly-modus og ut igjen
- [ ] **Fly-modus** — figuren blir et fly, hold = stig, slipp = fall

## 5. Garderoben

- [ ] Alle 10 figurer vises (4 gratis + 6 betalte)
- [ ] Gratis figurer (Blokkhund/-sau/-høne/-banan) er allerede ulåst
- [ ] Mynter trekkes ved kjøp av betalt figur
- [ ] Valgt figur vises i spillet med sine kjennetegn (ører/hale/antenne osv.)
- [ ] Farger og haler kan velges hver for seg og kombineres
- [ ] Mønster-skins (Striper, Rutete, Galakse) animerer
- [ ] Regnbue skifter farge mens du spiller
- [ ] Alt huskes etter omstart

## 6. Bane-deling

- [ ] Endre bane-kode → banen endres
- [ ] Samme kode + verden + grad gir nøyaktig samme bane (test på to enheter)

## 7. Øvingsmodus

- [ ] Sjekkpunkter aktiveres når du passerer trygge steder
- [ ] Etter krasj respawner du ved siste sjekkpunkt, ikke fra start

## 8. Level editor

- [ ] Åpner via «🛠️ Lag bane»
- [ ] Paletten har 9 verktøy, viskelæret inkludert
- [ ] Klikk plasserer valgt ting der du klikker
- [ ] Viskelæret fjerner nærmeste ting
- [ ] Rull frem/tilbake virker (knapper og piltaster)
- [ ] **Test** spiller din bane
- [ ] Krasj eller fullført under test → rett tilbake til editoren
- [ ] **Eksporter** fyller tekstfeltet med en bane-kode
- [ ] **Importer** + lim inn + Last inn → banen lastes og kan spilles

## 9. Spøkelses-multiplayer

- [ ] Fullfør en bane — løpet ditt lagres (skjer i bakgrunnen)
- [ ] Spill samme bane på nytt — du ser ditt eget spøkelse
- [ ] HUD viser «👥 X spøkelser» når noen er der
- [ ] Spøkelsene hopper synkront, ikke skjelvende eller frosne

## 10. Mobil-spesifikt

- [ ] Skjermen skalerer pent uten kantete pixler eller klipping
- [ ] Touch som hopp svarer umiddelbart, uten merkbar forsinkelse
- [ ] Ingen bug-meldinger eller hvit skjerm i privat modus
- [ ] Spillet kjører jevnt — ingen merkbare hakk under spill

## 11. Lyd

- [ ] Hver verden har en annerledes musikk-stil
- [ ] Hopp / mynt / krasj / portal har lyd
- [ ] Volum er behagelig, ikke skurrende eller for høyt

## 12. Tastaturkontroll (PC)

- [ ] Mellomrom, pil opp og W = hopp
- [ ] R = prøv igjen etter krasj
- [ ] Esc = tilbake til meny / ut av editor

---

## Når dere har gått gjennom

Skriv ned alt som er **rart, kjipt eller buggy** — selv små ting. Gi meg lista, så fikser jeg dem én for én. Først *etter* det er det smart å lese CrazyGames / Poki sine innsendingskrav og sende inn.

**Tommelfingerregel:** en portal-kurator gir spillet 2–3 minutter. Alt som er åpenbart galt i de første minuttene = avslag. Lista over er der for å luke ut nettopp slike ting.
