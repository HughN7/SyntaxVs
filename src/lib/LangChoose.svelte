<script lang="ts">
    import LangChooseOption from "./LangChooseOption.svelte";
    export let lang1Option:{id:number, language:string, print:string, integer:string, string:string, decimal:string};
    export let lang2Option:{id:number, language:string, print:string, integer:string, string:string, decimal:string};
    
    //This is terrible just to have placeholder text, but whatever. 
    let lang1Default:{id:number, language:string, print:string, integer:string, string:string, decimal:string} = {
        id: 0, language: "language 1", print:"print statement", integer:"0", string:"some string", decimal: "0.0" 
    }; 
    let lang2Default:{id:number, language:string, print:string, integer:string, string:string, decimal:string} = {
        id: 0, language: "language 2", print:"print statement", integer:"0", string:"some string", decimal: "0.0" 
    }; 
</script>

<div>
    Compare <LangChooseOption text={lang1Default} bind:chosenLanguage={lang1Option}/> 
    syntax with <LangChooseOption text={lang2Default} bind:chosenLanguage={lang2Option}/> syntax
</div>