import { Pipe } from '@angular/core';
/*
 * General Filter Pipe
 * Takes two argument, the info to use and parameters to filter
 * Usage:
 *   ObjectArray | generalFilter:"hi":['id','name','surname']
 * Example:
 *   {{ [{},{},{}] |  generalFilter:info:filterArray}}
 * result:
 *  [{},{}]
*/
var GeneralFilterPipe = (function () {
    function GeneralFilterPipe() {
    }
    GeneralFilterPipe.prototype.transform = function (dataArray, info, params) {
        if (!info)
            return dataArray;
        return dataArray.filter(function (element) {
            var keys = Object.keys(element);
            var toShow = false;
            keys.forEach(function (elem) {
                var str = element[elem];
                if (str.toString().toLowerCase().includes(info.toLowerCase()))
                    toShow = true;
            });
            return toShow;
        });
    };
    GeneralFilterPipe.decorators = [
        { type: Pipe, args: [{ name: 'generalFilter' },] },
    ];
    /** @nocollapse */
    GeneralFilterPipe.ctorParameters = function () { return []; };
    return GeneralFilterPipe;
}());
export { GeneralFilterPipe };
//# sourceMappingURL=general-filter.pipe.js.map