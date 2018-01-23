import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { DogComponent } from './dog/dog.component';

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'test', component: TestComponent},
	{path: 'dog', component: DogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
