import { heroes } from "./heroes";

export const promesasComponent = (element) => {
    
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    };

    const id1 = '5d86371f9f80b591f499df32'; // ID de Hulk
    findHero(id1)
    .then(superHero => renderHero(superHero))
    .catch(error => {
        console.error(error);
        element.innerHTML = error;
    });

};

const findHero = (id) => {
    return new Promise((resolve, reject) => { 

        const hero = heroes.find(hero => hero.id === id);
         
        if (hero) {
            resolve(hero);
        } else {
            reject(`Heroe con el id ${id} no se encuentra`);
        }
    });
};