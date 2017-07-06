import { Component, Input } from '@angular/core';
var Ng4Table = (function () {
    function Ng4Table() {
        this.data = [{ id: 1, name: "Gary", lastname: "Suarez" },
            { id: 2, name: "Luis", lastname: "Suarez" },
            { id: 3, name: "Favio", lastname: "Massarini" },
            { id: 4, name: "Emma", lastname: "Alvea" },
            { id: 5, name: "Gary", lastname: "Suarez" },
            { id: 6, name: "Luis", lastname: "Suarez" },
            { id: 7, name: "Emma", lastname: "Alvea" },
            { id: 8, name: "Favio", lastname: "Massarini" },
            { id: 9, name: "Gary", lastname: "Suarez" },
            { id: 10, name: "Emma", lastname: "Alvea" },
            { id: 11, name: "Luis", lastname: "Suarez" },
            { id: 12, name: "Favio", lastname: "Massarini" }
        ];
        this.showOptions = {};
        //Pagination Properties
        this.paginationPrevious = false;
        this.paginationNext = true;
        this.rowNumber = "10";
        this.IsPagination = false;
        this.PaginationArray = [];
        this.CurrentPage = 1;
        //Pagination Filter
        this.firstElement = 0;
        //Sorting Properties
        this.sortedElement = "name";
        this.sortedWay = 1;
        this.getHeaders();
        this.verifyIfPagination();
        this.generatePaginationArray();
        this.updatePreviousNext();
        this.updateLastElement();
    }
    Ng4Table.prototype.ngOnInit = function () { };
    Ng4Table.prototype.ngOnChanges = function (changes) {
        // changes.prop contains the old and the new value...
        this.getHeaders();
        this.verifyIfPagination();
        this.generatePaginationArray();
        this.resetPage();
    };
    Ng4Table.prototype.changeRowNumber = function () {
        this.verifyIfPagination();
        this.generatePaginationArray();
        this.resetPage();
    };
    //Methods for Pagination
    Ng4Table.prototype.verifyIfPagination = function () {
        this.IsPagination = this.data.length / parseInt(this.rowNumber) > 1;
    };
    Ng4Table.prototype.generatePaginationArray = function () {
        var PagesNumber = Math.floor(this.data.length / parseInt(this.rowNumber));
        if (this.data.length % parseInt(this.rowNumber)) {
            PagesNumber = PagesNumber + 1;
        }
        this.PaginationArray = Array(PagesNumber).fill(0).map(function (x, i) { return i + 1; });
    };
    Ng4Table.prototype.changePage = function (pageNumber) {
        this.CurrentPage = pageNumber;
        this.updatePreviousNext();
        this.updateFirstElement();
        this.updateLastElement();
    };
    Ng4Table.prototype.resetPage = function () {
        this.CurrentPage = 1;
        this.updatePreviousNext();
        this.updateFirstElement();
        this.updateLastElement();
    };
    //Pagination active buttons
    Ng4Table.prototype.updatePreviousNext = function () {
        if (this.CurrentPage == 1)
            this.paginationPrevious = false;
        else
            this.paginationPrevious = true;
        if (this.CurrentPage == this.PaginationArray[this.PaginationArray.length - 1])
            this.paginationNext = false;
        else
            this.paginationNext = true;
    };
    //Update the array filter
    Ng4Table.prototype.updateFirstElement = function () {
        this.firstElement = (this.CurrentPage - 1) * parseInt(this.rowNumber);
    };
    Ng4Table.prototype.updateLastElement = function () {
        var dataLenght = this.data.length;
        var initial = (this.CurrentPage - 1) * parseInt(this.rowNumber);
        if (this.paginationNext)
            this.lastElement = initial + parseInt(this.rowNumber);
        else
            this.lastElement = initial + dataLenght % parseInt(this.rowNumber) + 1;
    };
    // Fill the Table
    Ng4Table.prototype.getHeaders = function () {
        //The component can obtain table headers by the options input attribute (options.headers) or by the Data Array
        if (this.options && this.options.headers) {
            this.tableHeaders = this.options.headers;
        }
        else {
            this.tableHeaders = Object.keys(this.data[0]);
        }
    };
    // Sort Table
    Ng4Table.prototype.sortTable = function (element) {
        var way;
        if (this.sortedElement == element)
            this.sortedWay = this.sortedWay * -1;
        else
            this.sortedWay = 1;
        way = this.sortedWay;
        if (!this.sortedElement || this.sortedElement != element)
            this.sortedElement = element;
        this.data.sort(function (a, b) {
            if (a[element] < b[element])
                return (-1 * way);
            if (a[element] > b[element])
                return (1 * way);
            return 0;
        });
        this.data = this.data.slice();
    };
    Ng4Table.decorators = [
        { type: Component, args: [{
                    selector: 'ng-table',
                    templateUrl: './ng4-table.component.html'
                },] },
    ];
    /** @nocollapse */
    Ng4Table.ctorParameters = function () { return []; };
    Ng4Table.propDecorators = {
        'data': [{ type: Input },],
        'options': [{ type: Input },],
    };
    return Ng4Table;
}());
export { Ng4Table };
//# sourceMappingURL=ng4-table.component.js.map