import { Component, OnInit } from '@angular/core';
import { LISTS } from 'src/app/shared/providers/lists.provider';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	lists = LISTS;

	constructor() { }

	ngOnInit() {
	}

	onAddCard() {
	}
}
