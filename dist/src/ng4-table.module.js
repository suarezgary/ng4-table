import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng4Table } from './ng4-table.component';
import { PaginationFilterPipe } from './pipes/pagination-filter.pipe';
import { GeneralFilterPipe } from './pipes/general-filter.pipe';
var Ng4TableModule = (function () {
    function Ng4TableModule() {
    }
    Ng4TableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule
                    ],
                    declarations: [
                        Ng4Table,
                        PaginationFilterPipe,
                        GeneralFilterPipe
                    ],
                    exports: [
                        Ng4Table
                    ]
                },] },
    ];
    /** @nocollapse */
    Ng4TableModule.ctorParameters = function () { return []; };
    return Ng4TableModule;
}());
export { Ng4TableModule };
//# sourceMappingURL=ng4-table.module.js.map