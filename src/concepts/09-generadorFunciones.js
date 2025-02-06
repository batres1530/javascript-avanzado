export const  genradorFuncionesComponent = (element) => {

    // const mygenerador = myFristGeneratorFunction();

    const genId = idGenerator();
    const button = document.createElement('button');
    button.innerHTML = 'Click me';
    element.appendChild(button);

    const renderbutton = () => {
        const  {value} = genId.next();
        button.innerHTML = `Click me ${value}`;

    };

    button.addEventListener('click', renderbutton );

};

function* idGenerator() {
    let currentId = 0;
    while (true) {
        yield ++ currentId;
    }
}








function* myFristGeneratorFunction() {

    yield 'Mi primer valor';
    yield 'Mi segundo valor';
    yield 'Mi tercer valor';
    yield 'Mi cuarto valor';

    return 'Ya no hay mas valores';
    yield 'ya no se puede hacer nada aqui';


}


