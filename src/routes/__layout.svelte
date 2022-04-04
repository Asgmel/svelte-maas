<script lang="ts">
	import NormalizeCSS from '$lib/styles/NormalizeCSS.svelte';
	import GlobalCSS from '$lib/styles/GlobalCSS.svelte';
	import ImportVariablesCSS from '$lib/styles/ImportVariablesCSS.svelte';
	import Header from '$lib/layout/header/Header.svelte';
	import Footer from '$lib/layout/footer/Footer.svelte';
	import LoadText from '$lib/api/LoadText.svelte';
</script>

<!-- CSS -->
<NormalizeCSS />
<GlobalCSS />
<ImportVariablesCSS />
<LoadText />

<!-- Content -->
<Header />
<main>
	<slot />
</main>
<Footer />

<style></style>
