<script lang="ts">
// @ts-nocheck
  import AboutModal from "./AboutModal.svelte"
  import ThemeChange from "./ThemeChange.svelte";

</script>

<div class="navbar bg-neutral-100">
  <div class="navbar-start flex-1">
    <a class="btn btn-ghost normal-case text-3xl" href="#home">Syntax Vs.</a>
  </div>
  <div class="navbar-end flex-none">
    <ul class="menu menu-horizontal p-0">
      <li>
        <ThemeChange/>
      </li>
      <li>
        <AboutModal/>
      </li>
    </ul>
  </div>
</div>