<script lang="ts">
	import LangDropDown from '$lib/ChooseLanguage/LangDropDown.svelte';
	import { ChosenLanguage1, ChosenLanguage2 } from '../../stores';
	import { supabase } from '$lib/supaBaseClient';
	import { onMount } from 'svelte';
	import {Language_Choice} from "$lib/ChooseLanguage/Choice"

	let lang1ID: number = 1; 
	let lang2ID: number = 2;

	let fetchedChosenLangInfo: boolean = false;

	/*
	function handleMessage1(event: { detail: { message: number; }; }) {
		lang1ID = event.detail.message;
		lang1ID = lang1ID
		console.log("Lang1ID updated:", lang1ID)
		runFetchChosenLanguageInfo()
	}

	function handleMessage2(event: { detail: { message: number; }; }) {
		lang2ID = event.detail.message;
		lang2ID = lang2ID
		console.log("Lang2ID updated:", lang2ID)
		runFetchChosenLanguageInfo()
	}

	//Fetch language Info, then logs
	function runFetchChosenLanguageInfo() {
		fetchChosenLanguageInfo().then(function (value: boolean) {
			console.log('\nFetched Lang Info?: ', value);

			//Reactive assignment for svelte
			$ChosenLanguage1 = $ChosenLanguage1;
			$ChosenLanguage2 = $ChosenLanguage2;
		});
	}

	//Fetch language info for the two chosen id's
	async function fetchChosenLanguageInfo() {
		fetchedChosenLangInfo = true;
		try {
			const { data, error, status } = await supabase
				.from('Languages')
				.select('*')
				.in('id', [lang1ID, lang2ID]);

			if (error && status !== 406) {
				throw error;
			}

			if (data) {
				console.log('===Data retrieved for table=== \n-', data);
				if (data.length < 2) {
					//If we're comparing the same language in both columns
					$ChosenLanguage1 = $ChosenLanguage2 = data[0];
				} else {
					//Because we're querying DB with .in, need to assign language to correct column
					//First lang - column1, second lang - column2
					if (data[0].id == lang1ID) {
						$ChosenLanguage1 = data[0];
						$ChosenLanguage2 = data[1];
					} else {
						$ChosenLanguage1 = data[1];
						$ChosenLanguage2 = data[0];
					}
				}
				
				//Reactive assignment for svelte
				$ChosenLanguage1 = $ChosenLanguage1;
				$ChosenLanguage2 = $ChosenLanguage2;
				console.log('\nchosen lang 1 id: ', lang1ID, $ChosenLanguage1);
				console.log('chosen lang 2 id: ', lang2ID, $ChosenLanguage2, '\n');
			}
			console.log("DATA:\n-", data)
		} catch (error) {
			console.log('Error | Fetching All Language Information: ', error);
			fetchedChosenLangInfo = false;
		}

		return fetchedChosenLangInfo;
	}

	onMount(runFetchChosenLanguageInfo)
	*/
</script>

<span class="mx-auto">
	<!--div class="mt-20 flex text-5xl font-bold justify-center">
		Compare <LangDropDown on:message={handleMessage1}/> and <LangDropDown on:message={handleMessage2}/> Syntax
	</div-->
	<div class="mt-20 flex text-5xl font-bold justify-center">
		Compare <LangDropDown Language={Language_Choice.Language1}/> and <LangDropDown Language={Language_Choice.Language2}/> Syntax
	</div>
</span>
