const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.numberOfDinos = function() {
    return this.dinosaurs.length;
};

Park.prototype.addDino = function (dinosaur){
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDino = function(dinosaur) {
    const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
};

Park.prototype.dinoMostVistors = function() {
    let mostAttractiveDino = this.dinosaurs[0];

    for (const dino of this.dinosaurs) {
      if (dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay) {
        mostAttractiveDino = dino;
      }
    }
  
    return mostAttractiveDino;
};

Park.prototype.findAllDinoBySpecies = function(species) {
    let foundDinoSpecies = [];
    for (const dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            foundDinoSpecies.push(dinosaur)
        };
    };
    return foundDinoSpecies.length;
};

Park.prototype.totalNumberOfVisitors = function(){
    let total = 0;
    for (const dinosaur of this.dinosaurs) {
        total += dinosaur.guestsAttractedPerDay;
    };
    return total;
};

Park.prototype.totalNumberOfVisitorsPerYear = function(){
    let dailyTotal = this.totalNumberOfVisitors();
    return dailyTotal * 365
}

Park.prototype.totalRevenuePerYear = function(){
    return this.totalNumberOfVisitorsPerYear() * this.ticketPrice;
};


module.exports = Park;