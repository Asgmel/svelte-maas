<script lang="ts">
	import { each, text } from 'svelte/internal';

	interface IContentBox {
		title: string;
		text?: string;
		questions?: {
			question: string;
			answer: string;
		}[];
		img: string;
		alt: string;
	}

	export let data: IContentBox = {
		title: '',
		text: '',
		questions: [],
		img: '',
		alt: ''
	};
	export let reverse = false;
	export let top = false;
	export let bottom = false;
	export let justifyImage = 'center';
</script>

<div class="section" class:reverse class:top class:bottom>
	<div class="text">
		<h2>{data.title}</h2>
		{#if data.text && data.text.length > 0}
			<p>{data.text}</p>
		{/if}
		{#if data.questions && data.questions.length > 0}
			<div class="questions">
				{#each data.questions as question}
					<h3>{question.question}</h3>
					<p>{question.answer}</p>
				{/each}
			</div>
		{/if}
	</div>
	<div class="image" style="justify-content: {justifyImage}">
		<img src={data.img} alt={data.alt} />
	</div>
</div>

<style>
	h2 {
		font-weight: 500;
		font-size: 35px;
		line-height: 55px;
		color: var(--color-pink);
	}
	h3 {
		font-weight: 400;
		font-size: 24px;
		color: var(--color-pink);
		margin: 20px 0 10px 0;
	}
	p {
		font-size: 16px;
		color: var(--color-white);
	}
	img {
		max-width: 100%;
		max-height: 500px;
	}
	.section {
		display: grid;
		grid-template-areas: 'text' 'img';
	}
	.top {
		margin-top: 20px;
	}
	.bottom {
		margin-bottom: 20px;
	}
	.image {
		max-width: 500px;
		max-height: 500px;
		display: flex;
		grid-area: img;
		margin: 40px 0;
	}
	.text {
		display: flex;
		grid-area: text;
		flex-direction: column;
		row-gap: 10px;
		max-width: 500px;
	}
	@media only screen and (min-width: 600px) {
		.image {
			width: 500px;
			height: 500px;
		}
		.top {
			margin-top: 30px;
		}
		.bottom {
			margin-bottom: 30px;
		}
	}

	@media only screen and (min-width: 900px) {
		.section {
			grid-template-areas: 'text img';
			column-gap: 50px;
		}
		.reverse {
			grid-template-areas: 'img text' !important;
		}
		.text {
			max-width: 400px;
		}
		.image {
			margin: 0;
			max-width: 400px;
			max-height: 400px;
		}
		.top {
			margin-top: 50px;
		}
		.bottom {
			margin-bottom: 50px;
		}
	}

	@media only screen and (min-width: 1200px) {
		.text {
			max-width: 500px;
		}
		.image {
			max-width: 500px;
			max-height: 500px;
		}
		.section {
			column-gap: 100px;
		}
	}

	@media only screen and (min-width: 1300px) {
		.section {
			column-gap: 200px;
		}
	}
</style>
