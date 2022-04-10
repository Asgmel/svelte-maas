<script lang="ts">
	export let mirrored = false;
	export let data = {
		title: '',
		text: [],
		img: '',
		alt: ''
	};
</script>

<div class="section">
	<div class="card" class:mirrored>
		<div class="textContainer">
			<h2>{data.title}</h2>
			{#each data.text as text}
				<p>{text}</p>
			{/each}
		</div>
		<div class="imageContainer" style="justify-content: {mirrored ? 'left' : 'right'}">
			<img src={data.img} alt={data.alt} />
		</div>
	</div>
</div>

<style>
	h2 {
		color: var(--color-pink);
		font-weight: 700;
		font-size: 44px;
	}
	p {
		color: var(--color-white);
		margin-top: 35px;
	}
	.section {
		display: flex;
		justify-content: center;
		background-color: var(--color-darkblue);
	}
	.card {
		max-width: 1300px;
		background-color: var(--color-black);
		border-radius: 10px;
		padding: 80px 100px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-areas: 'text image';
		column-gap: 100px;
	}
	.mirrored {
		grid-template-areas: 'image text';
	}
	.textContainer {
		grid-area: text;
	}
	.imageContainer {
		display: flex;
		grid-area: image;
	}
</style>
