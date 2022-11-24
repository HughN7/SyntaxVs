<script lang="ts">
    import {ashes, agate} from "svelte-highlight/styles"
    import {siteTheme,codeTheme} from "../../stores";
    import {onMount} from "svelte";
    import {themeChange} from "theme-change" 

    $codeTheme = $siteTheme.toString() == "light" ? agate : ashes  
    onMount(()=>{
        document.getElementsByTagName("html")[0].dataset.theme = $siteTheme.toString()
        themeChange(false)
    })

    const changeTheme = (event:any) => {
        //get variable pass in
        const themeOption:any = event.target.innerHTML
        console.log("event.target.HTML: ", themeOption)

        //update site theme
        document.getElementsByTagName("html")[0].dataset.theme = themeOption

        //updateStore for site Theme
        $siteTheme = themeOption
        console.log("Updated site theme to: " + $siteTheme, $siteTheme.toString())

        //updateStore for code Theme
        $codeTheme = themeOption == "light" ? agate : ashes
        console.log("Updated code theme to: " + $codeTheme) 
    }

    const changeCodeTheme = async (event:any) =>{
        //Letting site theme to be handled by package
        let theme = localStorage.getItem("theme")
        console.log("package theme: ", theme)

        $codeTheme = theme == "light" ? agate : ashes
        console.log("Updated code theme to: " + $codeTheme) 
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
    <!--li><button on:click={changeTheme} class="uppercase">light</button></li-->
    <!--li><button on:click={changeTheme} class="uppercase">dark</button></li-->

    <!-- Yes, this looks wierd, but it works-->
    <li on:click={changeCodeTheme}><button data-set-theme="light" >Light</button></li>
    <li on:click={changeCodeTheme}><button data-set-theme="dark" >Dark</button></li>
</ul>
 