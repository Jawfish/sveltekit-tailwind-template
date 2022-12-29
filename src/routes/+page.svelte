<script>
	import Counter from './Counter.svelte';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import welcome from '$lib/images/svelte-welcome.webp';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="flex flex-1 flex-col content-center items-center">
	<h1 class="w-full">
		<span class="welcome relative h-0 w-full">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img
					src={welcome_fallback}
					alt="Welcome"
					class="absolute top-0 block h-full w-full"
				/>
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	.welcome {
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}
</style>
