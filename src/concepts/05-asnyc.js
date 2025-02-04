import {heroes} from './data/heroes.js';


export const  asyncComponet = (element) => {
    const id1 = '5d86371fd55e2e2a30fe1ccb22';


    findHero(id1)
        .then( name  => element.innerHTML = name) 
        .catch(error => element.innerHTML = error);
};

const findHero = async (id) => {

    const hero = heroes.find(hero => hero.id === id);
        return hero.name;
};