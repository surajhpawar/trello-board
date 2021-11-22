import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-stage',
	templateUrl: './stage.component.html',
	styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

	@Input() stage: any;

	constructor() { }

	ngOnInit() {
	}
}
