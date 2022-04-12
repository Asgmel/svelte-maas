<script lang="ts">
	import SectionHeading from '$lib/shared/headings/SectionHeading.svelte';
	import SectionSubHeading from '$lib/shared/headings/SectionSubHeading.svelte';
	import SectionText from '$lib/shared/content/SectionText.svelte';

	interface IData {
		title: string;
		text?: string[];
		questions?: {
			question: string;
			answer: string;
		}[];
		img: string;
		alt: string;
	}

	export let mirrored = false;
	export let data: IData = {
		title: '',
		text: [],
		questions: [],
		img: '',
		alt: ''
	};
</script>

<div class="section">
	<div class="card" class:mirrored>
		<div class="textContainer container">
			<SectionHeading>{data.title}</SectionHeading>
			{#if data.text && data.text.length > 0}
				<div class="paragraphContainer container">
					{#each data.text as text}
						<SectionText>{text}</SectionText>
					{/each}
				</div>
			{:else if data.questions && data.questions.length > 0}
				{#each data.questions as question}
					<div class="container">
						<SectionSubHeading>{question.question}</SectionSubHeading>
						<SectionText>{question.answer}</SectionText>
					</div>
				{/each}
			{/if}
		</div>
		<div class="imageContainer">
			<img src={data.img} alt={data.alt} />
		</div>
	</div>
</div>

<style>
	.section {
		display: flex;
		justify-content: center;
		background-color: var(--color-darkblue);
	}
	.card {
		max-width: 580px;
		background-color: var(--color-black);
		border-radius: 10px;
		padding: 35px 40px;
		margin: 10px;
		display: grid;
		grid-template-areas: 'text' 'image';
	}
	.container {
		display: flex;
		flex-direction: column;
	}
	.textContainer {
		grid-area: text;
		row-gap: 15px;
	}
	.paragraphContainer {
		row-gap: 30px;
	}
	.imageContainer {
		margin-top: 40px;
		margin-bottom: 10px;
		justify-content: center;
		align-items: center;
		display: flex;
		grid-area: image;
	}
	img {
		max-width: 100%;
		max-height: 450px;
	}
	@media only screen and (min-width: 600px) {
		.card {
			padding: 40px 60px;
		}
	}

	@media only screen and (min-width: 900px) {
		.card {
			max-width: 900px;
			padding: 80px 100px;
			grid-template-columns: 1fr 1fr;
			grid-template-areas: 'text image';
			column-gap: 100px;
		}
		.mirrored {
			grid-template-areas: 'image text';
		}
		.mirrored > .imageContainer {
			justify-content: left;
		}
		.imageContainer {
			margin: 0;
			justify-content: right;
		}
	}

	@media only screen and (min-width: 1200px) {
		.card {
			margin: 0 40px;
			max-width: 1300px;
		}
	}

	@media only screen and (min-width: 1300px) {
	}
</style>
