const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Kieran Park', 2);
    dinosaur1 = new Dinosaur('T-rex', 'Carnivore', 50);
    dinosaur2 = new Dinosaur('Velociraptor', 'Carnivore', 20);
    dinosaur3 = new Dinosaur('T-triceratops', 'Herbivore', 10);

  });

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, "Kieran Park");

  });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 2);
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function (){
    park.addDino(dinosaur1);
    const actual = park.numberOfDinos();
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDino(dinosaur1);
    park.removeDino();
    const actual = park.numberOfDinos();
    assert.strictEqual(actual,0);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    const actual = park.dinoMostVistors();
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    const actual = park.findAllDinoBySpecies('Velociraptor');
    assert.strictEqual(actual, 1);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    const actual = park.totalNumberOfVisitors();
    assert.strictEqual(actual, 70)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    const actual = park.totalNumberOfVisitorsPerYear();
    assert.strictEqual(actual, 25550);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 51100);
  });

});
