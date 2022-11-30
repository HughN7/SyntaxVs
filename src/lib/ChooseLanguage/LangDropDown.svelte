<script lang="ts">
    import { LanguageStore, ProgrammingLanguagesDB, type  Language } from "../../stores"
    export let chosenLanguage: Language; 

</script>
<select bind:value={chosenLanguage} class="text-3xl font-bold select select-ghost select-sm w-auto max-w-xs h-fit">
    <option disabled selected></option>
    
    
    {#each $LanguageStore as item}
    <option value={item}>
        {item.language}
    </option>
    {/each}

    {#each $ProgrammingLanguagesDB as pLang (pLang.id)}
    <option value={pLang.id}>
        {pLang.Language}
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