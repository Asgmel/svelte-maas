<script lang="ts">
	import Header from '$lib/layout/header/Header.svelte';
	import Footer from '$lib/layout/footer/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style></style>
