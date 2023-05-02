<script lang="ts">
    import Navbar from "$lib/NavBar/NavBar.svelte"
    import MainView from "$lib/MidView.svelte"
    import ScrollToTop from "$lib/ScrollToTop.svelte";
    import { LanguageList } from "../stores";
    import { supabase } from '$lib/supaBaseClient';
    import { onMount } from "svelte";

	console.log("\n---New Instance:---\n")
    /*
	let fetchedLangList: boolean = false;

    //Fetch Language List, then logs
	function runFetchLanguageList() {
		fetchLanguageList().then(function (value: boolean) {
			console.log('\nFetched Lang List?: ', value);
			console.log('Data stored: ', $LanguageList);
			//console.log("Test retrieval datatype: ", typeof($LanguageList[0].Language))
		});
	}

	//Fetch a list of all language id's & names
	async function fetchLanguageList() {
		fetchedLangList = true;
		try {
			let { data, error, status } = await supabase.from('Languages').select('id, Language');

			if (error && status !== 406) throw error;

			if (data) {
				//console.log("Data retrieved from DB: ", data)
				$LanguageList = data;
				
				//Reactive reassignment
				$LanguageList = $LanguageList
			}
		} catch (error) {
			console.log('Error | Fetched A List of Language ID & Name: ', error);
			fetchedLangList = false;
		}
		return fetchedLangList;
	}

    onMount(runFetchLanguageList)
    */
</script>
<main>
    <Navbar/>
    <MainView/>
    <ScrollToTop/>
</main>
