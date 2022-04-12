<script lang="ts">
	import Card from '$lib/shared/common/Card.svelte';

	export let portfolio = {
		title: '',
		description: '',
		tags: '',
		img: '',
		alt: '',
		url: ''
	};
</script>

<Card>
	<div class="wrapper">
		<a href={portfolio.url}>
			<img src={portfolio.img} alt={portfolio.alt} />
			<h2>{portfolio.title}</h2>
		</a>
		<p>{portfolio.description}</p>
		<p class="tags">{portfolio.tags}</p>
	</div>
</Card>

<style>
	img {
		width: 100%;
		border-radius: 8px;
		border: 1px solid var(--color-darkblue);
		filter: grayscale(0%);
		transition: filter 0.2s ease-in-out;
		grid-area: img;
	}
	h2 {
		font-weight: 400;
		font-size: 32px;
		line-height: 40px;
		color: var(--color-pink);
		background-image: linear-gradient(var(--color-pink), var(--color-pink));
		background-size: 0% 2px;
		background-position-y: 100%;
		background-position-x: 0%;
		background-repeat: no-repeat;
		transition: background-size 0.2s ease-in-out;
		grid-area: heading;
	}
	a:hover > h2 {
		background-size: 100% 2px;
	}
	a:hover > img {
		filter: grayscale(0%);
	}
	p {
		color: var(--color-white);
	}
	a {
		text-decoration: none;
		display: grid;
		row-gap: 15px;
		grid-template-areas: 'img img' 'heading .';
		grid-template-columns: min-content 1fr;
	}
	.wrapper {
		padding: 20px;
		max-width: 400px;
		min-height: 100%;
		row-gap: 15px;
		display: flex;
		flex-direction: column;
	}
	.tags {
		color: rgba(229, 229, 229, 0.6);
		font-size: 14px;
	}

	@media only screen and (min-width: 600px) {
		.wrapper {
			padding: 40px;
			max-width: 500px;
		}
	}
	@media only screen and (min-width: 900px) {
		img {
			filter: grayscale(100%);
		}
	}
	@media only screen and (min-width: 1200px) {
	}
</style>
