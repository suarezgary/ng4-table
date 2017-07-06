import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';


@Component({
    selector: 'ng-table',
    templateUrl: './ng4-table.component.html'
})
export class Ng4Table implements OnInit, OnChanges {
    @Input() data: any[] = [{ id: 1, name: "Gary", lastname: "Suarez"},
                                { id: 2, name: "Luis", lastname: "Suarez"},
                                { id: 3, name: "Favio", lastname: "Massarini"},
                                { id: 4, name: "Emma", lastname: "Alvea"},
                                { id: 5, name: "Gary", lastname: "Suarez"},
                                { id: 6, name: "Luis", lastname: "Suarez"},
                                { id: 7, name: "Emma", lastname: "Alvea"},
                                { id: 8, name: "Favio", lastname: "Massarini"},
                                { id: 9, name: "Gary", lastname: "Suarez"},
                                { id: 10, name: "Emma", lastname: "Alvea"},
                                { id: 11, name: "Luis", lastname: "Suarez"},
                                { id: 12, name: "Favio", lastname: "Massarini"}
                            ];
    //@Input() data: Object[] = [];
    @Input() options: any;
    showOptions: Object = {};
    //Table Fill variables
    tableHeaders: string[];
    //Pagination Properties
    paginationPrevious : boolean = false;
    paginationNext : boolean = true;
    rowNumber: string = "10";
    IsPagination : Boolean = false;
    PaginationArray : any = [];
    CurrentPage : number = 1;
    //Pagination Filter
    firstElement : number = 0;
    lastElement : number;
    //Sorting Properties
    sortedElement : string = "name";
    sortedWay: number = 1;
    //General Filter Properties
    filterInput: string;

    constructor() {
        this.getHeaders();
        this.verifyIfPagination();
        this.generatePaginationArray();
        this.updatePreviousNext();
        this.updateLastElement();
    }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        // changes.prop contains the old and the new value...
        this.getHeaders();
        this.verifyIfPagination();
        this.generatePaginationArray();
        this.resetPage();
    }

    changeRowNumber(){
        this.verifyIfPagination();
        this.generatePaginationArray();
        this.resetPage();
    }

    //Methods for Pagination
    verifyIfPagination(){
        this.IsPagination = this.data.length / parseInt(this.rowNumber) > 1; 
    }

    generatePaginationArray(){
        let PagesNumber = Math.floor(this.data.length / parseInt(this.rowNumber));
        if(this.data.length % parseInt(this.rowNumber)){
            PagesNumber = PagesNumber + 1;
        }
        this.PaginationArray = Array(PagesNumber).fill(0).map((x,i)=>i + 1);
    }

    changePage( pageNumber : number ){
        this.CurrentPage = pageNumber;
        this.updatePreviousNext();
        this.updateFirstElement();
        this.updateLastElement();
        
    }

    resetPage(){
        this.CurrentPage = 1;
        this.updatePreviousNext();
        this.updateFirstElement();
        this.updateLastElement();
    }

    //Pagination active buttons
    updatePreviousNext(){
        if(this.CurrentPage == 1)
            this.paginationPrevious = false;
        else
            this.paginationPrevious = true;
        
        if(this.CurrentPage == this.PaginationArray[this.PaginationArray.length - 1])
            this.paginationNext = false;
        else
            this.paginationNext = true;
    }

    //Update the array filter
    updateFirstElement(){
        this.firstElement = (this.CurrentPage - 1) * parseInt(this.rowNumber);
    }

    updateLastElement() {
        let dataLenght = this.data.length;
        let initial: number = (this.CurrentPage - 1) * parseInt(this.rowNumber);

        if(this.paginationNext)
            this.lastElement = initial + parseInt(this.rowNumber);
        else
            this.lastElement = initial + dataLenght % parseInt(this.rowNumber) + 1;
    }
    
    // Fill the Table
    getHeaders(){
        //The component can obtain table headers by the options input attribute (options.headers) or by the Data Array
        if(this.options && this.options.headers){
            this.tableHeaders = this.options.headers;
        } else {
            this.tableHeaders = Object.keys(this.data[0]);
        }
    }

    // Sort Table
    sortTable( element: string ){
        var way: number;
        if(this.sortedElement == element)
            this.sortedWay = this.sortedWay * -1;
        else
            this.sortedWay = 1;
        way = this.sortedWay;            
        if(!this.sortedElement || this.sortedElement != element )
            this.sortedElement = element;

        this.data.sort(function(a: any, b: any){
            if(a[element] < b[element]) return (-1 * way);
            if(a[element] > b[element]) return (1 * way);
            return 0;
        });

        this.data = this.data.slice();
    }
}
