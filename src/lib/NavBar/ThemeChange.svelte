<script lang="ts">
    import {ashes, agate} from "svelte-highlight/styles"
    import { ChosenTheme } from "../../stores";

    interface styles {
        [key:string]:string; 
    }

    const builtInStyles: styles = {
        "light": agate,
        "dark": ashes
    }

    //const themes:string[] = ["light", "dark"]
    let chosenTheme:string = "light"
    $ChosenTheme = builtInStyles[chosenTheme]

    const onClickChangeTheme = (event:any) => {
        chosenTheme = event.target.innerHTML
        $ChosenTheme = builtInStyles[chosenTheme]
        document.getElementsByTagName("html")[0].dataset.theme = chosenTheme;
        console.log("Updated chosen theme to: " + $ChosenTheme) 
    };
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
    <li><button on:click={onClickChangeTheme} class="uppercase">light</button></li>
    <li><button on:click={onClickChangeTheme} class="uppercase">dark</button></li>
</ul>
