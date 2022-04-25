<script lang="ts">
	import Button from '$lib/shared/common/Button.svelte';
	import Card from '$lib/shared/common/Card.svelte';
	import Container from '$lib/shared/common/Container.svelte';

	export let data = {
		title: '',
		items: [],
		button: ''
	};
</script>

<Container light>
	<div class="section">
		<h1>{data.title}</h1>
		<div class="cardContainer">
			{#each data.items as item}
				<Card>
					<div class="icon" style="background-image: url(&quot;/icons/{item.icon}&quot;)" />
					<h3>{data.title}</h3>
				</Card>
			{/each}
		</div>
		<Button width="220px" height="70px">{data.button}</Button>
	</div>
</Container>

<style>
	h1 {
		font-size: 40px;
		grid-area: title;
		color: var(--color-white);
	}
	h3 {
		color: var(--color-white);
		font-weight: 400;
		font-size: 24px;
	}
	.section {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 50px;
		padding: 40px 0 70px 0;
	}
	.icon {
		width: 76px;
		height: 76px;
	}
	.cardContainer {
		grid-area: cards;
		display: grid;
		justify-content: center;
		grid-template-columns: 300px;
		grid-template-rows: repeat(6, 180px);
		row-gap: 40px;
	}

	@media only screen and (min-width: 600px) {
		.cardContainer {
			grid-template-columns: 450px;
			grid-template-rows: repeat(6, 270px);
		}
	}

	@media only screen and (min-width: 900px) {
		.cardContainer {
			grid-template-columns: 380px 380px;
			grid-template-rows: repeat(3, 228px);
			column-gap: 50px;
		}
	}

	@media only screen and (min-width: 1200px) {
		h1 {
			font-size: 48px;
		}
		.cardContainer {
			grid-template-columns: 347px 347px 347px;
			grid-template-rows: repeat(2, 208px);
			row-gap: 30px;
			column-gap: 30px;
		}
	}
	@media only screen and (min-width: 1300px) {
		h1 {
			font-size: 48px;
		}
		.cardContainer {
			grid-template-columns: 380px 380px 380px;
			grid-template-rows: repeat(2, 228px);
			row-gap: 30px;
			column-gap: 30px;
		}
	}
</style>
