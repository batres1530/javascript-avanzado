import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { environmentsComponet } from './concepts/01-environments.js'
import { CollbacksComponent } from './concepts/02-callbacks.js'
import { promesasComponent } from './concepts/03-promesas.js'
import { PromesiRaceComponent } from './concepts/04-.Promise-Race.js'
import {asyncComponet} from './concepts/05-asnyc.js'
import {asyncAwaitComponet} from './concepts/06-asnyc-await.js'
import { asyncAwait2Componets } from './concepts/07-async-await.js'
import {forAwaitComponent } from './concepts/08-for-await.js' 
import { genradorFuncionesComponent } from './concepts/09-generadorFunciones.js'


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
genradorFuncionesComponent(element);

