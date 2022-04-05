<script>
	export let light = false;
</script>

<div class:light class="background">
	<slot />
</div>

<style>
	.background {
		width: 100%;
		background-color: var(--color-black);
		padding: 20px 20px;
		row-gap: 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.light {
		background-color: var(--color-darkblue);
	}

	@media only screen and (min-width: 600px) {
		.background {
			padding: 20px 40px;
		}
	}

	@media only screen and (min-width: 900px) {
		.background {
			row-gap: 75px;
		}
	}
</style>
