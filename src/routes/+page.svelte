<script lang="ts">
    // @ts-ignore
    import Navbar from "$lib/NavBar.svelte"
    import MainView from "$lib/MidView.svelte"
    /*
    import {onMount} from "svelte"
    import {themeChange} from "theme-change"

    onMount(() => {
        themeChange(false)
    })*/

</script>
<main>
    <Navbar/>
    <MainView/>
</main>
