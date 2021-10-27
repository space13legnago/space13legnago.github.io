/*
Palestre:
  1:    Legnago - B.Fioroni
  2:    Castagnaro
  3:    Isola della Scala
  4:    Minerbe
  5:    Villabartolomea
  6:    Isola Rizza
  7:    San Pietro di Morubio
  8:    Legnago - B.Bellinato
  9:    Angiari
  10:   Bovolone
  11:   Cerea
  12:   Terrazzo
  13:   Roverchiara
  14:   Legnago - Space13, Edificio 13


Temi:
  1:    Innovazione
  2:    Open Data 
  3:    Agenda Digitale
  4:    Comunicazione

Attività:
  1:    Kick Off
  2:    Labvan
  3:    Focus Group
  4:    Coprogettazione
  5:    Evento Pubblico 
  6:    Comunicazione 


Per aggiungere un nuovo blocco:
- Caricare tutto il materiale su github cosi da avere i link corretti
- Copiare e incollare questo esempio:
   {
    "palestra": N_PAL,
    "attivita": N_ATTIVITA,
    "tema": N_TEMA,
    "linkImg": C_LINKIMG,
    "descrizioneImg": C_DESCRIZIONEIMG,
    "titolo": C_TITOLO,
    "descrizione": C_DESCRIZIONE,
    "descrizioneBreve": C_DESCRIZIONEBREVE,
    "linkRisorsa": C_LINKRISORSA,
    "CTA": C_SCRITTABTN
  }

  N_PAL = Verrà sostituito con il numero relativo alla palestra
  N_ATTIVITA = Verrà sostituito con il numero relativo all'attività
  N_TEMA = Verrà sostituito con il numero relativo al tema
  C_LINKIMG = E' il link dell'img interessata
  C_DESCRIZIONEIMG = Una breve descrizione dell'immagine
  C_TITOLO = E' il titolo del box
  C_DESCRIZIONE = E' la descrizione che sarà presente nella schermata a RIGHE e non a box
  C_DESCRIZIONEBREVE = E' la descrizione che sarà presente nella schermata a BOX e non a righe
  C_LINKRISORSA = E' il link a cui vogliamo portare l'utente
  C_SCRITTABTN = E' ciò che verrà scritto all'interno del bottone

  NB.0: Se ho piu di una palestra, attività o tema separare i numeri con la barra, in questo modo: "palestra": "1-2-3" vuol dire che è presente nelle palestre (1)Legnago - B.Fioroni , (2)Castagnaro e (3)Isola della Scala
  NB.1: BISOGNA mettere le virgolette e fare molta attenzione al resto della sintassi
  NB.2: Prima di aggiungere un nuovo blocco contenuto  assicurarsi che ci sia la virgola prima di aprire la parentesi graffa. I blocchi sono separati tra di loro con una virgola tranne l'ultimo blocco che non avrà la virgola bensì la chiusura della parentesi quadra. 
  NB.3: Esempio pratico: 
    Abbiamo un evento: t2i_B1_ III_LABVAN_2021_07_20 nella sede di Legnago - B.Fioroni, l'attività è Labvan, l'argomento è innovazione e la risosrsa si trova nel nostro github al link: https://github.com/space13legnago/Innovazione/blob/main/001%20III%20LABVAN%202021%2007%2020/001_t2i_B1_%20III_LABVAN_2021_07_20.pdf
    Costruiamo il blocco assieme:
    {
      "palestra": "1",
      "attivita": "2",
      "tema": "1",
      "linkImg": "./img/logo_colori.png",
      "descrizioneImg": "Logo di space13",
      "titolo": "t2i_B1_ III_LABVAN_2021_07_20",
      "descrizione": "Questa è una descrizione di ciò che è successo durante questo evento. Possiamo scrivere quello che vogliamo",
      "descrizioneBreve": "Questa invece sarà una descrizione più breve.",
      "linkRisorsa": "https://github.com/space13legnago/Innovazione/blob/main/001%20III%20LABVAN%202021%2007%2020/001_t2i_B1_%20III_LABVAN_2021_07_20.pdf",
      "CTA": "Vai a GitHub"
    }
  NB.4 Nei primi tre campi se il valore è 0 vuol dire che non ha categoria
  NB.5 E' obbligatorio compilare tutti i campi, se manca un campo allora inserire le virgolette vuote.
  NB.6 L'ordine dei blocchi qui presente sarà l'ordine di visualizzazione nella pagina

*/

