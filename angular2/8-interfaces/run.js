"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_dao_1 = require("./animal-dao");
var animal_1 = require("./../7-classes/animal");
// Instância da classe dao - tipo animalDao
var dao = new animal_dao_1.AnimalDao();
// Instância do objeto animal
var animal = new animal_1.Animal('Cachorrao');
// instância do objeto animal
dao.insert(animal);
//# sourceMappingURL=run.js.map