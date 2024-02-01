let Automobile = function (marca, modello, anno, km,colore){
(this.marca=marca),
(this.modello=modello),
(this.anno=anno),
(this.km=km),
(this.colore=colore),

(this.descrizione=function(){console.log(`questa è ${this.marca} ${this.modello} ${this.anno} ${this.km} ${this.colore}` );

});
};

    let AUTO1= new Automobile("BMW","350","2008","2000000", "nero");
    let AUTO2= new Automobile("AUDI", "RS6", "2016", "30000"," bianco");

    AUTO1.descrizione();
    AUTO2.descrizione();



