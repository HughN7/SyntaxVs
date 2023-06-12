<script lang="ts">
	import LangDropDown from '$lib/ChooseLanguage/LangDropDown.svelte';
	import { Language_Choice } from '$lib/ChooseLanguage/LanguageChoiceEnums';
</script>

<span class="mx-auto">
	<div class="mt-20 flex text-5xl font-bold justify-center">
		Compare <LangDropDown Language={Language_Choice.Language1} /> and <LangDropDown
			Language={Language_Choice.Language2}
		/> Syntax
	</div>
</span>
