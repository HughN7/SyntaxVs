<script lang="ts">
	import { ashes, agate } from 'svelte-highlight/styles';
	import { siteTheme, codeTheme } from '../../stores';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

	$codeTheme = $siteTheme.toString() == 'light' ? agate : ashes;
	onMount(() => {
		//document.getElementsByTagName("html")[0].dataset.theme = $siteTheme.toString()
		themeChange(false);
	});

	const changeCodeTheme = (event: any) => {
		//Letting site theme to be handled by package
		let theme = localStorage.getItem('theme');
		console.log('package theme: ', theme);

		$codeTheme = theme == 'light' ? agate : ashes;
		console.log('Updated code theme to: ' + $codeTheme);
	};
</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

<a class="btn btn-ghost" href="#theme">
	Theme
	<svg
		class="fill-current"
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		viewBox="0 0 24 24"
	>
		<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
	</svg>
</a>
<ul class="shadow bg-base-100 w-28 h-auto text-sm ml-8 z-10">
	<!--
    {#each themes as theme}
    <li><button on:click={onClickChangeTheme}>{theme}</button></li>
    {/each}
    -->
	<!--li><button on:click={changeTheme} class="uppercase">light</button></li-->
	<!--li><button on:click={changeTheme} class="uppercase">dark</button></li-->

	<!-- Yes, this looks weird, but it works-->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<li on:click={changeCodeTheme}>
		<button data-set-theme="light" class="uppercase">
            Light
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="pl-2">
                <span class="material-symbols-outlined">
                    light_mode
                </span>
            </a>
        </button>
	</li>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<li on:click={changeCodeTheme}>
        <button data-set-theme="dark" class="uppercase">
            Dark
            <!-- svelte-ignore a11y-missing-attribute -->
            <a class="pl-2">
                <span class="material-symbols-outlined">
                    dark_mode
                </span>
            </a>
            
        </button>
    </li>
</ul>


<style>
    .material-symbols-outlined {
      font-variation-settings:
      'FILL' 0,
      'wght' 400,
      'GRAD' 0,
      'opsz' 48
    }
</style>