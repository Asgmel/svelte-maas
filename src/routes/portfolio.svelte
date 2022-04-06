<script>
	import PortfolioDisplay from '$lib/portfolio/PortfolioDisplay.svelte';
	import Container from '$lib/shared/Container.svelte';
	import { text } from '$lib/store/languageStore';

	const portfolios = $text.portfolio.items;
</script>

<Container light>
	<div class="section">
		{#each portfolios as portfolio}
			<PortfolioDisplay {portfolio} />
		{/each}
	</div>
</Container>

<style>
	.section {
		margin: 40px 0;
		max-width: 1200px;
		grid-template-columns: 1fr;
		display: grid;
		row-gap: 40px;
		column-gap: 40px;
	}

	@media only screen and (min-width: 900px) {
		.section {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
