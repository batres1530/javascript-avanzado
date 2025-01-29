import { heroes } from './data/heroes.js';

import { heroes } from './data/heroes.js';

/**
 * 
 * @param {HTMLMediaElement} element 
 */
export const  CollbacksComponent = (element) => {

    const id = '5d86371fd55e2e2a30fe1ccb1';
  
    findHero(id, (error, hero) => {
        // el hero? es para desirle que si el hero no se encuentra que muestrel el undefined y no el error en consola
        // el || sirve como un else si no se encuentra el heroe que mueste le mensaje 'no hay heroe'
        if (error) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = hero.name;
    });
};
/**
 * 
 * @param {string} id
 * @param {(herro: object) => void} callback
 */
const findHero = (id, callback) => {
    
    const hero = heroes.find (hero => hero.id === id);

    if (!hero) {
        callback(`Heroe con el id ${id} no se encuentra`);
        return; // undefined
    }
    callback(null,hero); 
};




