import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, TranslateModule, MatButtonModule],
  exports: [NavbarComponent, NotfoundComponent],
  declarations: [NavbarComponent, NotfoundComponent],
})
export class ShellModule {}
