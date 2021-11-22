import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	stages = [{
		id: 1,
		name: 'Backlog',
		cards: [{
			id: 123,
			name: 'test backlog'
		},
		{
			id: 2,
			name: 'test backlog 2'
		},
		{
			id: 3,
			name: 'test backlog 3'
		}],
	}, {
		id: 2,
		name: 'To Do',
		cards: [],
	}, {
		id: 3,
		name: 'Ongoing',
		cards: [
			{
				id: 123,
				name: 'test ongoing'
			}
		],
	}, {
		id: 4,
		name: 'Done',
		cards: [{
			id: 123,
			name: 'test Done'
		}],
	}];

	constructor() { }

	ngOnInit() {
	}

	onAddCard() {
	}
}
