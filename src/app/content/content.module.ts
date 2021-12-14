import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddComponent } from './add/add.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BooksApiService } from './services/books.api.service';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list/list-item/list-item.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  exports: [],
  declarations: [
    ContentComponent,
    AddComponent,
    ListComponent,
    ListItemComponent,
    DetailsComponent,
  ],
  providers: [BooksApiService],
})
export class ContentModule {}
