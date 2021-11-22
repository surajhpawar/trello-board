import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'projects',
		loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
	},
	{
		path: '**',
		redirectTo: 'projects'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
