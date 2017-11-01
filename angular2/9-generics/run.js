"use strict";
exports.__esModule = true;
var dao_1 = require("./dao");
var animal_1 = require("./../7-classes/animal");
var dao = new dao_1.Dao();
var animal = new animal_1.Animal('Cachorro sanguinario');
var cavalo = new animal_1.Animal('Cavalo matador');
dao.insert(cavalo);
