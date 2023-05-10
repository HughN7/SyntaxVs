<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { LanguageList } from '../../stores';
	import Select from 'svelte-select';

	const dispatch = createEventDispatcher();

	let items: any;
	let justValue: number;

	function handleChoice() {
		const data = { message: justValue };
		dispatch('message', data);
	}
	onMount(() => {
		items = [...$LanguageList];
	});
</script>

<div class="mx-2 w-1/5 text-5xl">
	<Select
		class="select-option"
		{items}
		itemId="id"
		label="Language"
		bind:justValue
		on:change={handleChoice}
		showChevron
		placeholder="Language"
		--font-size="2.5rem"
	/>
</div>

<style>
	:global(.select-option) {
		height: 3.5rem;
	}
</style>
