<script>
	import Container from '$lib/shared/Container.svelte';
	import ContentCard from '$lib/shared/ContentCard.svelte';
	import PageHeading from '$lib/shared/PageHeading.svelte';
	import { text } from '$lib/store/languageStore';

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
	<PageHeading
		title="Services"
		description="Below you can see an overview of topics we can assist your and your business with."
	/>
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
		row-gap: 100px;
		background-color: var(--color-darkblue);
	}
</style>
