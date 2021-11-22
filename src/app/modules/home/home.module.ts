import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		RouterModule,
		MatButtonModule,
		MatIconModule,
		HomeRoutingModule
	]
})
export class HomeModule {
}
