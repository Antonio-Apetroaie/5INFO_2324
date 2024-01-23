const Animale = {
  nome: "",
  tipo: "",
  età: 0,
  emettiSuono: function () {
    console.log("Suono dell'animale");
  },
  descrizione: function () {
    console.log(`Nome: ${this.nome}, Tipo: ${this.tipo}, Età: ${this.età}`);
  },
  enumera: function () {
    for (const attributo in this) {
      if (typeof this[attributo] !== "function") {
        console.log(attributo);
      }
    }
  },
};


const cane = Object.create(Animale);
cane.nome = "Fido";
cane.tipo = "Cane";
cane.età = 3;

const gatto = Object.create(Animale);
gatto.nome = "Whiskers";
gatto.tipo = "Gatto";
gatto.età = 2;


cane.enumera();
gatto.enumera();
