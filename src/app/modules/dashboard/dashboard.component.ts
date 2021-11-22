import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LISTS } from 'src/app/shared/providers/lists.provider';
import { debounceTime } from 'rxjs/operators';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { List } from 'src/app/shared/models/list.model';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

	lists = LISTS;
	searchText: string;

	private subject: Subject<string> = new Subject();

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

	onAddList(): void {
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
		this._cdr.markForCheck();
	}
}
