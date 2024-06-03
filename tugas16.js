class Tyre {
  constructor(brand, size) {
    this.brand = brand;
    this.size = size;
  }
}

class Car {
  constructor(yearProduction, warranty, brand, size) {
    this.yearProduction = yearProduction;
    this.warranty = warranty;
    this.tyre = new Tyre(brand, size);
  }
}

class Rush extends Car {
  constructor(
    sn,
    varian,
    cc,
    seat,
    door,
    yearProduction,
    warranty,
    brand,
    size
  ) {
    super(yearProduction, warranty, brand, size);
    this.varian = varian;
    this.sn = sn;
    this.cc = cc;
    this.door = door;
    this.seat = seat;
  }
}

class Agya extends Car {
  constructor(
    sn,
    varian,
    cc,
    seat,
    door,
    yearProduction,
    warranty,
    brand,
    size
  ) {
    super(yearProduction, warranty, brand, size);
    this.varian = varian;
    this.sn = sn;
    this.cc = cc;
    this.door = door;
    this.seat = seat;
  }
}

class Factory {
  constructor() {
    this.cars = [];
  }

  procude(yearProduction) {
    let total = Math.floor(Math.random()*5);
    for (var i = 0; i < total; i++) {
      var rush = new Rush(
        `2023-R00${i}`,
        "Rush",
        "1500cc",
        "5 Seats",
        5,
        yearProduction,
        5,
        "Bridgdestone",
        16
      );
      this.cars.push(rush);
      
    }
    for (var i = 1; i < total; i++) {
      var agya = new Agya(
        `2023-A00${i}`,
        "Agya",
        "1000cc",
        "5 Seats",
        1,
        yearProduction,
        5,
        "Dunlop",
        14
      );
      this.cars.push(agya);
    }

    return this.cars;
  }

  result() {
    console.log("Hasil produksi\n");
    for (var i = 0; i < this.cars.length; i++) {
      console.log(`No.${i + 1}`);
      console.log(`Varian        : ${this.cars[i].varian}`);
      console.log(`SN            : ${this.cars[i].sn}`);
      console.log(`Door          : ${this.cars[i].door}`);
      console.log(`Seat          : ${this.cars[i].seat}`);
      console.log(
        `Tyre          : ${this.cars[i].tyre.brand} ${this.cars[i].tyre.size} inchi`
      );
      console.log(`Year          : ${this.cars[i].yearProduction}`);
      console.log(`Warranty      : ${this.cars[i].warranty}\n`);
    }
  }

  guaranteeSimulation(simulationYear) {
    console.log(`Hasil simulasi semua mobil pada tahun ${simulationYear}\n`);
    for (var i = 0; i < this.cars.length; i++) {
    
      console.log(`No.${i + 1}`);
      console.log(`Varian        : ${this.cars[i].varian}`);
      console.log(`SN            : ${this.cars[i].sn}`);
      console.log(`Door          : ${this.cars[i].door}`);
      console.log(`Seat          : ${this.cars[i].seat}`);
      console.log(
        `Tyre          : ${this.cars[i].tyre.brand} ${this.cars[i].tyre.size} inchi`
      );
      console.log(`Year          : ${this.cars[i].yearProduction}`);
      console.log(`Warranty      : ${this.cars[i].warranty}\n`);
      Number(this.cars[i].yearProduction) + Number(this.cars[i].warranty) <= Number(simulationYear)
      ? console.log(`Status on ${simulationYear} guarantee is expired `)
      : console.log(`Status on ${simulationYear} guarantee is active `);
      console.log(' ');
    }
  }
}

const Toyota = new Factory();
Toyota.procude(2024);
Toyota.procude(2020);
Toyota.result();
Toyota.guaranteeSimulation(2025);
