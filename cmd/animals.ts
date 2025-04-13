import {AnimalInterface} from "../src/Repository/AnimalInterface";
import {Dawg} from "../src/Repository/Dawg";
import {KittyKat} from "../src/Repository/KittyKat";

function makeNoise(animal: AnimalInterface) {
    console.log(animal.makeSound());
}

const dawg = new Dawg();
makeNoise(dawg);
const kittyKat = new KittyKat();
makeNoise(kittyKat);