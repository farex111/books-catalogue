import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading/loading.component';
import { Loding_spinnerComponent } from './loading/loading_spinner/loding_spinner.component';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [TranslateModule, LoadingComponent],
  declarations: [LoadingComponent, Loding_spinnerComponent],
})
export class SharedModule {}
