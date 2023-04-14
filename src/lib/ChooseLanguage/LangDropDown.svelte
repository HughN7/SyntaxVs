<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { LanguageList, defaultLang } from '../../stores';
	import Select from "svelte-select";

	const dispatch = createEventDispatcher();

	let items = [...$LanguageList]
	let justValue: number; 

	function handleChoice(){
		const data = {message: justValue}
		dispatch("message", data)
	}



</script>

<!--select
	bind:value={chosenLanguageID}
	on:change
	class="text-5xl font-bold select select-ghost w-fit h-fit"
>
	{#each $LanguageList as language (language.id)}
		<option value={language.id}>
			{language.Language}
		</option>
	{/each}
</select-->

<Select class="w-fit" {items} itemId="id" label="Language" bind:justValue on:change={handleChoice}/>

<!--p>
	{justValue}
	<button class="btn" on:click={()=> console.log(justValue)}>click</button>
</p-->