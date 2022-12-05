<script lang="ts">
    import { HighlightAuto } from "svelte-highlight"; 
    import { codeTheme, ChosenLanguage1ID, ChosenLanguage2ID } from "../stores";
    import { onMount } from "svelte"; 
    import { supabase } from '$lib/supaBaseClient'
	import { solarizedDark } from "svelte-highlight/styles";
	import { get } from "svelte/store";

    const defaultLang = {
        id: 1,
        created_at: "2022-11-24T06:04:07.612586+00:00",
        Language: "Python",
        Printing: "print(\"Hello There\")",
        Integer: "someVariable = 1",
        Decimal: "someVariable = 6.9",
        String: "someVariable = \"Hello There\""
    }

    $: chosenLanguage1 = defaultLang;
    $: chosenLanguage2 = defaultLang;


    let fetched: boolean = true; 

    /*
    function renderLang1(){
        chosenLanguage1.Language = chosenLanguage1.Language
        return chosenLanguage1.Language
    }

    function renderLang2(){
        chosenLanguage2.Language = chosenLanguage2.Language
        return chosenLanguage2.Language
    }*/

    function mount(){
        fetchLanguages().then((val)=>{
            console.log("Chosen Language 1: ", chosenLanguage1)
            console.log("Chosen Language 2: ", chosenLanguage2)
        })

        //Re-render Lang1 & Lang2
        chosenLanguage1.Language = chosenLanguage1.Language
        chosenLanguage2.Language = chosenLanguage2.Language
    }

    async function fetchLanguages(){
        fetched = true; 
        try{
            //Fetch ID 1
            const {data, error, status} = await supabase
                .from('Languages')
                .select("*")
                //.eq("id", $ChosenLanguage1ID && ChosenLanguage2ID)
                .in("id", [$ChosenLanguage1ID, $ChosenLanguage2ID])

            if (error && status !== 406){
                throw error
            }
            
            if(data){
                console.log("Data retrieved for table: ", data)
                if(data.length < 2){
                    chosenLanguage1 = chosenLanguage2 = data[0]
                }else{
                    chosenLanguage1 = data[0]
                    chosenLanguage2 = data[1]
                }

                console.log("Datatype for table: ", typeof(chosenLanguage1.Language))
            }
            

        }catch(error){
            console.log("Error: ", error)
        }


        return fetched; 
    }

    //onMount(mount)
</script>

<svelte:head>
    {@html $codeTheme}
</svelte:head>

<button class="btn btn-primary" on:click={()=>{mount()}}>
    Go
</button>

<div class="border-2 p-2">
    Chosen Language 1: 
    <div>
        {chosenLanguage1.Language} 
    </div>
</div>
<div>
    
</div>
<div class="border-2 p-2">
    Chosen Language 2: 
    <div>
        {chosenLanguage2.Language}
    </div>
</div>
