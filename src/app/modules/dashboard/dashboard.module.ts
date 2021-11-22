import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { StageComponent } from './stage/stage.component';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard.routing.module';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		DashboardRoutingModule
	],
	exports: [DashboardComponent],
	declarations: [DashboardComponent, CardComponent, StageComponent]
})
export class DashboardModule { }
