<script lang="ts">
	let scrollY = 0;

	function toTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<svelte:window bind:scrollY />

<button on:click={toTop} disabled={!scrollY} class="fixed bottom-8 right-8 p-2 rounded-full bg-gray-600 hover:bg-inherit shadow-xl">
	<svg width="40" height="40" viewBox="0 0 24 24">
        <path d="M12 8l-4 4h8z" fill="#ffffff"/>
    </svg>
</button>
