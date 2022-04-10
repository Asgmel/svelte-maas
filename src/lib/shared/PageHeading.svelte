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
		margin: 80px 0;
		max-width: 410px;
	}
	h1 {
		font-weight: 800;
		font-size: 48px;
		line-height: 60px;
		letter-spacing: 10px;
		color: var(--color-white);
	}
	p {
		color: var(--color-white);
		text-align: center;
		font-size: 16px;
	}
</style>
