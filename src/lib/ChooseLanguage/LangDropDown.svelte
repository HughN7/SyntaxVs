<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { LanguageList } from '../../stores';
	import Select from "svelte-select";

	const dispatch = createEventDispatcher();

	let items: any; 
	let justValue: number; 

	function handleChoice(){
		const data = {message: justValue}
		dispatch("message", data)
	}
	onMount(()=>{items = [...$LanguageList]})
	
</script>

<Select class="w-fit" {items} itemId="id" label="Language" bind:justValue on:change={handleChoice}/>
