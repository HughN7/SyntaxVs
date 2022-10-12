<script lang="ts">
    import AboutModal from "./AboutModal.svelte"
</script>

<div class="navbar bg-neutral-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="#home">Syntax Vs.</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li>
        <AboutModal/>
      </li>
    </ul>
  </div>
</div>