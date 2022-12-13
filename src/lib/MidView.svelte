<script lang="ts">
    import LangVsDisplay from "$lib/ChooseLanguage/LangVsDisplay.svelte";
    import LangTableFromDB from "$lib/LangTableFromDB.svelte"

</script>

<div class="hero min-h-screen bg-base-200">
    <div class="text-center">
        <div class="hero-content">
            <h1 class="text-3xl font-bold"><LangVsDisplay/></h1>
        </div>
        <div>
            <LangTableFromDB/>
        </div>
    </div>
</div>