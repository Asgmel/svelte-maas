<script>
	import Container from '$lib/shared/Container.svelte';
	import ContentBox from '$lib/shared/ContentBox.svelte';
	import { text } from '$lib/store/languageStore';

	const sections = [
		{
			light: true,
			rows: [$text.about.company]
		},
		{
			light: false,
			rows: [$text.about.tech]
		},
		{
			light: true,
			rows: [$text.about.faq]
		}
	];
</script>

{#each sections as section}
	<Container light={section.light}>
		{#each section.rows as data, i}
			<ContentBox {data} reverse={!section.light} top bottom />
		{/each}
	</Container>
{/each}
