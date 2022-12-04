const koalaImg = require("/Users/Vlad/second-app/src/assets/koala.jpg");
const lionImg = require("/Users/Vlad/second-app/src/assets/lion.jpg");
const lemurImg = require("/Users/Vlad/second-app/src/assets/lemur.jpg");
const asianLemurImg = require("/Users/Vlad/second-app/src/assets/asian_lemur.jpg");

class Animal {
    constructor(
        animalTitle,
        description,
        price,
        imgSrc
    ) {
        this.animalTitle = animalTitle;
        this.description = description;
        this.price = price;
        this.imgSrc = imgSrc;
    }

}
export const data = [
    new Animal(
        "Koala",
        "The koala or, inaccurately, koala bear (Phascolarctos cinereus) is an arboreal herbivorous marsupial native to Australia. It is the only extant representative of the family Phascolarctidae.",
        10,
        koalaImg
    ),
    new Animal(
        "Lion",
        "The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. ",
        8000,
        lionImg
    ),
    new Animal(
        "Lemur",
        "They are endemic to the island of Madagascar. Most existing lemurs are small, have a pointed snout, large eyes, and a long tail. They chiefly live in trees and are active at night.",
        900,
        lemurImg
    ),
    new Animal(
        "Asian Lemur",
        "Their closest evolutionary relatives are primates. There are just two living species of colugos: the Sunda flying lemur (Galeopterus variegatus) and the Philippine flying lemurs.",
        1000000,
        asianLemurImg
    ),
];