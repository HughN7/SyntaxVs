<script lang="ts">
    import LangOption from "./LangOption.svelte";
    import {LanguageStore, type Language} from "../stores"
    
    export let lang1Option:Language;
    export let lang2Option:Language;

    console.log("Currently inside of store: ", $LanguageStore)

    //Load into store

</script>

<div>
    Compare <LangOption  bind:chosenLanguage={lang1Option}/> 
    syntax with <LangOption bind:chosenLanguage={lang2Option}/> syntax
</div>