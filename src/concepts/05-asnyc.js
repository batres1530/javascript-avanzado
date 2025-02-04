import {heroes} from './data/heroes.js';


export const  asyncComponet = (element) => {
    const id1 = '5d86371fd55e2e2a30fe1ccb22';
    console.log('Inicio del componete');

    findHero(id1)
        .then( name => element.innerHTML = name)
        .catch(error => element.innerHTML = error);
    console.log('Finala del componete');
};

const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id);
    if (!hero) 
    throw `Heroe con el id ${id} no se encuentra`;

    return hero.name;
};

