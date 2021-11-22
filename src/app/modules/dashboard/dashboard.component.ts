import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LISTS } from 'src/app/shared/providers/lists.provider';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	lists = LISTS;
	searchText: string;

	private subject: Subject<string> = new Subject();

	constructor() { }

	ngOnInit() {
		(this.subject.pipe(debounceTime(300), distinctUntilChanged())).subscribe(searchTextValue => {
			this.search();
		});
	}

	onAddList(): void {
		console.log('add list');
	}

	searchChange(): void {
		this.subject.next(this.searchText);
	}

	search(): void {
		if (this.searchText?.length) {
			console.log(this.searchText);
		}
	}

	clearSearch(): void {
		this.searchText = undefined;
	}
}
