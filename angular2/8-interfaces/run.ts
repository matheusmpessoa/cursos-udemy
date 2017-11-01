import { DaoInterface } from './dao.interface';
import { AnimalDao } from './animal-dao';
import { Animal } from './../7-classes/animal';

// Instância da classe dao - tipo animalDao
let dao: AnimalDao = new AnimalDao();
// Instância do objeto animal
let animal: Animal = new Animal('Cachorrao');

// instância do objeto animal
dao.insert(animal);