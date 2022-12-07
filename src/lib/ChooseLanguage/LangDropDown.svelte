<script lang="ts">
    import { LanguageList} from "../../stores"
    export let chosenLanguageID: number; 

</script>
<select bind:value={chosenLanguageID} on:change class="text-3xl font-bold select select-ghost select-sm w-auto max-w-xs h-fit">
    <option disabled selected></option>
    
    <!--
    {#each $LanguageStore as item}
    <option value={item}>
        {item.language}
    </option>
    {/each}-->

    {#each $LanguageList as language (language.id)}
    <option value={language.id}>
        {language.Language}
    </option>
    {/each}

    <!--
    {#each languageList as codingLanguage (codingLanguage.id)}
    <option value={codingLanguage.Language}>
        {codingLanguage.Language}
    </option>
    {/each}
    -->
</select>