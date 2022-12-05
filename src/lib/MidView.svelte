<script lang="ts">
    import {DefaultLanguage, siteTheme, type Language} from "../stores"; 
    import LangChoose from "$lib/ChooseLanguage/LangVsDisplay.svelte";
    import LangTable from "$lib/LangTable.svelte";
    import LangTableFromDB from "$lib/LangTableFromDB.svelte"
    let lang1:Language = DefaultLanguage
    let lang2:Language = DefaultLanguage

    /*
    onMount(()=>{
        document.getElementsByTagName("html")[0].dataset.theme = "light"
        document.getElementsByTagName("html")[0].dataset.theme = $siteTheme.toString()
    })*/

</script>


<!--input type="text" placeholder="Type here" class="input input-ghost w-full max-w-xs" bind:value={$testPrint}/-->



<div class="hero min-h-screen bg-base-200">
    <div class="text-center">
        <div class="hero-content">
            <h1 class="text-3xl font-bold"><LangChoose bind:lang1Option={lang1} bind:lang2Option={lang2}/></h1>
        </div>
        <div>
            <!--LangTable bind:lang1={lang1} bind:lang2={lang2}/-->
            <LangTableFromDB/>
        </div>
    </div>
</div>