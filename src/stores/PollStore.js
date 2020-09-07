import { writeable } from 'svelte/store';

const PollStore = writeable([
	{
		id: 1,
		question: 'Python or JavaScript?',
		answerA: 'Python',
		answerB: 'JavaScript',
		votesA: 9,
		votesB: 15
	},
]); // it creates a writeable store of data

export default PollStore;