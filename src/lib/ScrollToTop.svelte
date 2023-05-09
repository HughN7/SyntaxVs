<script lang="ts">
	let scrollY = 0;
	let showButton = false;

	function handleScroll() {
		showButton = window.scrollY > 0;
	}

	function toTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:window on:scroll={handleScroll} />

<button
	on:click={toTop}
	class="fixed bottom-8 right-8 p-2 rounded-full bg-gray-600 hover:bg-gray-700 shadow-xl {showButton
		? ''
		: 'hidden'}"
>
	<svg width="40" height="40" viewBox="0 0 24 24">
		<path d="M12 8l-4 4h8z" fill="#ffffff" />
	</svg>
</button>
