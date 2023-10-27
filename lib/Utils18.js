"use strict";
exports.__esModule = true;
exports.reactFormatter18 = exports.reactVersion = void 0;
var React = require("react");
var client_1 = require("react-dom/client");
function reactVersion() {
    var version = React.version;
    var versionMaj = parseInt(React.version.split(".")[0], 10);
    return [version, versionMaj];
}
exports.reactVersion = reactVersion;
function reactFormatter18(JSX) {
    return function customFormatter(cell, formatterParams, onRendered) {
        // cell - the cell component
        // formatterParams - parameters set for the column
        // onRendered - function to call when the formatter has been rendered
        var cellRoot;
        var renderFn = function () {
            var cellEl = cell.getElement();
            if (cellEl) {
                var formatterCell = cellEl.querySelector('.formatterCell');
                if (formatterCell) {
                    var CompWithMoreProps = React.cloneElement(JSX, { cell: cell });
                    if (!cellRoot) {
                        var containerEl = cellEl.querySelector('.formatterCell');
                        cellRoot = (0, client_1.createRoot)(containerEl);
                    }
                    cellRoot.render(CompWithMoreProps);
                }
            }
        };
        onRendered(renderFn); // initial render only.
        setTimeout(function () {
            renderFn(); // render every time cell value changed.
        }, 0);
        return '<div class="formatterCell"></div>';
    };
}
exports.reactFormatter18 = reactFormatter18;
