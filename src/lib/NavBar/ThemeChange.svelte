<script lang="ts">
    import {ashes, agate} from "svelte-highlight/styles"
    import { siteTheme as siteThemeStore,codeTheme as codeThemeStore } from "../../stores";
    import {onMount} from "svelte"; 

    onMount(()=>{
        document.getElementsByTagName("html")[0].dataset.theme = $siteThemeStore.toString()
        $codeThemeStore = $siteThemeStore.toString() == "light" ? agate : ashes  
    })

    const changeTheme = (event:any) => {
        //get variable pass in
        const themeOption:any = event.target.innerHTML
        console.log("event.target.HTML: ", themeOption)

        //update site theme
        document.getElementsByTagName("html")[0].dataset.theme = themeOption

        //updateStore for site Theme
        $siteThemeStore = themeOption
        console.log("Updated site theme to: " + $siteThemeStore, $siteThemeStore.toString())

        //updateStore for code Theme
        $codeThemeStore  = themeOption == "light" ? agate : ashes
        console.log("Updated code theme to: " + $codeThemeStore) 

    }

    
</script>
<a class="btn btn-ghost" href="#theme">
    Theme
    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
    </svg>
</a>
<ul class="p-2 shadow bg-base-100 rounded-box w-28 text-sm" >
    <!--
    {#each themes as theme}
    <li><button on:click={onClickChangeTheme}>{theme}</button></li>
    {/each}
    -->
    <li><button on:click={changeTheme} class="uppercase">light</button></li>
    <li><button on:click={changeTheme} class="uppercase">dark</button></li>
</ul>
