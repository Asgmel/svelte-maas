<script lang="ts">
	import { text } from '$lib/store/languageStore';
	import Container from '$lib/shared/Container.svelte';

	const sections = [
		{
			heading: $text.landing.pitch.one.heading,
			text: $text.landing.pitch.one.text,
			img: '/images/design_drawing.svg'
		},
		{
			heading: $text.landing.pitch.two.heading,
			text: $text.landing.pitch.two.text,
			img: '/images/mobile_drawing.svg'
		},
		{
			heading: $text.landing.pitch.three.heading,
			text: $text.landing.pitch.three.text,
			img: '/images/SEO_drawing.svg'
		}
	];
</script>

<Container>
	<div class="section">
		{#each sections as section, i}
			<div class="textContainer" style="grid-area: text{i + 1}">
				<h1>{section.heading}</h1>
				<p>{section.text}</p>
				<div class="linkRow">
					<div class="linkContainer">
						<a href="/" class="link"
							>Learn More
							<div class="arrow" />
						</a>
					</div>
				</div>
			</div>
			<div class="imgContainer" style="justify-content: {i == 1 ? 'left' : 'right'};">
				<img
					src={section.img}
					alt="Drawing of a woman designing something"
					class="box"
					style="grid-area: img{i + 1}"
				/>
			</div>
		{/each}
	</div>
</Container>

<style>
	.section {
		display: grid;
		grid-template-columns: 300px;
		grid-template-areas: 'text1' 'img1' 'text2' 'img2' 'text3' 'img3';
		justify-content: center;
		row-gap: 60px;
	}
	.textContainer {
		display: flex;
		flex-direction: column;
		color: var(--color-pink);
	}
	.imgContainer {
		display: flex;
		justify-content: center;
	}
	img {
		max-width: 300px;
		max-height: 300px;
	}
	h1 {
		font-size: 28px;
		color: var(--color-white);
		line-height: 40px;
	}
	p {
		font-size: 15px;
		color: var(--color-white);
		margin: 20px 0;
	}
	.linkRow {
		display: flex;
	}
	.link {
		font-weight: 700;
		font-size: 16px;
		line-height: 28px;
		text-decoration-line: underline;
		color: inherit;
		white-space: nowrap;
		text-underline-offset: 2px;
		display: flex;
	}
	.link:hover > .arrow {
		animation: arrowMovement 1s infinite;
	}
	.arrow {
		width: 30px;
		height: 25px;
		margin: 4px 5px 2px 6px;
		background: no-repeat center url('/icons/mi_arrow_right_alt.svg');
		background-size: cover;
	}

	@media only screen and (min-width: 600px) {
		.section {
			grid-template-columns: 450px;
			row-gap: 75px;
		}
		img {
			max-width: 450px;
			max-height: 450px;
		}
		h1 {
			font-size: 40px;
		}
	}

	@media only screen and (min-width: 900px) {
		img {
			max-width: 380px;
			max-height: 380px;
		}
		.section {
			grid-template-columns: 380px 380px;
			grid-template-rows: 1fr 1fr 1fr;
			grid-template-areas: 'text1 img1' 'img2 text2' 'text3 img3';
			column-gap: 50px;
		}

		h1 {
			font-size: 35px;
		}
	}

	@media only screen and (min-width: 1200px) {
		img {
			max-width: 500px;
			max-height: 500px;
		}
		h1 {
			font-size: 48px;
			line-height: 54px;
		}
		p {
			font-size: 18px;
		}
		.section {
			grid-template-columns: 500px 500px;
			column-gap: 100px;
			row-gap: 100px;
		}
	}

	@media only screen and (min-width: 1300px) {
		.section {
			column-gap: 200px;
		}
	}

	@keyframes arrowMovement {
		0% {
			margin: 4px 5px 2px 6px;
		}
		50% {
			margin: 4px 0px 2px 11px;
		}
		100% {
			margin: 4px 5px 2px 6px;
		}
	}
</style>
