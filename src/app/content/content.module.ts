import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    TranslateModule,
  ],
  exports: [],
  declarations: [ContentComponent],
})
export class ContentModule {}
