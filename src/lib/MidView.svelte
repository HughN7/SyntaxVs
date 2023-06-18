<script lang="ts">
    import LangVsDisplay from "$lib/ChooseLanguage/LangVsDisplay.svelte";
    import LangTableFromDB from "$lib/Table/LangTableFromDB.svelte"

</script>

<div class="hero min-h-screen bg-base-200">
    <div class="flex-auto">
        <div class="text-center py-4">
            <h1><LangVsDisplay/></h1>
        </div>
        <div>
            <LangTableFromDB/>
        </div>
    </div>
</div>