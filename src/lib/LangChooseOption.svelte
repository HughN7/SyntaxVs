<script lang="ts">
    import {LanguageStore} from "../stores"
    export let text: {id:number, language:string, print:string, integer:string, string:string, decimal:string}; 
    export let chosenLanguage: {id:number, language:string, print:string, integer:string, string:string, decimal:string}; 

</script>
<select bind:value={chosenLanguage} class="text-xl font-bold select select-ghost select-sm w-auto max-w-xs">
    <option disabled selected>{text.language}</option>
    
    {#each $LanguageStore as item}
    <option value={item}>
        {item.language}
    </option>
    {/each}
</select>