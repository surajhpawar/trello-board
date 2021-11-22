import { Card } from './card.model';

export interface List {
	id: number;
	name: string;
	cards: Card[];
	filteredCards: Card[];
}
