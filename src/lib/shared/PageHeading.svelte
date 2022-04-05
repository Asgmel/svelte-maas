<script>
	export let title = '';
	export let description = '';
</script>

<div class="headingContainer">
	<h1>{title}</h1>
	<p>{description}</p>
</div>

<style>
	.headingContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 20px;
		margin-top: 20px;
	}
	h1 {
		letter-spacing: 8px;
		color: var(--color-pink);
	}
	p {
		color: var(--color-white);
		max-width: 600px;
		text-align: center;
		font-size: 16px;
	}
</style>
