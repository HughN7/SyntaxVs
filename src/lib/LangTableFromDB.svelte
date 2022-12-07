<script lang="ts">
    import { HighlightAuto } from "svelte-highlight"; 
    import { codeTheme, ChosenLanguage1, ChosenLanguage2 } from "../stores";
    import { onMount } from "svelte"; 
    import { supabase } from '$lib/supaBaseClient'
	import { solarizedDark } from "svelte-highlight/styles";
	import { get } from "svelte/store";

    /*
    const defaultLang = {
        id: 1,
        created_at: "2022-11-24T06:04:07.612586+00:00",
        Language: "Python",
        Printing: "print(\"Hello There\")",
        Integer: "someVariable = 1",
        Decimal: "someVariable = 6.9",
        String: "someVariable = \"Hello There\""
    }*/

    //onMount(mount)
</script>

<svelte:head>
    {@html $codeTheme}
</svelte:head>

<div class="border-2 p-2">
    Chosen Language 1: 
    <div>
        {$ChosenLanguage1.Language} 
    </div>
</div>
<div>
    
</div>
<div class="border-2 p-2">
    Chosen Language 2: 
    <div>
        {$ChosenLanguage2.Language}
    </div>
</div>
