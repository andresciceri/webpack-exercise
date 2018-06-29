import _ from 'lodash';
import printMe from './print.js';
import './assets/css/style.css';
import Logo from './assets/images/logo.png';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var myLogo = new Image();
    myLogo.src = Logo;
    element.appendChild(myLogo);

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());