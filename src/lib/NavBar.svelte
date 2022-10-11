<script>
	import LangChoose from "./LangChoose.svelte";
</script>

<div class="navbar bg-neutral">
  <div class="navbar-start">
    <a class="btn btn-ghost normal-case text-xl text-neutral-content" href="#home">Syntax Vs.</a>
  </div>
  <div class="navbar-center mr-3">
    <LangChoose text="This Language"></LangChoose>
    <h1 class="m-2">Vs.</h1>
    <LangChoose text="That Language" class="ml-7"></LangChoose>
  </div>
  <div class="navbar-end">
    <a class="btn" href="#about">About</a>
  </div>
</div>