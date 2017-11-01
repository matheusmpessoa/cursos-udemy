import { Dao } from './dao';
import { Animal } from './../7-classes/animal';
import { Cavalo } from './../7-classes/cavalo';

let dao: Dao<Animal> = new Dao<Animal>();

let animal: Animal = new Animal('Cachorro sanguinario');
let cavalo: Cavalo = new Animal('Cavalo matador');

dao.insert(cavalo);