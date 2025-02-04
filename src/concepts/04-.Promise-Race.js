/**
 * 
 * @param {HTMLMediaElement} element 
 */
export const PromesiRaceComponent = (element) => {
    const renderValue = (value) => {
        element.innerHTML = value;
    };

    const slowPromise = () => new Promise(resolve => {
        setTimeout(() => {
            resolve('slow Promise');
        }, 2000);
    });

    const mediumPromise = () => new Promise(resolve => {
        setTimeout(() => {
            resolve('medium Promise');
        }, 1500);
    });

    const fastPromise = () => new Promise(resolve => {
        setTimeout(() => {
            resolve('fast Promise');
        }, 1000);
    });

    //! este es una promesa race, ojo que primero tenemos que crear las promesa y abaja consumirlas 
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]).then(renderValue);
};