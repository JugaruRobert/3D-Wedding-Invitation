import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestAnimationComponent } from './test-animation/test-animation.component';


const routes: Routes = [
  { path: "**", component: TestAnimationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
