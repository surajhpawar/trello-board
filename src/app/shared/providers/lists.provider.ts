export let LISTS = [{
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
	filteredCards: []
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
	filteredCards: []
}, {
	id: 4,
	name: 'Done',
	cards: [{
		id: 123,
		name: 'test Done'
	}],
	filteredCards: []
}];
