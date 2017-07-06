import { Pipe } from '@angular/core';
/*
 * Filter Data array between 2 numbers
 * Takes two argument that defaults to 1 and array.lengh.
 * Usage:
 *   Array | paginationFilter:init:fin
 * Example:
 *   {{ [{},{},{}] |  paginationFilter:0:1}}
 * result:
 *  [{},{}]
*/
var PaginationFilterPipe = (function () {
    function PaginationFilterPipe() {
    }
    PaginationFilterPipe.prototype.transform = function (dataArray, ini, fin) {
        return dataArray.slice(ini, fin);
    };
    PaginationFilterPipe.decorators = [
        { type: Pipe, args: [{ name: 'paginationFilter' },] },
    ];
    /** @nocollapse */
    PaginationFilterPipe.ctorParameters = function () { return []; };
    return PaginationFilterPipe;
}());
export { PaginationFilterPipe };
//# sourceMappingURL=pagination-filter.pipe.js.map