var json = [{
  "palestra": "0",
  "attivita": "0",
  "tema": "0",
  "linkImg": "https://www.abcformazione.it/upload/CONF18/20200627/cosa-sono-le-infografiche.jpg",
  "descrizioneImg": " Lorem Ipsum ",
  "titolo": "Infografiche",
  "descrizione": "Qui si trovano i supporti grafici realizzati durante il progetto",
  "descrizioneBreve": "Qui si trovano i supporti grafici realizzati durante il progetto",
  "linkRisorsa": "https://github.com/space13legnago/Infografiche",
  "CTA": "Vai al repository"
},
{
  "palestra": "0",
  "attivita": "0",
  "tema": "0",
  "linkImg": "https://www.tuttotech.net/wp-content/uploads/2020/05/app-store-apps.png",
  "descrizioneImg": " Lorem Ipsum ",
  "titolo": "APP",
  "descrizione": "Qui si trovano le APP realizzate durante il progetto",
  "descrizioneBreve": "Qui si trovano le APP realizzate durante il progetto",
  "linkRisorsa": "https://github.com/space13legnago/APP",
  "CTA": "Vai al repository"
},
{
  "palestra": "1",
  "attivita": "2",
  "tema": "1",
  "linkImg": "./img/logo_colori.png",
  "descrizioneImg": "Logo Space13",
  "titolo": "III LABVAN 2021 07 20",
  "descrizione": "Qui trovi i materiali realizzati nel III LABVAN",
  "descrizioneBreve": "Qui trovi i materiali realizzati nel III LABVAN",
  "linkRisorsa": "https://github.com/space13legnago/Innovazione/blob/main/001%20III%20LABVAN%202021%2007%2020/001_t2i_B1_%20III_LABVAN_2021_07_20.pdf",
  "CTA": "Vai alla risorsa"
},
{
  "palestra": "8",
  "attivita": "1",
  "tema": "1",
  "linkImg": "./img/logo_colori.png",
  "descrizioneImg": "Logo Space13",
  "titolo": "t2i B1 I KICK OFF 2021 05 07",
  "descrizione": "Qui trovi i materiali realizzati nel I kickoff",
  "descrizioneBreve": "Qui trovi i materiali realizzati nel I kickoff",
  "linkRisorsa": "https://github.com/space13legnago/Innovazione/blob/main/002%20I%20KICKOFF%202021%2005%2007/002_t2i_B1_I_KICK%20OFF_2021_05_07.pdf",
  "CTA": "Vai alla risorsa"
},
{
  "palestra": "14",
  "attivita": "1",
  "tema": "1",
  "linkImg": "./img/logo_colori.png",
  "descrizioneImg": "Logo Space13",
  "titolo": "t2i B1 II KICKOFF 2021 05 26",
  "descrizione": "Qui trovi i materiali realizzati nel I kickoff",
  "descrizioneBreve": "Qui trovi i materiali realizzati nel I kickoff",
  "linkRisorsa": "https://github.com/space13legnago/Innovazione/blob/main/003%20II%20KICKOFF%202021%2005%2026/003_t2i_B1_II_KICKOFF_2021_05_26.pdf",
  "CTA": "Vai alla risorsa"
},
{//004
  "palestra": "8",
  "attivita": "4",
  "tema": "2",
  "linkImg": "./img/logo_colori.png",
  "descrizioneImg": "Logo Space13",
  "titolo": "Le norme sul riutilizzo dei dati pubblici (aprile 2021)",
  "descrizione": "Qui trovi un video suglio Open Data",
  "descrizioneBreve": "Qui trovi un video suglio Open Data",
  "linkRisorsa": "https://www.youtube.com/watch?v=PE2bdkIlstQ",
  "CTA": "Vai alla risorsa"
},
{//005
  "palestra": "8",
  "attivita": "4",
  "tema": "2",
  "linkImg": "./img/logo_colori.png",
  "descrizioneImg": "Logo Space13",
  "titolo": "Open data per la didattica",
  "descrizione": "Qui trovi un video suglio Open Data",
  "descrizioneBreve": "Qui trovi un video suglio Open Data",
  "linkRisorsa": "https://www.youtube.com/watch?v=Jabehnku8LU",
  "CTA": "Vai alla risorsa"
},
{//006
  "palestra": "8",
  "attivita": "4",
  "tema": "2",
  "linkImg": "./img/logo_colori.png",
  "descrizioneImg": "Logo Space13",
  "titolo": "Percorsi di coprogettazione - Dall’idea all’app",
  "descrizione": "Qui trovi un video sull'evento",
  "descrizioneBreve": "Qui trovi un video sull'evento",
  "linkRisorsa": "https://www.youtube.com/watch?v=g4LNr4Eqfas",
  "CTA": "Vai alla risorsa"
},
{//007
  "palestra": "8-14",
  "attivita": "4",
  "tema": "2",
  "linkImg": "./img/logo_colori.png",
  "descrizioneImg": "Logo Space13",
  "titolo": "Rovigo - Una città fra Open Innovation, dati aperti e sostenibilità @iLAB -Rovigo",
  "descrizione": "Qui trovi un video suglio Open Data",
  "descrizioneBreve": "Qui trovi un video suglio Open Data",
  "linkRisorsa": "https://www.youtube.com/watch?v=g4LNr4Eqfas",
  "CTA": "Vai alla risorsa"
},
{//008
  "palestra": "8-14",
  "attivita": "4",
  "tema": "2",
  "linkImg": "./img/logo_colori.png",
  "descrizioneImg": "Logo Space13",
  "titolo": "t2i chi siamo",
  "descrizione": "Qui trovi un video su t2i trasferimento tecnologico e innovazione",
  "descrizioneBreve": "Qui trovi un video su t2i trasferimento tecnologico e innovazione",
  "linkRisorsa": "https://www.youtube.com/watch?v=oZbQR1W27fM&t=81s",
  "CTA": "Vai alla risorsa"
},
{//009
  "palestra": "8-14",
  "attivita": "4",
  "tema": "2",
  "linkImg": "./img/logo_colori.png",
  "descrizioneImg": "Logo Space13",
  "titolo": "Webinar - I benefici dei dati aperti per il territorio il progetto GIOCOnDa",
  "descrizione": "Qui trovi un video suglio Open Data",
  "descrizioneBreve": "Qui trovi un video suglio Open Data",
  "linkRisorsa": "https://www.youtube.com/watch?v=ArZloMcSJxA&t=163s",
  "CTA": "Vai alla risorsa"
},
{//010
  "palestra": "14",
  "attivita": "4",
  "tema": "1",
  "linkImg": "./img/logo_colori.png",
  "descrizioneImg": "Logo Space13",
  "titolo": "Stiamo arrivando",
  "descrizione": "Qui trovi un video sul progetto Innovation Lab - Space13",
  "descrizioneBreve": "Qui trovi un video sul progetto Innovation Lab - Space13",
  "linkRisorsa": "https://www.youtube.com/watch?v=W66cx0DdixM",
  "CTA": "Vai alla risorsa"
},
{//011
  "palestra": "1",
  "attivita": "2",
  "tema": "2",
  "linkImg": "./img/logo_colori.png",
  "descrizioneImg": "Logo Space13",
  "titolo": "Progettare e realizzare un servizio digitale",
  "descrizione": "Qui trovi un video sull'evento",
  "descrizioneBreve": "Qui trovi un video sull'evento",
  "linkRisorsa": "https://www.youtube.com/watch?v=CEIQujMOc1U",
  "CTA": "Vai alla risorsa"
},
{//012
  "palestra": "14",
  "attivita": "5",
  "tema": "1",
  "linkImg": "./img/logo_colori.png",
  "descrizioneImg": "Logo Space13",
  "titolo": "Agenda Digitale: utilizzare gli strumenti digitali per migliorare la vita quotidiana",
  "descrizione": "Qui trovi un video sull'evento",
  "descrizioneBreve": "Qui trovi un video sull'evento",
  "linkRisorsa": "https://www.youtube.com/watch?v=LrH2mmC9VtU",
  "CTA": "Vai alla risorsa"
},
{//013
  "palestra": "14",
  "attivita": "6",
  "tema": "3",
  "linkImg": "./img/logo_colori.png",
  "descrizioneImg": "Logo Space13",
  "titolo": "A Legnago è nato Space13: per costruire insieme una comunità di innovatori",
  "descrizione": "Qui trovi un video sul progetto Innovation Lab - Space13",
  "descrizioneBreve": "Qui trovi un video sul progetto Innovation Lab - Space13",
  "linkRisorsa": "https://www.youtube.com/watch?v=hMDSNTd_CPE",
  "CTA": "Vai alla risorsa"
}
];