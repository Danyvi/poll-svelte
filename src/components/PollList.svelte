<script>
	// import { onMount, onDestroy } from 'svelte';
	import PollStore from '../stores/PollStore.js';
	import PollDetails from './PollDetails.svelte';
	/* component that cycle through the data and adds a list of polls */
	// export let polls = [];

	// we can avoid the lifecycle hooks to subscribe or unsubscribe using
	// $PollStore to reference directly to the store
	// it will automatically unsubscribe from the store when the component is destroyed


	// // subscribe to the data inside the PollStore
	// const unsub = PollStore.subscribe( data => {
	// 	polls = data;
	// });

	// onMount( () => {
	// 	// good time to get data from a db
	// 	console.log('component mounted');
	// });

	// onDestroy( () => {
	// 	// good time to unsubscrive from a store
	// 	// when a component is no longer needed/ destroyed
	// 	console.log('component destroyed');
	// 	unsub();
	// });

</script>

<div class="poll-list">
	{#each $PollStore as poll (poll.id)}
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