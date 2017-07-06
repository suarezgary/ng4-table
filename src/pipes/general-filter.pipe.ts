import { Pipe, PipeTransform } from '@angular/core';
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
@Pipe({name: 'generalFilter'})
export class GeneralFilterPipe implements PipeTransform {
  transform(dataArray: any[], info: string, params: string[] ): any[] { 
        if(!info)
            return dataArray;
        
        return dataArray.filter((element) =>{
            let keys = Object.keys(element);
            let toShow = false;
            keys.forEach( elem => {
                let str: String = element[elem];
                if(str.toString().toLowerCase().includes(info.toLowerCase()))
                    toShow = true;
            });
            return toShow;
        });
  }
}