<script lang="ts">
	import { onMount } from 'svelte';
	import { LanguageList } from '../../stores';
	import Select from 'svelte-select';
	import { supabase } from '$lib/supaBaseClient';
	import { Language_Choice } from '$lib/ChooseLanguage/LanguageChoiceEnums';
	import { ChosenLanguage1, ChosenLanguage2 } from '../../stores';

	export let Language: any;
	let items: any; //assigned via onMount
	let justValue: number; //Chosen id

	function handleChoice() {
		console.log('Getting id:', justValue);
		getLanguageData().then(function (value: boolean) {
			console.log('\nFetched Lang Info?: ', value);
		});
	}

	export async function getLanguageData() {
		let fetched_language = true;
		try {
			const { data, error } = await supabase.from('Languages').select('*').eq('id', justValue);

			if (error) {
				throw error;
			}

			if (data) {
				console.log('Data retrieved for id', justValue, ':', data);
				if (Language == Language_Choice.Language1) {
					$ChosenLanguage1 = data[0];
					$ChosenLanguage1 = $ChosenLanguage1;
					//console.log('\nchosen lang 1 id: ', justValue, $ChosenLanguage1);
				} else {
					$ChosenLanguage2 = data[0];
					$ChosenLanguage2 = $ChosenLanguage2;
					//console.log('chosen lang 2 id: ', justValue, $ChosenLanguage2, '\n');
				}
			}
		} catch (error) {
			console.log('Error | Tried to fetch language id', justValue, ':', error);
			fetched_language = false;
		}

		return fetched_language;
	}

	onMount(() => {
		items = [...$LanguageList];
		justValue = Language === Language_Choice.Language1 ? 1 : 2;

		getLanguageData().then(function (value: boolean) {
			console.log('\nFetched Lang Info?: ', value);
		});
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
