<script lang="ts">
    import {LanguageStore} from "../stores"
    import type { Language } from "../stores";
    import { supabase } from './supaBaseClient'
    import {onMount} from "svelte"
    export let chosenLanguage: Language; 

    let languageList: any[] = [];

    onMount(()=>{
        fetchLanguages()
    })

    const fetchLanguages = async () =>{
        try{
            let { data, error, status } = await supabase
            .from('Languages')
            .select('*')
            

            if (error && status !== 406) throw error

            if(data){
                console.log("Data retrieved from DB: ", data)
                languageList = data
            }

        }catch(error){
            console.log("Error: ", error)
        }
    }
</script>
<select bind:value={chosenLanguage} class="text-3xl font-bold select select-ghost select-sm w-auto max-w-xs h-fit">
    <option disabled selected></option>
    
    
    {#each $LanguageStore as item (item.id)}
    <option value={item}>
        {item.language}
    </option>
    {/each}
    {#each languageList as language (language.id)}
    <option value={language.Language}>
        {language.Language}
    </option>
    {/each}
</select>