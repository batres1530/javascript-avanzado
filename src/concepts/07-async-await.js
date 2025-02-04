export const  asyncAwait2Componets = (element) => {
    console.log('Esta funcionando correctamente :)');

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