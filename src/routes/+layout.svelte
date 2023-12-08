<script lang="ts">
	import Footer from './footer.svelte'
	import Header from './header.svelte'


	import "../app.pcss"
</script>

<div class="layout">
  <!-- Header -->
	<Header></Header>

	<main class="">
		<!-- Black hole for other content -->
		<slot></slot>
	</main>

  <!-- Footer -->
	<Footer></Footer>
</div>

<style>
</style>
