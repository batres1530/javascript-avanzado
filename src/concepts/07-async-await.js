
export const  asyncAwait2Componets = async (element) => {
   
    console.time('Inicio del componete');
    // const value1 =  await slowPromise();
    // const value2 =  await mediumPromise();
    // const value3 =  await fastPromise();

    const [value1, value2, value3] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]) 


    element.innerHTML = `
     <b> Value1: ${value1} </b> <br/>
    Value2: ${value2} <br/>
    Value3: ${value3} <br/>
`;
console.timeEnd('Inicio del componete');
    
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