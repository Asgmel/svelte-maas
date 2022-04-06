<script lang="ts">
	import { text } from '$lib/store/languageStore';
	import Container from '$lib/shared/Container.svelte';

	const sections = [$text.landing.pitch.one, $text.landing.pitch.two, $text.landing.pitch.three];
</script>

<Container>
	{#each sections as section, i}
		<div
			class="section"
			class:top={i == 0}
			class:bottom={i == sections.length - 1}
			class:reverse={i == 1}
		>
			<div class="textContainer">
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
			<div class="imgContainer" class:left={i == 1}>
				<img src={section.img} alt={section.alt} />
			</div>
		</div>
	{/each}
</Container>

<style>
	.section {
		display: grid;
		grid-template-columns: 300px;
		grid-template-areas: 'text' 'img';
		row-gap: 40px;
		justify-content: center;
	}
	.textContainer {
		grid-area: text;
		display: flex;
		flex-direction: column;
		color: var(--color-pink);
	}
	.imgContainer {
		grid-area: img;
		display: flex;
		justify-content: center;
	}
	.top {
		margin-top: 40px;
	}
	.bottom {
		margin-bottom: 75px;
	}
	.left {
		justify-content: left !important;
	}
	img {
		max-width: 100%;
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
			row-gap: 50px;
		}
		img {
			max-height: 450px;
		}
		h1 {
			font-size: 40px;
		}
	}

	@media only screen and (min-width: 900px) {
		.imgContainer {
			justify-content: right;
		}
		img {
			max-width: 380px;
			max-height: 380px;
		}
		.section {
			grid-template-columns: 380px 380px;
			grid-template-areas: 'text img';
			column-gap: 50px;
		}
		.reverse {
			grid-template-areas: 'img text';
		}

		h1 {
			font-size: 35px;
		}
		.top {
			margin-top: 75px;
		}
		.bottom {
			margin-bottom: 75px;
		}
	}

	@media only screen and (min-width: 1200px) {
		img {
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
