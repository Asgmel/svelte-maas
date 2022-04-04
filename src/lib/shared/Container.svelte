<script>
	export let light = false;
</script>

<div class:light class="background">
	<slot />
</div>

<style>
	.background {
		width: 100vw;
		background-color: var(--color-black);
		padding: 20px 20px;
	}

	.light {
		background-color: var(--color-darkblue);
	}

	@media only screen and (min-width: 600px) {
		.background {
			padding: 20px 40px;
		}
	}
</style>
