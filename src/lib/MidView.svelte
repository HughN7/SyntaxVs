<script lang="ts">
    import LangVsDisplay from "$lib/ChooseLanguage/LangVsDisplay.svelte";
    import LangTableFromDB from "$lib/Table/LangTableFromDB.svelte"

</script>

<div class="hero min-h-screen bg-base-200">
    <div class="">
        <div class="text-center py-4">
            <h1 class=" text-5xl font-bold"><LangVsDisplay/></h1>
        </div>
        <div>
            <LangTableFromDB/>
        </div>
    </div>
</div>