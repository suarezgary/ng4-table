import { Pipe, PipeTransform } from '@angular/core';
/*
 * Sort Table for Parameter and Way
 * Takes two argument, the parameter to sort and the way (1 (asc) or -1 (desc))
 * Usage:
 *   ObjectArray | sortingTable:init:fin
 * Example:
 *   {{ [{},{},{}] |  sortingTable:"lastname":1}}
 * result:
 *  [{},{}]
*/
@Pipe({name: 'sortingTable'})
export class SortingTablePipe implements PipeTransform {
  transform(dataArray: any[], param: string, way: string ): any[] {
        debugger;
        if(!param)
            return dataArray;
        if(!way)
            way = "1";
    
        dataArray.sort(function(a, b){
            if(a[param] < b[param]) return (-1 * parseInt(way));
            if(a[param] > b[param]) return (1 * parseInt(way));
            return 0;
        });

        return dataArray;
  }
}