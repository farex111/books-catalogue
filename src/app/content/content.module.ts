import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddComponent } from './add/add.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BooksApiService } from './services/books.api.service';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  exports: [],
  declarations: [ContentComponent, AddComponent],
  providers: [BooksApiService],
})
export class ContentModule {}
