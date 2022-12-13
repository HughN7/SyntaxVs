<script lang="ts">
    import {siteTheme} from "../stores"; 
    import LangVsDisplay from "$lib/ChooseLanguage/LangVsDisplay.svelte";
    import LangTable from "$lib/LangTable.svelte";
    import LangTableFromDB from "$lib/LangTableFromDB.svelte"

</script>


<!--input type="text" placeholder="Type here" class="input input-ghost w-full max-w-xs" bind:value={$testPrint}/-->



<div class="hero min-h-screen bg-base-200">
    <div class="text-center">
        <div class="hero-content">
            <h1 class="text-3xl font-bold"><LangVsDisplay/></h1>
        </div>
        <div>
            <!--LangTable bind:lang1={lang1} bind:lang2={lang2}/-->
            <LangTableFromDB/>
        </div>
    </div>
</div>