import { heroes } from './data/heroes';

export const forAwaitComponent = async( element ) => {
console.log('Inicio');

    const id = '5d86371f1efebc31def272e2';

    // if  ( await getHeroAsync(id) ) {

    // element.innerHTML = `el heroe con id ${id} existe`;
    // return;
    // }
   
    //     element.innerHTML = `el heroe con id ${id} no existe`;
    
    const heroid = heroes.map ( hero => hero.id );
    console.log(heroid);

    const heroPromises = getHeroesAsync( heroid );

    for await (const hero of heroPromises) {
        element.innerHTML += `<br/> ${hero.name}`;
    }
}

const getHeroesAsync = ( heroIds ) => {
    
    const heroPromises = [];

    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync(id)  );
    });

    return heroPromises;
}

const getHeroAsync = async(id) => {

    await new Promise(( resolve ) => {
        setTimeout(() => resolve(), 1000)
    });

    return heroes.find( hero => hero.id === id );
}
