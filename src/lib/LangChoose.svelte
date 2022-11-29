<script lang="ts">
    import LangOption from "./LangOption.svelte";
    import {ProgrammingLanguagesDB, type Language} from "../stores"
    import { supabase } from './supaBaseClient'
    import { onMount } from "svelte"
    
    export let lang1Option:Language;
    export let lang2Option:Language;

    //Load into store
    let fetched: boolean = false

    function mount(){
        fetchLanguages().then(
            function(value) {
                console.log("Fetched: ", value);  
                console.log("Data stored: ", $ProgrammingLanguagesDB)
                console.log("Test retrieval datatype: ", typeof($ProgrammingLanguagesDB[0].Language))
            }
        )
    }

    async function fetchLanguages(){
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
    Compare <LangOption  bind:chosenLanguage={lang1Option}/> 
    syntax with <LangOption bind:chosenLanguage={lang2Option}/> syntax
</div>