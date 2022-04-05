<script>
	import Container from '$lib/shared/Container.svelte';
	import ContentBox from '$lib/shared/ContentBox.svelte';
	import PageHeading from '$lib/shared/PageHeading.svelte';
	import { text } from '$lib/store/languageStore';

	const sections = [
		{
			light: false,
			data: $text.services.graphicDesign
		},
		{
			light: true,
			data: $text.services.development
		},
		{
			light: false,
			data: $text.services.seo
		},
		{
			light: true,
			data: $text.services.cms
		},
		{
			light: false,
			data: $text.services.techConsulting
		},
		{
			light: true,
			data: $text.services.hosting
		}
	];
</script>

{#each sections as section, i}
	<Container light={section.light}>
		{#if i === 0}
			<PageHeading
				title="Services"
				description="A quick overview of the services we can help you with. You can contact us to learn more and discuss your particular needs."
			/>
		{/if}
		<ContentBox
			data={section.data}
			reverse={section.light}
			top
			bottom
			justifyImage={!section.light ? 'right' : 'left'}
		/>
	</Container>
{/each}
