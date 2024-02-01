const Automobile = {
    marca: "",
    modello: "",
    anno: 0,
    colore: "",
    chilometraggio: 0,

    visualizzaInformazioni: function() {
        console.log(`Automobile: ${this.marca} ${this.modello}, Anno: ${this.anno}, Colore: ${this.colore}, Chilometraggio: ${this.chilometraggio} km`);
    },

    aggiornaChilometraggio: function(nuovoChilometraggio) {
        if (nuovoChilometraggio >= this.chilometraggio) {
            this.chilometraggio = nuovoChilometraggio;
            console.log("Chilometraggio aggiornato con successo.");
        } else {
            console.log("Il nuovo chilometraggio non può essere inferiore al chilometraggio attuale.");
        }
    },

    calcolaEta: function() {
        const annoCorrente = new Date().getFullYear();
        const eta = annoCorrente - this.anno;
        console.log(`L'automobile ha ${eta} anni.`);
    }
};

const auto1 = Object.create(Automobile);
auto1.marca = "Toyota";
auto1.modello = "Corolla";
auto1.anno = 2018;
auto1.colore = "Blu";
auto1.chilometraggio = 30000;

const auto2 = Object.create(Automobile);
auto2.marca = "Honda";
auto2.modello = "Civic";
auto2.anno = 2020;
auto2.colore = "Rosso";
auto2.chilometraggio = 25000;

const auto3 = Object.create(Automobile);
auto3.marca = "Ford";
auto3.modello = "Focus";
auto3.anno = 2019;
auto3.colore = "Nero";
auto3.chilometraggio = 40000;

const auto4 = Object.create(Automobile);
auto4.marca = "Chevrolet";
auto4.modello = "Malibu";
auto4.anno = 2021;
auto4.colore = "Argento";
auto4.chilometraggio = 15000;

const auto5 = Object.create(Automobile);
auto5.marca = "Volkswagen";
auto5.modello = "Golf";
auto5.anno = 2017;
auto5.colore = "Bianco";
auto5.chilometraggio = 35000;

auto1.visualizzaInformazioni();
auto1.aggiornaChilometraggio(32000);
auto1.calcolaEta();

auto2.visualizzaInformazioni();
auto2.aggiornaChilometraggio(27000);
auto2.calcolaEta();

auto3.visualizzaInformazioni();
auto3.aggiornaChilometraggio(42000);
auto3.calcolaEta();

auto4.visualizzaInformazioni();
auto4.aggiornaChilometraggio(18000);
auto4.calcolaEta();

auto5.visualizzaInformazioni();
auto5.aggiornaChilometraggio(38000);
auto5.calcolaEta();
