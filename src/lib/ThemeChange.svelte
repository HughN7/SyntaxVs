<script lang="ts">
    

    const themes = ["garden", "dark"]
    let chosenTheme = ""

    const onClickChangeTheme = (event:any) => {
        chosenTheme = event.target.innerHTML;
        document.getElementsByTagName("html")[0].dataset.theme = chosenTheme;
    };
</script>


<a class="btn btn-ghost" href="#theme">
    Theme
    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
</a>
<ul class="p-2 bg-base-100 overflow-auto" >
    {#each themes as theme}
    <li><button on:click={onClickChangeTheme}>{theme}</button></li>
    {/each}
</ul>