const Park = function(name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.numberOfDinos = function() {
    return this.dinosaurs.length;
}

Park.prototype.addDino = function (dinosaur){
    this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDino = function() {
    this.dinosaurs.pop();
}






module.exports = Park;