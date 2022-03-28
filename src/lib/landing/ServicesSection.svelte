<script lang="ts">
	import Button from '$lib/shared/Button.svelte';
	import Card from '$lib/shared/Card.svelte';
</script>

<div class="section">
	<h1>Our Services</h1>
	<div class="cardContainer">
		<Card>
			<div class="icon" style="background-image: url(&quot;/icons/mi_photo.svg&quot;)" />
			<h3>Graphic Design</h3>
		</Card>
		<Card>
			<div class="icon" style="background-image: url(&quot;/icons/mi_globe.svg&quot;)" />
			<h3>Web Development</h3>
		</Card>
		<Card>
			<div class="icon" style="background-image: url(&quot;/icons/mi_pageview.svg&quot;)" />
			<h3>SEO</h3>
		</Card>
		<Card>
			<div class="icon" style="background-image: url(&quot;/icons/mi_media.svg&quot;)" />
			<h3>CMS</h3>
		</Card>
		<Card>
			<div class="icon" style="background-image: url(&quot;/icons/mi_group.svg&quot;)" />
			<h3>Tech Consulting</h3>
		</Card>
		<Card>
			<div class="icon" style="background-image: url(&quot;/icons/mi_cloud.svg&quot;)" />
			<h3>Hosting</h3>
		</Card>
	</div>
	<Button width="220px" height="70px">Contact Us</Button>
</div>

<style>
	h1 {
		font-size: 40px;
		grid-area: title;
		color: var(--color-white);
	}
	.icon {
		width: 76px;
		height: 76px;
	}
	h3 {
		color: var(--color-white);
		font-weight: 400;
		font-size: 24px;
	}
	.section {
		padding: 40px 0;
		width: 100%;
		background-color: var(--color-darkblue);
		display: grid;
		grid-template-areas: 'title' 'cards' 'button';
		row-gap: 40px;
		align-content: center;
		justify-items: center;
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
