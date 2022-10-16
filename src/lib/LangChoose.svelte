<script lang="ts">
    import LangOption from "./LangOption.svelte";
    export let lang1Option:{id:number, language:string, print:string, integer:string, string:string, decimal:string};
    export let lang2Option:{id:number, language:string, print:string, integer:string, string:string, decimal:string};
</script>

<div>
    Compare <LangOption  bind:chosenLanguage={lang1Option}/> 
    syntax with <LangOption bind:chosenLanguage={lang2Option}/> syntax
</div>