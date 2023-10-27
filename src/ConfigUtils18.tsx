import * as Es6Promise from 'es6-promise'
import { createRoot } from "react-dom/client"; // without this, 'yarn build' will complain about Promise.
//import { render } from 'react-dom';

export function syncRender18(comp: any, el: any): any {
  return new Es6Promise.Promise(function(resolve, reject) {
    //render(comp, el, () => {
    //  resolve(el)
    //})
    const root = createRoot(el);
    root.render(comp)
    resolve(el);
  });
}
