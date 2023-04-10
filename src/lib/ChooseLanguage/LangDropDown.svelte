<script lang="ts">
	import { LanguageList } from '../../stores';
	export let chosenLanguageID: number;
</script>

<select
	bind:value={chosenLanguageID}
	on:change
	class="text-5xl font-bold select select-ghost w-fit h-fit"
>
	{#each $LanguageList as language (language.id)}
		<option value={language.id}>
			{language.Language}
		</option>
	{/each}
</select>
