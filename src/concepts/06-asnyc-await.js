import {heroes} from './data/heroes.js';


export const  asyncAwaitComponet = async (element) => {
    const id1 ='5d86371f2343e37870b91ef1q';
    const id2 = '5d86371f25a058e5b1c8a65e';
    
    try {
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);
        element.innerHTML = `${ hero1 }  /  ${hero2}`;
    }
    catch (error) {
        element.innerHTML = error;
    }
};



const findHero  = async (id) => {

    const hero = heroes.find(hero => hero.id === id);
    if (!hero) 
    throw `Heroe no se encuentra`;
    return hero.name;
};