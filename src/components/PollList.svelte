<script>
	import PollStore from '../stores/PollStore.js';
	import PollDetails from './PollDetails.svelte';
	/* component that cycle through the data and adds a list of polls */
	export let polls = [];

	// subscribe to the data inside the PollStore
	PollStore.subscribe( data => {
		polls = data;
	});
</script>

<div class="poll-list">
	{#each polls as poll (poll.id)}
		<div>
			<PollDetails poll={poll} on:vote />
		</div>
	{/each}
</div>

<style>
	.poll-list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
</style>