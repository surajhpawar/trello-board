import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		MatIconModule,
		MatButtonModule,
		DragDropModule,
		DashboardRoutingModule
	],
	exports: [DashboardComponent],
	declarations: [DashboardComponent, CardComponent]
})
export class DashboardModule { }
