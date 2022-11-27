<script lang="ts">
    import {LanguageStore} from "../stores"
    import type { Language } from "../stores";
    import { supabase } from './supaBaseClient'
    import {onMount} from "svelte"
    export let chosenLanguage: Language; 

    let languageList: any[] = [];
    let fetched: boolean = false

    onMount(()=>{
        fetchLanguages()
        fetchLanguages().then(
            function(value) {
                console.log(value);  
                console.log("Data stored: ", languageList)
                console.log("Test retrieval: ", typeof(languageList[0].Language))
            }
        )
    })

    async function fetchLanguages(){
        fetched = true
        try{
            let { data, error, status } = await supabase
            .from('Languages')
            .select('id, Language')
            

            if (error && status !== 406) throw error

            if(data){
                console.log("Data retrieved from DB: ", data)
                languageList = data
            }

        }catch(error){
            console.log("Error: ", error)
            fetched = false
        }
        return fetched
    }

</script>
<select bind:value={chosenLanguage} class="text-3xl font-bold select select-ghost select-sm w-auto max-w-xs h-fit">
    <option disabled selected></option>
    
    
    {#each $LanguageStore as item (item.id)}
    <option value={item}>
        {item.language}
    </option>
    {/each}

    {#each languageList as codingLanguage (codingLanguage.id)}
    <option value={codingLanguage.Language}>
        {codingLanguage.Language}
    </option>
    {/each}
</select>