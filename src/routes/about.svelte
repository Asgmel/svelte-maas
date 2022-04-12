<script>
	import Container from '$lib/shared/common/Container.svelte';
	import ContentCard from '$lib/shared/components/ContentCard.svelte';
	import PageHeadingContainer from '$lib/shared/components/PageHeadingContainer.svelte';
	import HeadingText from '$lib/shared/content/HeadingText.svelte';
	import PageHeading from '$lib/shared/headings/PageHeading.svelte';
	import { text } from '$lib/store/languageStore';

	const sections = [
		{
			mirrored: false,
			data: $text.about.company
		},
		{
			mirrored: true,
			data: $text.about.tech
		},
		{
			mirrored: false,
			data: $text.about.faq
		}
	];
</script>

<Container light>
	<PageHeadingContainer>
		<PageHeading>About</PageHeading>
		<HeadingText>Here is some information about us, the tech we use and a FAQ.</HeadingText>
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
