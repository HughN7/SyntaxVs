<script lang="ts">
	import { codeTheme, ChosenLanguage1, ChosenLanguage2 } from '../../stores';
	import TableRow from '$lib/Table/TableRow.svelte';

	/*
    Conditional Statements (combine, and, or, not)
    Loops
    Array
    ListLike
    Map
    Classes
    */
</script>

<svelte:head>
	{@html $codeTheme}
</svelte:head>

<div class="rounded-lg shadow-2xl pt-5 mb-24">
	<table class="table table-zebra w-full">
		<!-- head -->
		<thead>
			<tr>
				<th><div class="w-2 justify-center">0</div></th>
				<td><div class="w-14 justify-center mr-2">Type</div></td>
				<th>{$ChosenLanguage1.Language}</th>
				<th>{$ChosenLanguage2.Language}</th>
			</tr>
		</thead>
		<tbody>
			<TableRow
				row_number={1}
				row_name="Printing"
				lang1_property={$ChosenLanguage1.Printing}
				lang1_property_info={$ChosenLanguage1.Printing_Info}
				lang2_property={$ChosenLanguage2.Printing}
				lang2_property_info={$ChosenLanguage2.Printing_Info}
			/>
			<TableRow
				row_number={2}
				row_name="Comments"
				lang1_property={$ChosenLanguage1.Comments}
				lang1_property_info={$ChosenLanguage1.Comments_Info}
				lang2_property={$ChosenLanguage2.Comments}
				lang2_property_info={$ChosenLanguage2.Comments_Info}
			/>
			<TableRow
				row_number={3}
				row_name="String"
				lang1_property={$ChosenLanguage1.String}
				lang1_property_info={$ChosenLanguage1.String_Info}
				lang2_property={$ChosenLanguage2.String}
				lang2_property_info={$ChosenLanguage2.String_Info}
			/>
			<TableRow
				row_number={4}
				row_name="Integers"
				lang1_property={$ChosenLanguage1.Integer}
				lang1_property_info={$ChosenLanguage1.Integer_Info}
				lang2_property={$ChosenLanguage2.Integer}
				lang2_property_info={$ChosenLanguage2.Integer_Info}
			/>
			<TableRow
				row_number={5}
				row_name="Decimals"
				lang1_property={$ChosenLanguage1.Decimal}
				lang1_property_info={$ChosenLanguage1.Decimal_Info}
				lang2_property={$ChosenLanguage2.Decimal}
				lang2_property_info={$ChosenLanguage2.Decimal_Info}
			/>
			<TableRow
				row_number={6}
				row_name="Conditional"
				lang1_property={$ChosenLanguage1.Conditional}
				lang1_property_info={$ChosenLanguage1.Conditional_Info}
				lang2_property={$ChosenLanguage2.Conditional}
				lang2_property_info={$ChosenLanguage2.Conditional_Info}
			/>
			<TableRow
				row_number={7}
				row_name="Loop"
				lang1_property={$ChosenLanguage1.Loop}
				lang1_property_info={$ChosenLanguage1.Loop_Info}
				lang2_property={$ChosenLanguage2.Loop}
				lang2_property_info={$ChosenLanguage2.Loop_Info}
			/>
			<TableRow
				row_number={8}
				row_name="Array"
				lang1_property={$ChosenLanguage1.Array}
				lang1_property_info={$ChosenLanguage1.Array_Info}
				lang2_property={$ChosenLanguage2.Array}
				lang2_property_info={$ChosenLanguage2.Array_Info}
			/>
			<TableRow
				row_number={9}
				row_name="List-Like"
				lang1_property={$ChosenLanguage1.List}
				lang1_property_info={$ChosenLanguage1.List_Info}
				lang2_property={$ChosenLanguage2.List}
				lang2_property_info={$ChosenLanguage2.List_Info}
			/>
			<TableRow
				row_number={10}
				row_name="Map-Like"
				lang1_property={$ChosenLanguage1.Map}
				lang1_property_info={$ChosenLanguage1.Map_Info}
				lang2_property={$ChosenLanguage2.Map}
				lang2_property_info={$ChosenLanguage2.Map_Info}
			/>
			<TableRow
				row_number={11}
				row_name="Class"
				lang1_property={$ChosenLanguage1.Class}
				lang1_property_info={$ChosenLanguage1.Class_Info}
				lang2_property={$ChosenLanguage2.Class}
				lang2_property_info={$ChosenLanguage2.Class_Info}
			/>
		</tbody>
	</table>
</div>
