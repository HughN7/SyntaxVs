<script lang="ts">
    import LangDropDown from "$lib/ChooseLanguage/LangDropDown.svelte";
    import { ProgrammingLanguagesDB, ChosenLanguage1ID, ChosenLanguage2ID, type Language } from "../../stores"
    import { supabase } from '$lib/supaBaseClient'
    import { onMount } from "svelte"
	
    
    export let lang1Option:Language, lang2Option:Language;
    //export let lang2Option:Language;

    let lang1ID: number = 0, lang2ID: number = 0;

    //Load language list from db into store
    let fetched: boolean = false; 

    function mount(){
        fetchLanguageList().then(
            function(value) {
                console.log("Fetched: ", value);  
                console.log("Data stored: ", $ProgrammingLanguagesDB)
                console.log("Test retrieval datatype: ", typeof($ProgrammingLanguagesDB[0].Language))
            }
        )
    }

    async function fetchLanguageList(){
        fetched = true
        try{
            let { data, error, status } = await supabase
            .from('Languages')
            .select('id, Language')
            
            if (error && status !== 406) throw error

            if(data){
                console.log("Data retrieved from DB: ", data)
                $ProgrammingLanguagesDB = data
            }

        }catch(error){
            console.log("Error: ", error)
            fetched = false
        }
        return fetched

        
    }

    onMount(mount)

</script>

<div>
    Compare <LangDropDown bind:chosenLanguage={lang1Option} bind:chosenLanguageID={lang1ID} on:change={()=> $ChosenLanguage1ID = lang1ID}/> 
    syntax with <LangDropDown bind:chosenLanguage={lang2Option} bind:chosenLanguageID={lang2ID} on:change={()=> $ChosenLanguage2ID = lang2ID}/> syntax
    <button class="btn btn-primary m-2">
        Go
    </button>
</div>
<!--div>
    <button on:click={()=>console.log("First Language ID", $ChosenLanguage1ID)} class="btn btn-primary">
        Console Log: {$ChosenLanguage1ID}| Lang1ID Passed {lang1ID}
    </button>
    <button on:click={()=>console.log("Second Language ID", $ChosenLanguage2ID)} class="btn btn-primary">
        Console Log: {$ChosenLanguage2ID}| Lang2ID Passed {lang2ID}
    </button>
</div-->