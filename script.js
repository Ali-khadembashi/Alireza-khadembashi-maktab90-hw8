'use strict'


function elemCreator(elem, func) {
    const newElem = document.createElement(elem);
    func(newElem);
    document.body.append(newElem);


}


const callback = function (elem) {
    elem.style.backgroundColor = 'red'
}
elemCreator('div', callback
)