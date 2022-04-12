<script>
	import Container from '$lib/shared/common/Container.svelte';
	import ContentCard from '$lib/shared/components/ContentCard.svelte';
	import { text } from '$lib/store/languageStore';
	import PageHeadingContainer from '$lib/shared/components/PageHeadingContainer.svelte';
	import PageHeading from '$lib/shared/headings/PageHeading.svelte';
	import HeadingText from '$lib/shared/content/HeadingText.svelte';

	const sections = [
		{
			mirrored: false,
			data: $text.services.graphicDesign
		},
		{
			mirrored: true,
			data: $text.services.development
		},
		{
			mirrored: false,
			data: $text.services.seo
		},
		{
			mirrored: true,
			data: $text.services.cms
		},
		{
			mirrored: false,
			data: $text.services.techConsulting
		},
		{
			mirrored: true,
			data: $text.services.hosting
		}
	];
</script>

<Container light>
	<PageHeadingContainer>
		<PageHeading>Services</PageHeading>
		<HeadingText
			>Below you can see an overview of topics we can assist your and your business with.</HeadingText
		>
	</PageHeadingContainer>
</Container>
<div class="content">
	{#each sections as { mirrored, data }}
		<ContentCard {mirrored} {data} />
	{/each}
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		row-gap: 40px;
		background-color: var(--color-darkblue);
		padding-bottom: 60px;
	}

	@media only screen and (min-width: 1200px) {
		.content {
			row-gap: 100px;
			padding-bottom: 100px;
		}
	}
</style>
