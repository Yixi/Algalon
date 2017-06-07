import * as _ from 'lodash';

let fakeConfig = [
    {
        selector: '.soutu-btn',
        key: 's',
        event: 'click'
    }
];

const customEvent = (eventName: string, element: Element) => {
    let event: Event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, true, true);
    element.dispatchEvent(event);
};


document.addEventListener('keydown', event => {
    let char = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    let key = _.find(fakeConfig, {key: char});
    if (key) {
        customEvent(key.event, document.querySelector(key.selector));
    }

}, false);
