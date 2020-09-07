<script>
	import { fade, slide, scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import PollStore from '../stores/PollStore.js';
	import PollDetails from './PollDetails.svelte';
	// we can use trnsition only on HTML elements not on custom components
	// that's the reason we use a div to wrap custom components
</script>

<div class="poll-list">
	{#each $PollStore as poll (poll.id)}
		<div in:fade out:scale|local animate:flip={{duration: 500}}>
			<PollDetails poll={poll} />
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