import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingInvitation } from './wedding-invitation/wedding-invitation.component';


const routes: Routes = [
  { path: "**", component: WeddingInvitation }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
