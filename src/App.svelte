<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Tabs from "./shared/Tabs.svelte";

	// Tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';

	const tabChange = (e)=>{
		activeItem = e.detail; //item coming from Tabs component 
	};

</script>

<Header />
<main>
	<Tabs activeItem={activeItem} items={items} on:tabChange={tabChange}/>
	{#if activeItem === 'Current Polls'}
		<p>Poll List Component goes here</p>
	{:else if activeItem === 'Add New Poll'}
		<p>Add New Poll Component</p>
	{/if}
</main>
<Footer />

<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
</style>