<script lang="ts">
    import LangOption from "./LangOption.svelte";
    import type { Language } from "src/stores";
    
    export let lang1Option:Language;
    export let lang2Option:Language;
</script>

<div>
    Compare <LangOption  bind:chosenLanguage={lang1Option}/> 
    syntax with <LangOption bind:chosenLanguage={lang2Option}/> syntax
</div>