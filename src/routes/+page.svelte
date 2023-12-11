<script lang="js">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'
	import Hero from '$lib/components/hero.svelte'

	export let data

	// Animate Hero
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Hero/>

<div class="">
	<div class="grid grid-cols-6 gap-5 p-10">
		<div class="bg-zinc-900 rounded p-5 col-span-2">
			<h1 class="font-extrabold text-zinc-300">About</h1>
		</div>
		<div class="bg-zinc-900 rounded col-span-4 p-5">
			<p class="font-extrabold text-zinc-300">Recent Posts</p>
			<ul class="posts flex gap-5">
				{#each data.posts as post}
					<li class="bg-zinc-800 rounded text-zinc-300 p-5">
						<a href={post.slug} class="font-bold">{post.title}</a>
						<p class="font-light">{formatDate(post.date)}</p>
						<p class="description">{post.description}</p>
					</li>
				{/each}
			</ul>
		</div>
		<div class="rounded bg-zinc-900 text-zinc-300 col-span-4 p-5 font-serif">
			<p class="font-extralight hover:font-extrabold">Reckoning Landscapes</p>
		</div>
		<div class="bg-zinc-900 rounded text-zinc-300 col-span-2 p-5">
			<p class="font-extralight hover:font-extrabold">Alles fließt</p>
		</div>
		<div class="bg-zinc-900 rounded text-zinc-300 col-span-2 p-5">
			<p class="font-extralight hover:font-extrabold">On Teaching</p>
		</div>
		<div class="bg-zinc-900 rounded text-zinc-300 col-span-2 p-5">
			<p class="font-extralight hover:font-extrabold">Dawn Chorus</p>
		</div>
		<div class="bg-zinc-900 rounded text-zinc-300 col-span-2 p-5">
			<p class="font-extralight hover:font-extrabold">Music</p>
		</div>


	</div>

</div>

<!-- Posts -->


<style>

</style>

