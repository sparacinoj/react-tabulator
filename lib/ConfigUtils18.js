"use strict";
exports.__esModule = true;
exports.syncRender18 = void 0;
var Es6Promise = require("es6-promise");
var client_1 = require("react-dom/client"); // without this, 'yarn build' will complain about Promise.
//import { render } from 'react-dom';
function syncRender18(comp, el) {
    return new Es6Promise.Promise(function (resolve, reject) {
        //render(comp, el, () => {
        //  resolve(el)
        //})
        var root = (0, client_1.createRoot)(el);
        root.render(comp);
        resolve(el);
    });
}
exports.syncRender18 = syncRender18;
