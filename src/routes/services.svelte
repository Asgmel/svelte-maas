<script>
	import Container from '$lib/shared/Container.svelte';
	import { text } from '$lib/store/languageStore';

	const sections = [
		{
			light: true,
			rows: [$text.services.graphicDesign, $text.services.development]
		},
		{
			light: false,
			rows: [$text.services.seo, $text.services.cms]
		},
		{
			light: true,
			rows: [$text.services.techConsulting, $text.services.hosting]
		}
	];
</script>

{#each sections as section}
	<Container light={section.light}>
		{#each section.rows as row}
			<div class="text">
				<h2>{row.title}</h2>
				<p>{row.text}</p>
			</div>
			<div class="image">
				<img src={row.img} alt={row.alt} />
			</div>
		{/each}
	</Container>
{/each}

<style>
	h2 {
		font-weight: 500;
		font-size: 35px;
		line-height: 55px;
		color: var(--color-pink);
	}
	p {
		font-size: 16px;
		color: var(--color-white);
	}
	img {
		max-width: 100%;
	}
	.text {
		display: grid;
		row-gap: 10px;
	}
	.image {
		margin: 40px 0;
	}
</style>
