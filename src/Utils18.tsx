import * as React from 'react';
import { createRoot, Root } from "react-dom/client";

export function reactVersion() {
  const version = React.version;
  const versionMaj = parseInt(React.version.split(".")[0], 10);
  return [version, versionMaj]
}

export function reactFormatter18(JSX: any) {
  return function customFormatter(cell: any, formatterParams: any, onRendered: (callback: () => void) => void) {
    // cell - the cell component
    // formatterParams - parameters set for the column
    // onRendered - function to call when the formatter has been rendered

    let cellRoot: Root;
    const renderFn = () => {
      const cellEl = cell.getElement();
      if (cellEl) {
        const formatterCell = cellEl.querySelector('.formatterCell');
        if (formatterCell) {
          const CompWithMoreProps = React.cloneElement(JSX, { cell });
          if (!cellRoot) {
            const containerEl = cellEl.querySelector('.formatterCell');
            cellRoot = createRoot(containerEl!)
          }
          cellRoot.render(CompWithMoreProps)
        }
      }
    };

    onRendered(renderFn); // initial render only.

    setTimeout(() => {
      renderFn(); // render every time cell value changed.
    }, 0);
    return '<div class="formatterCell"></div>';
  };
}
