import _ from 'lodash'
import './style.css'

function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')
  var br = document.createElement('br')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  btn.innerHTML = 'Click here and check the console'
  btn.onclick = () => {
    System.import('./print.js').then(module => {
      module.default()
    })
  }

  element.appendChild(br)
  element.appendChild(btn)

  return element
}

document.body.appendChild(component())