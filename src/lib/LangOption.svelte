<script lang="ts">
    import {LanguageStore} from "../stores"
    import type { Language } from "../stores";
    export let chosenLanguage: Language; 

</script>
<select bind:value={chosenLanguage} class="text-3xl font-bold select select-ghost select-sm w-auto max-w-xs h-fit">
    <option disabled selected>language</option>
    
    {#each $LanguageStore as item}
    <option value={item}>
        {item.language}
    </option>
    {/each}
</select>