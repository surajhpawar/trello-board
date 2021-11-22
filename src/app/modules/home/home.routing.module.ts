import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [{
			path: '',
			pathMatch: 'full',
			redirectTo: 'dashboard'
		}, {
			path: 'dashboard',
			loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
		}]
	}
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	]
})

export class HomeRoutingModule {
}
