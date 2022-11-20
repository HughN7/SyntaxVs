<script lang="ts">
    import type { Language } from "src/stores";
    import {DefaultLanguage, testPrint} from "../stores"; 
    import LangChoose from "./LangChoose.svelte";
    import LangTable from "./LangTable.svelte";
    let lang1:Language = DefaultLanguage
    let lang2:Language = DefaultLanguage

</script>


<!--input type="text" placeholder="Type here" class="input input-ghost w-full max-w-xs" bind:value={$testPrint}/-->



<div class="hero min-h-screen bg-base-200">
    <div class="text-center">
        <div class="hero-content">
            <h1 class="text-3xl font-bold"><LangChoose bind:lang1Option={lang1} bind:lang2Option={lang2}/></h1>
        </div>
        <div>
            <LangTable bind:lang1={lang1} bind:lang2={lang2}/>
        </div>
    </div>
</div>