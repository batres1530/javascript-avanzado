import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { environmentsComponet } from './concepts/01-environments.js'
import { CollbacksComponent } from './concepts/02-callbacks.js'
import { promesasComponent } from './concepts/data/03-promesas.js'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
    
  </div>
`
;




const element = document.querySelector('.card');
// enviamos las variables a la funcion
promesasComponent(element);

