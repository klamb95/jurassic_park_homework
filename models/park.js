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

Park.prototype.removeDino = function() {
    this.dinosaurs.pop();
};

Park.prototype.dinoMostVistors = function() {
  let mostVistors = [];
  for (currentDinosaur in this.dinosaurs) {
      currentDinosaur.guestsAttractedPerDay.push(mostVistors);
}};

Park.prototype.findAllDinoBySpecies = function(species) {
    let foundDinoSpecies = [];
    for (dinosaur of this.dinosaurs) {
        if (dinosaur.species === species) {
            foundDinoSpecies.push(dinosaur)
        };
    };
    return foundDinoSpecies.length;
};






module.exports = Park;