import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { LoadingComponent } from './loading/loading.component';
import { MatRadioModule } from '@angular/material/radio';
import { Loding_spinnerComponent } from './loading/loading_spinner/loding_spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    TranslateModule,
    MatBadgeModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
  exports: [
    TranslateModule,
    LoadingComponent,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatBadgeModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
  ],
  declarations: [LoadingComponent, Loding_spinnerComponent],
})
export class SharedModule {}
