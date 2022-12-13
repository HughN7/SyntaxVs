<script lang="ts">
    import { HighlightAuto } from "svelte-highlight"; 
    import { codeTheme, ChosenLanguage1, ChosenLanguage2 } from "../stores";
    
</script>

<svelte:head>
    {@html $codeTheme}
</svelte:head>

<div class="overflow-x-auto border-2 border-slate-900">
    <table class="table w-full">
        <!-- head -->
        <thead>
        <tr>
            <th>0</th>
            <th>Type</th>
            <th>{$ChosenLanguage1.Language}</th>
            <th>{$ChosenLanguage2.Language}</th>
        </tr>
        </thead>
        <tbody>
        <!-- row 1 -->
        <tr class="hover">
            <th>1</th>
            <td>Printing</td>
            <td><HighlightAuto code={$ChosenLanguage1.Printing}/></td>
            <td><HighlightAuto code={$ChosenLanguage2.Printing}/></td>
        </tr>
        <!-- row 2 -->
        <tr class="hover">
            <th>2</th>
            <td>String</td>
            <td><HighlightAuto code={$ChosenLanguage1.String}/></td>
            <td><HighlightAuto code={$ChosenLanguage2.String}/></td>
        </tr>
        <!-- row 3 -->
        <tr class="hover">
            <th>3</th>
            <td>Integers</td>
            <td><HighlightAuto code={$ChosenLanguage1.Integer}/></td>
            <td><HighlightAuto code={$ChosenLanguage2.Integer}/></td>
        </tr>
        <!-- row 4 -->
        <tr class="hover">
            <th>4</th>
            <td>Decimals</td>
            <td><HighlightAuto code={$ChosenLanguage1.Decimal}/></td>
            <td><HighlightAuto code={$ChosenLanguage2.Decimal}/></td>
        </tr>
        </tbody>
    </table>
</div>
