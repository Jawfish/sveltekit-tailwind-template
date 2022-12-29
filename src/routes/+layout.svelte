<script lang="ts">
	import '../app.css';
	import './styles.css';

	import Header from './Header.svelte';
</script>

<div class="min-h-screen flex-col">
	<Header />

	<main
		class="mx-auto my-0 box-border flex w-full max-w-5xl flex-1 flex-col p-4"
	>
		<slot />
	</main>

	<footer class="flex flex-col items-center justify-center p-3 sm:px-0 sm:py-3">
		<p>
			visit <a class="font-bold" href="https://kit.svelte.dev">kit.svelte.dev</a
			> to learn SvelteKit
		</p>
	</footer>
</div>
