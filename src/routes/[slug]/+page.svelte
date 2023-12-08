<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="flex justify-center p-10">

	<article class="text-zinc-300 overflow-auto max-w-prose">
		<!-- Title -->
		  <hgroup>
			  <h1 class="text-2xl">{data.meta.title}</h1>
			  <p class="italic text-sm">Published at {formatDate(data.meta.date)}</p>
		  </hgroup>
	  
		<!-- Tags -->
		  <div class="tags my-5">
			  {#each data.meta.categories as category}
				  <span class="p-2 mx-2 rounded-2xl text-sm bg-zinc-700">&num;{category}</span>
			  {/each}
		  </div>
	  
		<!-- Post -->
		  <div class="prose prose-invert prose-zinc font-serif">
			  <svelte:component this={data.content} />
		  </div>
	  </article>
</div>


<style>
</style>
