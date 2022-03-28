<script lang="ts">
	export let light = false;
</script>

<div>
	<h1 class:light>maas<span>.</span></h1>
</div>

<style>
	div {
		grid-area: logo;
	}

	h1 {
		font-size: 30px;
		line-height: 38px;
		grid-area: logo;
	}

	span {
		color: var(--color-pink);
	}
	.light {
		color: var(--color-white);
	}
</style>
