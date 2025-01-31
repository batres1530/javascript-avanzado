import { heroes } from './data/heroes.js';

// import { heroes } from './data/heroes.js';

/**
 * 
 * @param {HTMLMediaElement} element 
 */
export const  CollbacksComponent = (element) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const id2 = '5d86371f2343e37870b91ef1';
    
    // el hero? es para desirle que si el hero no se encuentra que muestrel el undefined y no el error en consola
    // el || sirve como un else si no se encuentra el heroe que mueste le mensaje 'no hay heroe'
   
    findHero(id1, (error, hero1) => {
        if (error) {
            element.innerHTML = error;
            return;
        }
        findHero(id2, (error, hero2) =>{
            if (error) {
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${hero1.name} / ${hero2.name}`;
        })
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




