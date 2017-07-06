import { Pipe, PipeTransform } from '@angular/core';
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
@Pipe({name: 'paginationFilter'})
export class PaginationFilterPipe implements PipeTransform {
  transform(dataArray: any[], ini: number, fin: number ): any[] {
    return dataArray.slice(ini, fin);
  }
}