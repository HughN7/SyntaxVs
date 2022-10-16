<script lang="ts">
    import LangChooseOption from "./LangChooseOption.svelte";
    export let lang1Option:{id:number, language:string, print:string, integer:string, string:string, decimal:string};
    export let lang2Option:{id:number, language:string, print:string, integer:string, string:string, decimal:string};
</script>

<div>
    Compare <LangChooseOption  bind:chosenLanguage={lang1Option}/> 
    syntax with <LangChooseOption bind:chosenLanguage={lang2Option}/> syntax
</div>