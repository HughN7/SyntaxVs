<script lang="ts">
    import type { Language } from "src/stores";
    import {DefaultLanguage} from "../stores"; 
    import LangChoose from "./LangChoose.svelte";
    import LangTable from "./LangTable.svelte";
    let lang1:Language = DefaultLanguage
    let lang2:Language = DefaultLanguage
</script>

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