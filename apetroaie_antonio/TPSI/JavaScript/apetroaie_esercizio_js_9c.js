const Animale = {
    tipo: "",
    nome: "",
    eta: 0,

    emettiVerso: function() {
        console.log(`${this.nome} emette un verso.`);
    },

    visualizzaDettagli: function() {
        console.log(`Tipo: ${this.tipo}, Nome: ${this.nome}, Età: ${this.eta} anni`);
    },

    enumera: function() {
        console.log("Attributi dell'oggetto Animale:", Object.keys(this));
    }
};

const Automobile = {
    marca: "",
    modello: "",
    colore: "",

    accendiMotore: function() {
        console.log(`${this.marca} ${this.modello}: Motore acceso.`);
    },

    visualizzaInfo: function() {
        console.log(`Marca: ${this.marca}, Modello: ${this.modello}, Colore: ${this.colore}`);
    },

    enumera: function() {
        console.log("Attributi dell'oggetto Automobile:", Object.keys(this));
    }
};

const Poligono = {
    tipo: "",
    numeroLati: 0,
    lunghezzaLati: 0,

    calcolaPerimetro: function() {
        const perimetro = this.numeroLati * this.lunghezzaLati;
        console.log(`Il perimetro del ${this.tipo} è ${perimetro}.`);
    },

    visualizzaDettagli: function() {
        console.log(`Tipo: ${this.tipo}, Numero Lati: ${this.numeroLati}, Lunghezza Lati: ${this.lunghezzaLati}`);
    },

    enumera: function() {
        console.log("Attributi dell'oggetto Poligono:", Object.keys(this));
    }
};

const leone = Object.create(Animale);
leone.tipo = "Mammifero";
leone.nome = "Simba";
leone.eta = 5;

const elefante = Object.create(Animale);
elefante.tipo = "Mammifero";
elefante.nome = "Dumbo";
elefante.eta = 10;

const auto1 = Object.create(Automobile);
auto1.marca = "Toyota";
auto1.modello = "Corolla";
auto1.colore = "Blu";

const auto2 = Object.create(Automobile);
auto2.marca = "Honda";
auto2.modello = "Civic";
auto2.colore = "Rosso";

const quadrato = Object.create(Poligono);
quadrato.tipo = "Quadrato";
quadrato.numeroLati = 4;
quadrato.lunghezzaLati = 5;

const rettangolo = Object.create(Poligono);
rettangolo.tipo = "Rettangolo";
rettangolo.numeroLati = 4;
rettangolo.lunghezzaLati = 8;

leone.enumera();
elefante.enumera();

auto1.enumera();
auto2.enumera();

quadrato.enumera();
rettangolo.enumera();
