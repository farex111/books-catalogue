import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContentComponent } from './content.component';
import { DetailsComponent } from './details/details.component';

export const routes: Route[] = [
  {
    path: '',
    component: ContentComponent,
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    path:':id',
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentRoutingModule {}
