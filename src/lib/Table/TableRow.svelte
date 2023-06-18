<script lang="ts">
	import CodeSnippet from './CodeSnippet.svelte';

	//Need to handle imports
	export let row_number: number;
	export let row_name: string;
	export let lang1_property: string;
	export let lang1_property_info: string; 
	export let lang2_property: string;
	export let lang2_property_info: string; 
</script>

<tr class="hover font-bold relative">
	<th><div class="w-2 justify-center">{row_number}</div></th>
	<td><div class="w-14 justify-center mr-1">{row_name}</div></td>
	<CodeSnippet lang_property={lang1_property} lang_property_info_link={lang1_property_info} />
	<CodeSnippet lang_property={lang2_property} lang_property_info_link={lang2_property_info} />
</tr>
