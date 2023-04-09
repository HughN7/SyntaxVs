<script lang="ts">
	import CodeSnippet from './CodeSnippet.svelte';

	//Need to handle imports
	export let row_number: number;
	export let row_name: string;
	export let lang1_property: string;
	export let lang2_property: string;
</script>

<tr class="hover font-bold relative">
	<th>{row_number}</th>
	<td>{row_name}</td>
	<CodeSnippet lang_property={lang1_property} lang_property_info_link="https://google.com" />
	<CodeSnippet lang_property={lang2_property} lang_property_info_link="https://google.com" />
</tr>
