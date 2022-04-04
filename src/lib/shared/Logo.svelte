<script lang="ts">
	export let light = false;
	export let link = false;
</script>

<div>
	{#if link}
		<a href="/">
			<h1 class:light>maas<span>.</span></h1>
		</a>
	{:else}
		<h1 class:light>maas<span>.</span></h1>
	{/if}
</div>

<style>
	a {
		text-decoration: none;
	}

	div {
		grid-area: logo;
	}

	h1 {
		font-size: 30px;
		line-height: 38px;
	}

	span {
		color: var(--color-pink);
	}
	.light {
		color: var(--color-white);
	}
</style>
