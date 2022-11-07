<script lang="ts">
    import {HighlightAuto} from "svelte-highlight"
    import { ChosenTheme, type Language } from "../stores";

    export let lang1: Language 
    export let lang2: Language


    const checkStyle = () => {
        console.log("Store style is: " + $ChosenTheme)
    }


</script>

<svelte:head>
    {@html $ChosenTheme}
</svelte:head>

<div class="overflow-x-auto border-2 border-stone-800">
    <table class="table w-full">
        <!-- head -->
        <thead>
        <tr>
            <th>0</th>
            <th>Type</th>
            <th>{lang1.language}</th>
            <th>{lang2.language}</th>
        </tr>
        </thead>
        <tbody>
        <!-- row 1 -->
        <tr class="hover">
            <th>1</th>
            <td>Printing</td>
            <td><HighlightAuto code={lang1.print}/></td>
            <td><HighlightAuto code={lang2.print}/></td>
        </tr>
        <!-- row 2 -->
        <tr class="hover">
            <th>2</th>
            <td>String</td>
            <td><HighlightAuto code={lang1.string}/></td>
            <td><HighlightAuto code={lang2.string}/></td>
        </tr>
        <!-- row 3 -->
        <tr class="hover">
            <th>3</th>
            <td>Integers</td>
            <td><HighlightAuto code={lang1.integer}/></td>
            <td><HighlightAuto code={lang2.integer}/></td>
        </tr>
        <!-- row 4 -->
        <tr class="hover">
            <th>4</th>
            <td>Decimals</td>
            <td><HighlightAuto code={lang1.decimal}/></td>
            <td><HighlightAuto code={lang2.decimal}/></td>
        </tr>
        </tbody>
    </table>
</div>
