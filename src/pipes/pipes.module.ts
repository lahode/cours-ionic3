import { NgModule } from '@angular/core';

import { GroupByPipe } from './group-by';
import { SortAscPipe } from './sort-asc';

@NgModule({
  declarations: [
    GroupByPipe,
    SortAscPipe
  ],
  exports: [
    GroupByPipe,
    SortAscPipe
  ]
})
export class PipesModule {}
