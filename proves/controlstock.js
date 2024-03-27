class Producte {
    constructor(nom, preu, estoc) {
      this.nom = nom;
      this.preu = preu;
      this.estoc = estoc;
    }
  
    augmentarEstoc(quantitat) {
      this.estoc += quantitat;
    }
  
    vendre(unitats) {
      if (unitats <= this.estoc) {
        this.estoc -= unitats;
        console.log(`${unitats} unitats de ${this.nom} venudes.`);
      } else {
        console.log(`No hi ha prou estoc de ${this.nom}.`);
      }
    }
  }
  
  class Magatzem {
    constructor() {
      this.productes = new Map();
    }
  
    afegirProducte(producte, quantitat) {
      if (this.productes.has(producte.nom)) {
        const estocActual = this.productes.get(producte.nom);
        this.productes.set(producte.nom, estocActual + quantitat);
      } else {
        this.productes.set(producte.nom, quantitat);
      }
    }
  
    mostrarEstoc() {
      console.log('Estoc actual:');
      for (const [nom, estoc] of this.productes) {
        console.log(`${nom}: ${estoc} unitats`);
      }
    }
  
    vendreProducte(nomProducte, quantitat) {
      if (this.productes.has(nomProducte)) {
        const estocActual = this.productes.get(nomProducte);
        if (quantitat <= estocActual) {
          this.productes.set(nomProducte, estocActual - quantitat);
          console.log(`${quantitat} unitats de ${nomProducte} venudes.`);
        } else {
          console.log(`No hi ha prou estoc de ${nomProducte}.`);
        }
      } else {
        console.log(`El producte ${nomProducte} no existeix al magatzem.`);
      }
    }
  }
  
  const producte1 = new Producte('Ordinador portàtil', 1200, 10);
  const producte2 = new Producte('Telèfon intel·ligent', 800, 20);
  
  const magatzem = new Magatzem();
  magatzem.afegirProducte(producte1, 10);
  magatzem.afegirProducte(producte2, 20);
  
  magatzem.mostrarEstoc();
  
  magatzem.vendreProducte('Ordinador portàtil', 5);
  magatzem.vendreProducte('Telèfon intel·ligent', 15);
  magatzem.vendreProducte('Monitor', 5);
  
  magatzem.mostrarEstoc();  