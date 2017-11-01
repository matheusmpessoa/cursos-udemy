"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./../7-classes/animal");
var AnimalDao = /** @class */ (function () {
    function AnimalDao() {
        this.tableName = '';
    }
    AnimalDao.prototype.insert = function (object) {
        console.log('Insert', object.mover(50));
        return true;
    };
    AnimalDao.prototype.update = function (object) {
        return true;
    };
    AnimalDao.prototype.delete = function (id) {
        return null;
    };
    AnimalDao.prototype.find = function (id) {
        return null;
    };
    AnimalDao.prototype.findAll = function () {
        return [new animal_1.Animal('Doggg')];
    };
    return AnimalDao;
}());
exports.AnimalDao = AnimalDao;
//# sourceMappingURL=animal-dao.js.map