<script lang="ts">
	import * as config from '$lib/config'
</script>

<nav class="bg-zinc-700 px-10 py-5 flex sticky top-0">
  <!-- Title -->
	<a href="/" class="title text-zinc-300">
		<b>{config.title}</b>
	</a>

  <!-- Navigation -->
	<ul class="flex-auto flex gap-x-5 place-content-end">
		{#each config.navitems as navitem}
			<li class="text-zinc-400">
				<a href={navitem.href} target={navitem.target}>{navitem.title}</a>
			</li>
		{/each}
	</ul>
</nav>

<style>

</style>
