import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LISTS } from 'src/app/shared/providers/lists.provider';
import { debounceTime } from 'rxjs/operators';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { List } from 'src/app/shared/models/list.model';
import { LOGS } from 'src/app/shared/providers/logs.provider';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

	lists = LISTS;
	logs = LOGS;
	searchText: string;
	showAddDialog: boolean;

	private subject: Subject<string> = new Subject();
	selectedList: List;
	type: string;

	constructor(private _cdr: ChangeDetectorRef) { }

	ngOnInit() {
		this.lists.map(list => {
			list.filteredCards = list.cards;
		});

		this._cdr.markForCheck();
		(this.subject.pipe(debounceTime(300)).subscribe(searchText => {
			this.search();
		}));
	}

	searchChange(): void {
		this.subject.next(this.searchText);
	}

	search(): void {
		if (this.searchText?.length) {
			this.lists.map(list => {
				list.filteredCards = list.cards.filter(card => {
					return card.name.toLowerCase().includes(this.searchText);
				});
			});
		} else {
			this.lists.map(list => {
				list.filteredCards = list.cards;
			});
		}
		this._cdr.markForCheck();
	}

	clearSearch(): void {
		this.searchText = undefined;
		this.search();
		this._cdr.markForCheck();
	}

	drop(event: any): void {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
			this._cdr.markForCheck();
		} else {
			transferArrayItem(event.previousContainer.data,
				event.container.data,
				event.previousIndex,
				event.currentIndex);
			this._cdr.markForCheck();
		}
	}

	onAddCard(list: List): void {
		this.selectedList = list;
		this.type = 'Card';
		this.showAddDialog = true;
		this._cdr.markForCheck();
	}

	onAddList(): void {
		this.type = 'List';
		this.showAddDialog = true;
		this._cdr.markForCheck();
	}

	onSave(data: any): void {
		if (this.selectedList) {
			const index = this.selectedList.cards.length;
			data.id = index + 1;
			this.selectedList.cards.push(data);
		} else {
			const index = this.lists.length;
			this.lists.push({
				id: index + 1,
				name: data.name,
				cards: [],
				filteredCards: []
			});
		}
		this.closeDialog('');
		this._cdr.markForCheck();
	}

	closeDialog(event: any): void {
		this.selectedList = undefined;
		this.showAddDialog = false;
		this._cdr.markForCheck();
	}

	onDeleteList(list: List): void {
		this.lists = this.lists.filter(listElement => listElement.id !== list.id);
		this._cdr.markForCheck();
	}
}
