<script>
	import PortfolioDisplay from '$lib/portfolio/PortfolioDisplay.svelte';
	import Container from '$lib/shared/common/Container.svelte';
	import HeadingText from '$lib/shared/content/HeadingText.svelte';
	import PageHeading from '$lib/shared/headings/PageHeading.svelte';
	import PageHeadingContainer from '$lib/shared/components/PageHeadingContainer.svelte';
	import { text } from '$lib/store/languageStore';

	const portfolios = $text.portfolio.items;
</script>

<Container light>
	<PageHeadingContainer>
		<PageHeading>Portfolio</PageHeading>
		<HeadingText>Below you can see some of our earlier projects.</HeadingText>
	</PageHeadingContainer>
</Container>
<Container light>
	<div class="section">
		{#each portfolios as portfolio}
			<PortfolioDisplay {portfolio} />
		{/each}
	</div>
</Container>

<style>
	.section {
		margin-bottom: 100px;
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
