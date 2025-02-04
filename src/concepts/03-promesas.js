import { heroes } from './data/heroes'; // importamos el archivo heroes.js
 
export const promesasComponent = (element) => { // creamos la funcion promesasComponent
    
    const renderHero = (hero) => {  // creamos la funcion renderHero esta funcion se ejecutara cuando la promesa se resuelva
        element.innerHTML = hero.name;
    };

    const renderTwoHeros = (heroes1, heroes2) => { // creamos la funcion renderTwoHeros esta funcion se ejecutara cuando la promesa se resuelva
        element.innerHTML = `
        <h3>${heroes1.name}</h3>
        <h3>${heroes2.name}</h3>`;
    };

    const renderError = (error)=> { // creamos la funcion renderError esta funcion se ejecutara cuando la promesa no se resuelva
        element.innerHTML = `
        <h1>Error: </h1>
        <h3>${error}</h3>`;

    };

    const id1 = '5d86371f2343e37870b91ef1'; // ID de del superhero que sale de el archivo heroes.js
    const id2 = '5d86371fd55e2e2a30fe1cc4'; // ID de del superhero que sale de el archivo heroes.js
    
    let hero1;



    //! esto es un promesa all
    Promise.all(
        [findHero(id1),
         findHero(id2)
    ])
    .then ( ([hero1, hero2] ) => renderTwoHeros(hero1, hero2))
    .catch(renderError); 
       





    //! Esto es un promesa hell 
    // findHero(id1)
    //     .then((hero1) =>{
    //         findHero(id2)
    //             .then(hero2 => {
    //                 renderTwoHeros(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     })
    //     .catch(renderError);

   
       
};

const findHero = (id) => { // creamos la funcion findHero y de parametro le pedimos id del heroe
    return new Promise((resolve, reject) => { // creamos una promesa y le pasamos dos parametros que siempre van resolve y reject 
        const hero = heroes.find(hero => hero.id === id); // creamos la logic para buscar el heroe en el array de heroes

        if (hero) { // si el heroe se encuentra se ejecutara esto del resolve
            resolve(hero);
        } else { // si el heroe no se encuentra ejecutara esto del reject
            reject(`Heroe con el id ${id} no se encuentra`);
        }
    });
};