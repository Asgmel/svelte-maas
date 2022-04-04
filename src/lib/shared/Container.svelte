<script>
	export let light = false;
</script>

<div class:light class="background" />

<style>
	.background {
		width: 100%;
		background-color: var(--color-darkblue);
		padding: 100px;
	}

	.light {
		background-color: var(--color-lightblue);
	}
</style>
