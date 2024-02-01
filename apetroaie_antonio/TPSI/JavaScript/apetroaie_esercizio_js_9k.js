class Automobile {
  constructor() {
    this.personeABordo = 0;
    this.velocita = 0;
    this.rapportoVelocita = 1;
    this.acceso = false;
  }

  impostaNumeroPersone(numeroPersone) {
    if (this.velocita === 0) {
      this.personeABordo = Math.min(Math.max(numeroPersone, 0), 5);
      this.visualizzaStato();
    } else {
      console.log("Impossibile cambiare il numero di persone a bordo quando l'auto è in movimento.");
    }
  }

  impostaVelocita(nuovaVelocita) {
    if (this.acceso) {
      const velocitaMassima = 180;
      const variazioneMassima = 30;

      nuovaVelocita = Math.max(0, Math.min(nuovaVelocita, velocitaMassima));

      if (Math.abs(this.velocita - nuovaVelocita) <= variazioneMassima) {
        this.velocita = nuovaVelocita;
      } else {
        console.log("La variazione di velocità è troppo elevata.");
      }

      this.visualizzaStato();
    } else {
      console.log("L'auto è spenta. Accendila prima di impostare la velocità.");
    }
  }

  aumentaRapportoVelocita() {
    if (this.acceso) {
      this.rapportoVelocita = Math.min(this.rapportoVelocita + 1, 6);
      this.visualizzaStato();
    } else {
      console.log("L'auto è spenta. Accendila prima di cambiare il rapporto di velocità.");
    }
  }

  diminuisciRapportoVelocita() {
    if (this.acceso) {
      this.rapportoVelocita = Math.max(this.rapportoVelocita - 1, 1);
      this.visualizzaStato();
    } else {
      console.log("L'auto è spenta. Accendila prima di cambiare il rapporto di velocità.");
    }
  }

  pulsanteOnOff() {
    this.acceso = !this.acceso;
    this.visualizzaStato();
  }

  visualizzaStato() {
    console.log(`
      Stato dell'automobile:
      Persone a bordo: ${this.personeABordo}
      Velocità: ${this.velocita} km/h
      Rapporto di velocità: ${this.rapportoVelocita}
      Auto ${this.acceso ? "accesa" : "spenta"}
    `);
  }
}

// Main
const auto = new Automobile();

auto.impostaNumeroPersone(3);
auto.pulsanteOnOff();
auto.impostaVelocita(120);
auto.aumentaRapportoVelocita();
auto.pulsanteOnOff();
auto.diminuisciRapportoVelocita();
auto.visualizzaStato();
