import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { Ng4Table } from './ng4-table.component';
import { PaginationFilterPipe } from './pipes/pagination-filter.pipe';
import { GeneralFilterPipe } from './pipes/general-filter.pipe';


@NgModule({
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
})
export class Ng4TableModule { }