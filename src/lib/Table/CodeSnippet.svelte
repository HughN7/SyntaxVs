<script lang="ts">
	import { HighlightAuto } from 'svelte-highlight';
	import { fade } from 'svelte/transition';

	//Need to handle imports
	export let lang_property: string;
	export let lang_property_info_link: string;

	let link_visible: boolean = false;
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
/>
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<td
	class="relative max-w-3xl h-fit overflow-auto"
	on:mouseover={() => {
		link_visible = true;
	}}
	on:focus={() => {
		link_visible = true;
	}}
	on:mouseleave={() => {
		link_visible = false;
	}}
>
	<HighlightAuto code={lang_property} />
	{#if link_visible}
		<a
			href={lang_property_info_link}
			target="_blank"
			class="absolute top-7 right-6 btn btn-sm btn-info btn-circle"
			transition:fade
		>
			<span class="material-symbols-outlined ">read_more</span>
		</a>
	{/if}
</td>
