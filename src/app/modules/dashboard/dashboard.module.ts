import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddDataComponent } from './add-data/add-data.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		MatIconModule,
		MatButtonModule,
		DragDropModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatSidenavModule,
		DashboardRoutingModule
	],
	exports: [DashboardComponent],
	declarations: [DashboardComponent, CardComponent, AddDataComponent]
})
export class DashboardModule { }
