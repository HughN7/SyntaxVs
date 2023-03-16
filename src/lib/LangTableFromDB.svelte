<script lang="ts">
    import { HighlightAuto } from "svelte-highlight"; 
    import { codeTheme, ChosenLanguage1, ChosenLanguage2 } from "../stores";
    
    /*
    Conditional Statements (combine, and, or, not)
    Loops
    Array or List Like
    */

</script>

<svelte:head>
    {@html $codeTheme}
</svelte:head>

<div class="overflow-x-auto rounded-lg shadow-2xl">
    <table class="table table-zebra w-full">
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
            <tr class="hover font-bold">
                <th>1</th>
                <td>Printing</td>
                <td><HighlightAuto code={$ChosenLanguage1.Printing}/></td>
                <td><HighlightAuto code={$ChosenLanguage2.Printing}/></td>
            </tr>
            <tr class="hover font-bold">
                <th>2</th>
                <td>Comments</td>
                <td><HighlightAuto code={$ChosenLanguage1.Comments}/></td>
                <td><HighlightAuto code={$ChosenLanguage2.Comments}/></td>
            </tr>
            <tr class="hover font-bold">
                <th>3</th>
                <td>String</td>
                <td><HighlightAuto code={$ChosenLanguage1.String}/></td>
                <td><HighlightAuto code={$ChosenLanguage2.String}/></td>
            </tr>
            <tr class="hover font-bold">
                <th>4</th>
                <td>Integers</td>
                <td><HighlightAuto code={$ChosenLanguage1.Integer}/></td>
                <td><HighlightAuto code={$ChosenLanguage2.Integer}/></td>
            </tr>
            <tr class="hover font-bold">
                <th>5</th>
                <td>Decimals</td>
                <td><HighlightAuto code={$ChosenLanguage1.Decimal}/></td>
                <td><HighlightAuto code={$ChosenLanguage2.Decimal}/></td>
            </tr>
            <tr class="hover font-bold">
                <th>6</th>
                <td>Conditional</td>
                <td><HighlightAuto code={$ChosenLanguage1.Conditional}/></td>
                <td><HighlightAuto code={$ChosenLanguage2.Conditional}/></td>
            </tr>
            <tr class="hover font-bold">
                <th>7</th>
                <td>Loop</td>
                <td><HighlightAuto code={$ChosenLanguage1.Loop}/></td>
                <td><HighlightAuto code={$ChosenLanguage2.Loop}/></td>
            </tr>
            <tr class="hover font-bold">
                <th>8</th>
                <td>Array/List<br>Like</td>
                <td><HighlightAuto code={$ChosenLanguage1.Array_List_Like}/></td>
                <td><HighlightAuto code={$ChosenLanguage2.Array_List_Like}/></td>
            </tr>
        </tbody>
    </table>
</div>
