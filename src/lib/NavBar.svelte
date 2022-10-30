<script lang="ts">
// @ts-nocheck
  import AboutModal from "./AboutModal.svelte"

  const themes = ["garden", "dark"]

  let chosenTheme = ""
  const onClickChangeTheme = (event) => {
    chosenTheme = event.target.innerHTML;
    document.getElementsByTagName("html")[0].dataset.theme = chosenTheme;
    window.document.activeElement.blur();
  };

</script>

<div class="navbar bg-neutral-100">
  <div class="navbar-start flex-1">
    <a class="btn btn-ghost normal-case text-3xl" href="#home">Syntax Vs.</a>
  </div>
  <div class="navbar-end flex-none">
    <ul class="menu menu-horizontal p-0">
      <li>
        <a class="btn btn-ghost" href="#theme">
          Theme
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2 bg-base-100 overflow-auto" >
          {#each themes as theme}
          <li><button on:click={onClickChangeTheme}>{theme}</button></li>
          {/each}
        </ul>
      </li>
      <li>
        <AboutModal/>
      </li>
    </ul>
  </div>
</div>