"use strict";
exports.__esModule = true;
var Dao = /** @class */ (function () {
    function Dao() {
        this.tableName = '';
    }
    Dao.prototype.insert = function (object) {
        console.log('Inserting....');
        return true;
    };
    Dao.prototype.update = function (object) {
        return true;
    };
    Dao.prototype["delete"] = function (id) {
        return null;
    };
    Dao.prototype.find = function (id) {
        return null;
    };
    Dao.prototype.findAll = function () {
        return [null];
    };
    return Dao;
}());
exports.Dao = Dao;
