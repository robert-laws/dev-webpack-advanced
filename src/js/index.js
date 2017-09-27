import _ from 'lodash'

import 'materialize-css/dist/js/materialize.min.js'

import 'materialize-css/dist/css/materialize.min.css'
import '../css/style.css'
import '../scss/main.scss'

// import hello from './hello'

if(process.env.NODE_ENV !== 'production') {
  console.log("development mode!")
} else {
  console.log("production mode!")
}

function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')
  var br = document.createElement('br')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  btn.innerHTML = 'Click here and check the console'
  btn.onclick = () => {
    System.import(/* webpackChunkName = "print" */ './print.js').then(module => {
      module.default()
    })

    System.import('./hello.js').then(module => {
      module.default();
    })
  }

  element.appendChild(br)
  element.appendChild(btn)

  return element
}

document.body.appendChild(component())
// hello()

$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});