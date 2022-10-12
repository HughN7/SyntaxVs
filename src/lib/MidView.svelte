<script lang="ts">
    import LangChoose from "./LangChoose.svelte";
    import LangTable from "./LangTable.svelte";
    let lang1:{id:number, language:string, print:string, integer:string, string:string, decimal:string} = {
        id: 0, language: "language 1", print:"print statement", integer:"0", string:"some string", decimal: "0.0" 
    }; 
    let lang2:{id:number, language:string, print:string, integer:string, string:string, decimal:string} = {
        id: 0, language: "language 2", print:"print statement", integer:"0", string:"some string", decimal: "0.0" 
    }; 
</script>

<div class="hero min-h-screen bg-base-200">
    <div class="text-center">
        <div class="hero-content">
            <h1 class="text-xl font-bold"><LangChoose bind:lang1Option={lang1} bind:lang2Option={lang2}/></h1>
        </div>
        <div>
            <LangTable bind:lang1={lang1} bind:lang2={lang2}/>
        </div>
    </div>
</div>