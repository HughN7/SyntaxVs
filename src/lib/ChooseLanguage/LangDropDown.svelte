<script lang="ts">
    import { LanguageList} from "../../stores"
    export let chosenLanguageID: number; 

</script>
<select bind:value={chosenLanguageID} on:change class="text-3xl font-bold select select-ghost select-sm w-auto max-w-xs h-fit">
    <option disabled selected></option>
    
    {#each $LanguageList as language (language.id)}
    <option value={language.id}>
        {language.Language}
    </option>
    {/each}

</select>