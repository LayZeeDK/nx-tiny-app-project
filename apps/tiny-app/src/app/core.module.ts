import { NgModule } from '@angular/core';
import { SharedDataAccessModule } from '@workspace/shared/data-access';

@NgModule({
  imports: [
    SharedDataAccessModule.forRoot(),
  ],
})
export class CoreModule {}
