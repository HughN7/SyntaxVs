<script lang="ts">
    import { HighlightAuto } from "svelte-highlight";

    //Need to handle imports
    export let row_number: number; 
    export let row_name: string;
    export let lang1_property: string;
    export let lang2_property: string; 

</script>

<tr class="hover font-bold">
    <th>{row_number}</th>
    <td>{row_name}</td>
    <td class="max-w-3xl h-fit overflow-auto"><HighlightAuto code={lang1_property}/></td>
    <td class="max-w-3xl h-fit overflow-auto"><HighlightAuto code={lang2_property}/></td>
</tr>