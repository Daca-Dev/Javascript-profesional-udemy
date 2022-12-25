import './style.css'
import './styles/main.css'
// CSS as module
import * as myStyles from './styles/my-styles.module.css'

// import data
// import data from './data.json' // import all the data in the JSON file
import { user } from './data.json'

import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

import suma from './suma';
console.log(`2 + 3 = ${suma(2, 3)}`);

// Import modules global
const modules = import.meta.glob('./modules/module*.js')
console.log(`🚀 ~ modules`, modules);


const styles = myStyles.default;

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="title">Hello Platzi!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      ${user.name} ${user.lastname}
    </p>
    <p class="read-the-docs ${styles['txt-red']}">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
