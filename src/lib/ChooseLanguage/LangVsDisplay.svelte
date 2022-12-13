<script lang="ts">
    import LangDropDown from "$lib/ChooseLanguage/LangDropDown.svelte";
    import { LanguageList, ChosenLanguage1, ChosenLanguage2 } from "../../stores"
    import { supabase } from '$lib/supaBaseClient'
    import { onMount } from "svelte"
	
    let lang1ID: number = 0, lang2ID: number = 0;
    let fetchedLangList: boolean = false, fetchedAllLangInfo: boolean = false; 

    //Fetch Language List, then logs
    function runFetchLanguageList(){
        fetchLanguageList().then(
            function(value:boolean) {
                console.log("\nFetched Lang List?: ", value);  
                console.log("Data stored: ", $LanguageList)
                //console.log("Test retrieval datatype: ", typeof($LanguageList[0].Language))
            }
        )
    }

    //Fetch a list of all language id's & names
    async function fetchLanguageList(){
        fetchedLangList = true
        try{
            let { data, error, status } = await supabase
            .from('Languages')
            .select('id, Language')
            
            if (error && status !== 406) throw error

            if(data){
                //console.log("Data retrieved from DB: ", data)
                $LanguageList = data
                //languageListFromDB = data
            }

        }catch(error){
            console.log("Error | Fetched A List of Language ID & Name: ", error)
            fetchedLangList = false
        }
        return fetchedLangList

        
    }

    //Fetch language Info, then logs
    function runFetchAllLanguageInfo(){
        fetchAllLanguageInfo().then(
            function(value:boolean) {
                console.log("\nFetched Lang Info?: ", value);  
                console.log("Data stored: ", $LanguageList)

                //Reactive assignment for svelte
                $ChosenLanguage1 = $ChosenLanguage1
                $ChosenLanguage2 = $ChosenLanguage2
            }
        )
    }
    
    //Fetch language info for the two chosen id's
    async function fetchAllLanguageInfo(){
        fetchedAllLangInfo = true;
        try{
            const {data, error, status} = await supabase
                .from('Languages')
                .select("*")
                .in("id", [lang1ID, lang2ID])

            if (error && status !== 406){
                throw error
            }
            
            if(data){
                console.log("Data retrieved for table: ", data)
                if(data.length < 2){
                    //If we're comparing the same language in both columns
                    $ChosenLanguage1 = $ChosenLanguage2 = data[0]
                }else{
                    //Because we're querying DB with .in, need to assign language to correct column
                    //First lang - column1, second lang - column2
                    if(data[0].id == lang1ID){
                        $ChosenLanguage1 = data[0]
                        $ChosenLanguage2 = data[1]
                    }else{
                        $ChosenLanguage1 = data[1]
                        $ChosenLanguage2 = data[0]
                    }
                }
                console.log("\nchosen lang 1 id: ", lang1ID, $ChosenLanguage1)
                console.log("chosen lang 2 id: ", lang2ID, $ChosenLanguage2, "\n")
            }
            
        }catch(error){
            console.log("Error | Fetching All Language Information: ", error)
            fetchedAllLangInfo = false
        }

        return fetchedAllLangInfo; 
    }

    onMount(runFetchLanguageList)

</script>

<div>
    Compare <LangDropDown bind:chosenLanguageID={lang1ID} on:change={runFetchAllLanguageInfo}/> 
    syntax with <LangDropDown bind:chosenLanguageID={lang2ID} on:change={runFetchAllLanguageInfo}/> syntax
</div>
<!--div>
    <button on:click={()=>console.log("First Language ID", $ChosenLanguage1ID)} class="btn btn-primary">
        Console Log: {$ChosenLanguage1ID}| Lang1ID Passed {lang1ID}
    </button>
    <button on:click={()=>console.log("Second Language ID", $ChosenLanguage2ID)} class="btn btn-primary">
        Console Log: {$ChosenLanguage2ID}| Lang2ID Passed {lang2ID}
    </button>
</div-->