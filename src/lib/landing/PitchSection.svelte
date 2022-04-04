<script lang="ts">
	import { text } from '$lib/store/languageStore';
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

<div class="section">
	{#each sections as section, i}
		<div class="text container" style="grid-area: text{i + 1}">
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
		<img
			src={section.img}
			alt="Drawing of a woman designing something"
			class="container"
			style="grid-area: img{i + 1}"
		/>
	{/each}
</div>

<style>
	.section {
		width: 100%;
		background-color: var(--color-black);
		padding: 0 20px 100px 20px;
		display: grid;
		grid-template-columns: 300px;
		grid-template-areas: 'text1' 'img1' 'text2' 'img2' 'text3' 'img3';
		justify-content: center;
		align-items: center;
		justify-items: center;
		row-gap: 50px;
	}
	.text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: var(--color-pink);
	}
	.container {
		width: 100%;
		height: 100%;
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
			padding: 50px 20px 130px 20px;
			grid-template-columns: 450px;
		}
		h1 {
			font-size: 40px;
		}
	}

	@media only screen and (min-width: 900px) {
		.section {
			padding: 100px 20px 180px 20px;
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
			row-gap: 0px;
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
